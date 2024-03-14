'use client';

import { createContext, useEffect, useState } from 'react';
import { IItemCart } from '@/types/types-general';
import { keyLocalStorage } from '@/configs/config';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { fetchDataAuthen } from '@/lib/post-data';
import { useBoolean } from '@/hooks/use-boolean';
import ChooseGlasses from '@/components/component-ui-custom/choose-glasses';

export const ProductCartContext = createContext<any>({});
export function ContextProvider({
  children,
  session,
  listAttributeChooseGlasses,
}: any) {
  const pathname = usePathname();
  const isShowPopupChooseGlasses = useBoolean(false);

  const [inforUserGlobal, setInfoUserGlobal] = useState<any>(undefined);
  const [listCartGlobal, setListCartGlobal] = useState<IItemCart[]>([]);

  // CART CONTEXT
  const handleChangeDataCartGlobal = (data: IItemCart[]): void => {
    setListCartGlobal(data);
  };

  const clearDataCartProductContext = (): void => {
    setListCartGlobal([]);
    localStorage.setItem(keyLocalStorage.keyProductsInCart, "[]")
  };
  // END CONTEXT

  const isLogin = (): boolean => {
    return session !== null;
  };

  // GET API info user
  const bodyGetInfoUser: any = {
    url: `wp-json/custom-woo-api/v1/customer`,
    method: 'get',
    token: session?.user?.token,
  };

  // GET API cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token: session?.user.token,
  };
  // GET LIST Wishlist
  const bodyGetListWishList: any = {
    url: `wp-json/custom/v1/get-wishlist`,
    method: 'get',
    token: session?.user.token,
  };

  useEffect(() => {
    if (
      session === null &&
      typeof window !== 'undefined' &&
      localStorage.getItem(keyLocalStorage.keyProductsInCart) !== null &&
      localStorage.getItem(keyLocalStorage.keyProductsInCart) !== undefined
    ) {
      const storedData = localStorage.getItem(
        keyLocalStorage.keyProductsInCart
      ) as string;
      setListCartGlobal(JSON.parse(storedData));
      return;
    }

    Promise.all([
      session !== null
        ? fetchDataAuthen(bodyGetInfoUser)
        : Promise.resolve(undefined),
      session !== null ? fetchDataAuthen(bodyGetCart) : Promise.resolve([]),
      session !== null
        ? fetchDataAuthen(bodyGetListWishList)
        : Promise.resolve([]),
    ])
      .then((res) => {
        const [userInfo, listCart, listWishlist] = res;
        setInfoUserGlobal(userInfo);
        setListCartGlobal(listCart);

        if (listWishlist) {
          const listIdWishlist = listWishlist.map((item: any) =>
            parseInt(item.wishlist_id, 10)
          );

          localStorage.setItem(
            keyLocalStorage.keyProductWishlist,
            JSON.stringify(listIdWishlist)
          );
        }
      })
      .catch((error) => {
        console.log('error');
      });
  }, []);

  return (
    <SessionProvider>
      <ProductCartContext.Provider
        value={{
          handleChangeDataCartGlobal,
          clearDataCartProductContext,
          listCartGlobal,
          isLogin,
          inforUserGlobal,
          // isShowPopupGlobal,
          // getDataDetailPopup,
          isShowPopupChooseGlasses,
        }}
      >
        <ChooseGlasses
          isShowPopupChooseGlasses={isShowPopupChooseGlasses}
          listAttributeChooseGlasses={listAttributeChooseGlasses}
        />
        {children}
      </ProductCartContext.Provider>
    </SessionProvider>
  );
}
