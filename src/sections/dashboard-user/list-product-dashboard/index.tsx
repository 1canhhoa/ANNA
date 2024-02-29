'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ICBag2 from '@/components/Icons/ICBag2';
import ICCoupons from '@/components/Icons/ICCoupons';
import FavoriteProduct from '@/sections/dashboard-user/list-product-dashboard/components/favorite-product';
import PurchasedProduct from '@/sections/dashboard-user/list-product-dashboard/components/purchased-product';
import useSWR from 'swr';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { useSession } from 'next-auth/react';

function ListProductDashboard() {
  const [isLoadingDeleteWishList, setIsLoadingDeleteWishlist] =
    useState<boolean>(false);
  const { data: session } = useSession();

  // GET LIST Wishlist
  const bodyGetListWishList: any = {
    url: `wp-json/custom/v1/get-wishlist`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetWishList = useSWR(bodyGetListWishList.url, () =>
    session !== null ? fetchDataAuthen(bodyGetListWishList) : undefined
  );
  // END

  // GET LIST ORDER
  const bodyGetListOrder: any = {
    url: `wp-json/custom/v1/get-order`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetListOrder = useSWR(bodyGetListOrder.url, () =>
    session !== null ? fetchDataAuthen(bodyGetListOrder) : undefined
  );

  const handleDeleteProductWishList = async (id: number): Promise<void> => {
    setIsLoadingDeleteWishlist(true);
    try {
      await fetchDataAuthen({
        url: 'wp-json/custom/v1/delete-wishlist',
        method: 'delete',
        body: JSON.stringify({ wishlist_items: [{ id: id }] }),
        token: session?.user.token,
      }).then(() => {
        dataGetWishList.mutate();
        onSuccess({
          message: 'Xóa sản phẩm yêu thích thành công!',
        });
        setIsLoadingDeleteWishlist(false);
      });
    } catch (error: any) {
      setIsLoadingDeleteWishlist(false);
      onError();
    }
  };

  return (
    <Tabs
      defaultValue="purchased-product"
      className="w-full h-full scroll-smooth"
    >
      <TabsList className="grid w-full h-fit grid-cols-2 p-[0.6rem] rounded-[1rem] max-md:grid-cols-1 max-md:p-[2rem]">
        <TabsTrigger
          value="purchased-product"
          className="flex py-[0.6rem] rounded-[0.8rem] max-md:py-[2rem] max-md:px-[4rem] max-md:justify-start"
        >
          <div className="rounded-full w-[3.3125rem] h-[3.3125rem] bg-[#95D1CD] flex justify-center items-center max-md:w-[9.533rem] max-md:h-[9.533rem]">
            <ICBag2 />
          </div>
          <div className="ml-[1rem] flex flex-col items-start max-md:flex-row-reverse">
            <h3 className="max-md:hidden text-[1.875rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem]">
              {dataGetListOrder.data?.length ?? 0}
            </h3>
            <h3 className="hidden max-md:block text-[3.33rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem] ml-[1rem]">
              ({dataGetListOrder.data?.length ?? 0})
            </h3>
            <span className="font-bold text-[0.8rem] text-[#494949] max-md:text-[3.33rem] max-md:ml-[1rem]">
              Sản phẩm đã mua
            </span>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="favorite-product"
          className="flex py-[0.6rem] rounded-[1rem] max-md:py-[2rem] max-md:px-[4rem] max-md:justify-start"
        >
          <div className="rounded-full w-[3.3125rem] h-[3.3125rem] bg-[#95D1CD] flex justify-center items-center max-md:w-[9.533rem] max-md:h-[9.533rem]">
            <ICCoupons />
          </div>
          <div className="ml-[1rem] flex flex-col items-start max-md:flex-row-reverse">
            <h3 className="max-md:hidden text-[1.875rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem]">
              {dataGetWishList?.data?.length ?? 0}
            </h3>
            <h3 className="hidden max-md:block text-[3.33rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem] ml-[1rem]">
              ({dataGetWishList?.data?.length ?? 0})
            </h3>
            <span className="font-bold text-[0.8rem] text-[#494949] max-md:text-[3.33rem] max-md:ml-[1rem]">
              Sản phẩm yêu thích
            </span>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="purchased-product">
        <PurchasedProduct
          dataGetListOrder={dataGetListOrder.data}
          isLoading={dataGetListOrder.isLoading}
        />
      </TabsContent>
      <TabsContent value="favorite-product">
        <FavoriteProduct
          handleDeleteProductWishList={handleDeleteProductWishList}
          dataWishList={dataGetWishList?.data}
          isLoading={isLoadingDeleteWishList}
        />
      </TabsContent>
    </Tabs>
  );
}

export default ListProductDashboard;
