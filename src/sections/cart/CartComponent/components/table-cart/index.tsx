'use client';

import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import './style.css';
import { InputChangeAmount } from '@/sections/cart/CartComponent/components/input-change-amount';
import { IItemCart } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import Link from 'next/link';
import { toast } from 'sonner';
import { keyLocalStorage } from '@/configs/config';
import map from 'lodash.map';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { cn } from '@/lib/utils';
import { ProductCartContext } from '@/context-provider';
import { useSession } from 'next-auth/react';

interface IProps {
  handleTotalCart: (data: IItemCart[]) => void;
  totalPrice?: any;
}

interface ILoading {
  isLoadingDelete: boolean;
  isLoadingUpdate: boolean;
}

export function TableCart(props: IProps) {
  const { handleTotalCart, totalPrice } = props;

  const { data: session } = useSession();
  const { handleChangeDataCartGlobal, listCartGlobal } =
    useContext<any>(ProductCartContext);

  const [dataInit, setDataInit] = useState<IItemCart[]>(listCartGlobal);
  const [listIdSelected, setListIdSelected] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<ILoading>({
    isLoadingDelete: false,
    isLoadingUpdate: false,
  });

  const handleSelecAllProduct = (value: any): void => {
    const listID: any = [];

    if (value) {
      dataInit.map((item: any) =>
        listID.push(item?.key ? item?.key : item?.product_id)
      );

      setListIdSelected(listID);
    } else {
      setListIdSelected([]);
    }
  };

  // const handleUpdateCart = async () => {
  //   setIsLoading({ ...isLoading, isLoadingUpdate: true });
  //   const newArrayUpdateCart = map(dataInit, (item) => {
  //     const newObject = {
  //       key: item.key,
  //       quantity: item.quantity,
  //     };
  //
  //     return newObject;
  //   });
  //
  //   if (session === null) {
  //     localStorage.setItem(keyProductsInCart, JSON.stringify(dataInit));
  //     handleChangeDataCartGlobal(dataInit);
  //     handleTotalCart(dataInit);
  //   }
  //
  //   try {
  //     await fetchDataAuthen({
  //       url: 'wp-json/woocart/v1/update-cart',
  //       method: 'post',
  //       body: JSON.stringify({ cart_items: newArrayUpdateCart }),
  //       token: session?.user?.token,
  //     }).then(() => {
  //       setIsLoading({ ...isLoading, isLoadingUpdate: false });
  //
  //       handleChangeDataCartGlobal(dataInit);
  //       handleTotalCart(dataInit);
  //
  //       onSuccess({
  //         message: 'Cập nhật giỏ hàng thành công!',
  //       });
  //     });
  //   } catch (error: any) {
  //     setIsLoading({ ...isLoading, isLoadingUpdate: false });
  //   }
  // };

  const onChangeSelectOneProduct = (value: any, id?: string | number): void => {
    if (id) {
      const fintIdSelected = listIdSelected.filter(
        (itemID: string | number) => itemID === id
      );

      if (fintIdSelected.length === 0) {
        setListIdSelected([...listIdSelected, id]);
      } else {
        const newArrayID = listIdSelected.filter((item: any) => item !== id);
        setListIdSelected(newArrayID);
      }
    }
  };

  const handleFindIDSeleced = (id?: number | string): boolean => {
    const fintID = listIdSelected.filter((item: any) => item === id);

    return fintID.length > 0;
  };

  const handleDeleteProductLocalStorage = (): void => {
    const arrayProductSubmitLocalStorage = [];

    const newArrayListId = listIdSelected.sort();

    let indexTmp = 0; // save index in dataInit
    for (let i = 0; i < newArrayListId.length; i++) {
      while (indexTmp <= dataInit.length - 1) {
        const currentItem = dataInit[indexTmp];

        if (newArrayListId[i] !== currentItem.product_id) {
          arrayProductSubmitLocalStorage.push(currentItem);
        }
        indexTmp++;
      }
    }

    handleChangeDataCartGlobal(arrayProductSubmitLocalStorage);
    handleTotalCart(arrayProductSubmitLocalStorage);

    typeof window !== 'undefined' &&
      localStorage.setItem(
        keyLocalStorage.keyProductsInCart,
        JSON.stringify(arrayProductSubmitLocalStorage)
      );

    toast('Thành công !', {
      position: 'top-right',
      description: 'Xóa sản phẩm thành công',
      duration: 3000,
      action: {
        label: 'ẨN',
        onClick: () => console.log('Undo'),
      },
    });

    setDataInit(arrayProductSubmitLocalStorage);
  };

  const handleArrayProductCartLocalStorage = () => {
    const arrayTmp = [];

    for (let i = 0; i < dataInit.length; i++) {
      let isAvailable = false;
      for (let j = 0; j < listIdSelected.length; j++) {
        const keyCheck = dataInit[i].key ?? dataInit[i].product_id;
        if (keyCheck === listIdSelected[j]) {
          isAvailable = true;
        }
      }
      if (isAvailable === false) {
        arrayTmp.push(dataInit[i]);
      }
    }

    return arrayTmp;
  };

  const handleDeleteProductAPI = async () => {
    setIsLoading({ ...isLoading, isLoadingDelete: true });

    const listKeySubmit: any = [];

    map(listIdSelected, (item) => {
      listKeySubmit.push({
        key: item,
      });
    });

    try {
      await fetchDataAuthen({
        url: 'wp-json/woocart/v1/cart',
        method: 'delete',
        body: JSON.stringify({ cart_items: listKeySubmit }),
        token: session?.user?.token,
      }).then(() => {
        setIsLoading({ ...isLoading, isLoadingDelete: false });

        localStorage.setItem(
          keyLocalStorage.keyProductsInCart,
          JSON.stringify(handleArrayProductCartLocalStorage())
        );

        setDataInit(handleArrayProductCartLocalStorage());
        handleChangeDataCartGlobal(handleArrayProductCartLocalStorage());
        handleTotalCart(handleArrayProductCartLocalStorage());

        setListIdSelected([]);

        onSuccess({
          message: 'Xóa sản phẩm thành công!',
        });
      });
    } catch (error: any) {
      setIsLoading({ ...isLoading, isLoadingDelete: false });
      onError();
    }
  };

  useEffect(() => {
    if (listCartGlobal?.length > 0) {
      setDataInit(listCartGlobal);
    }
  }, [listCartGlobal]);

  // useEffect(() => {
  //   handleTotalCart(dataInit);
  // }, [dataInit]);

  return (
    <>
      <div className="list-product-cart">
        <div className="header-list-product ">
          <div className="checkbox-header">
            <Checkbox
              checked={
                dataInit.length > 0 && dataInit.length === listIdSelected.length
              }
              onCheckedChange={(value) => handleSelecAllProduct(value)}
              className="border-2 border-[#C4C4C4]"
              aria-label="Select row"
            />
          </div>
          <div className="info-product-title">
            <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
              Thông tin sản phẩm
            </div>
          </div>
          <div className="price-product-title">
            <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
              Giá
            </div>
          </div>
          <div className="amount-product-title">
            <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
              Số lượng
            </div>
          </div>
          <div className="stock-quantity-title w-[13rem]">
            <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
              Còn lại
            </div>
          </div>
          <div className="total-product-title">
            <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
              Tổng cộng
            </div>
          </div>
        </div>
        <hr />

        {dataInit.map((item: IItemCart, index: number) => (
          <div key={index} className="body-list-product">
            <div className="row-body-list-product">
              <div className="checkbox-body">
                <Checkbox
                  onCheckedChange={(value: boolean) =>
                    onChangeSelectOneProduct(
                      value,
                      item?.key ? item?.key : item?.product_id
                    )
                  }
                  checked={handleFindIDSeleced(
                    item?.key ? item?.key : item?.product_id
                  )}
                  className="border-2 border-[#C4C4C4] max-md:w-[5rem] max-md:h-[5rem]"
                  aria-label="Select row"
                />
              </div>
              <div className="info-product">
                <div className="h-[7.5rem] max-md:h-[34rem] flex max-md:grow">
                  <Image
                    width={70}
                    height={70}
                    className="h-full w-[7.5rem] max-md:w-[32rem] max-md:h-[34rem]"
                    src={item?.product_image ?? '/img/no_image.jpg'}
                    alt="img product"
                  />
                  <div className="h-full ml-[1rem] flex flex-col justify-center max-md:ml-[3.25rem] max-md:justify-between max-md:grow">
                    <h4 className="text-[0.875rem] not-italic font-bold  max-md:text-[3.24rem] max-md:mb-[1rem] line-clamp-2 max-md:leading-[5.2rem]">
                      {item?.product_name}
                    </h4>
                    <div className="hidden max-md:flex justify-between mb-[1.2rem]">
                      <div className="not-italic font-normal  text-[3.15rem] w-1/3">
                        Price:
                      </div>
                      <div className="not-italic font-bold  text-[3.15rem]">
                        {formatCurrencyVND(totalPrice.toString())}
                      </div>
                    </div>
                    <div className="hidden max-md:flex justify-between">
                      <div className="not-italic font-normal  text-[3.15rem] w-1/3">
                        Subtotal:
                      </div>
                      <div className="not-italic font-bold text-[3.15rem]">
                        {formatCurrencyVND(totalPrice.toString())}
                      </div>
                    </div>
                    <div className="mt-[2.5rem] hidden max-md:block ">
                      <InputChangeAmount
                        dataItemCart={item}
                        setDataInit={setDataInit}
                        dataInit={dataInit}
                        handleTotalCart={handleTotalCart}
                      />
                    </div>

                    {/* <u className="text-[1.125rem] not-italic font-normal leading-[1.6875rem] max-md:hidden"> */}
                    {/*  Xóa */}
                    {/* </u> */}
                  </div>
                </div>
              </div>
              <div className="price-product">
                <div className="text-black text-[1rem] font-medium not-italic leading-[1.6875rem]">
                  {formatCurrencyVND(item?.product_price ?? '0')}
                </div>
              </div>
              <div className="amount-product">
                <InputChangeAmount
                  dataItemCart={item}
                  setDataInit={setDataInit}
                  dataInit={dataInit}
                  handleTotalCart={handleTotalCart}
                />
              </div>
              <div className="stock-quantity w-[13rem]">
                {item?.stock_quantity && (
                  <div className="text-[1.125rem] not-italic font-bold leading-[1.6875rem]">
                    {item?.stock_quantity} sản phẩm
                  </div>
                )}
              </div>
              <div className="total-product ">
                {item?.product_price && item?.quantity && (
                  <div className="text-[1.125rem] not-italic font-bold leading-[1.6875rem]">
                    {formatCurrencyVND(
                      (
                        parseInt(item.product_price, 10) * item.quantity
                      ).toString()
                    )}
                  </div>
                )}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="flex max-md:flex-col max-md:mt-[2rem]">
        <button
          type="button"
          onClick={() => {
            listIdSelected.length > 0 &&
              (listCartGlobal === undefined || listCartGlobal?.length === 0
                ? handleDeleteProductLocalStorage()
                : handleDeleteProductAPI());
          }}
          className={`${
            listIdSelected.length === 0 ? 'cursor-not-allowed' : undefined
          }  ${listIdSelected.length === 0 ? 'bg-[#D9D9D9]' : 'bg-white'} ${
            listIdSelected.length === 0 ? 'text-[#00000040]' : 'text-black'
          } transition-all duration-300 mt-[1.25rem] rounded-[0.5rem] px-[2rem] py-[0.75rem] border-2 border-[#D4D4D4]  text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.25rem] max-md:leading-[6.4rem] flex justify-center items-center max-md:h-[11rem]`}
        >
          <div
            className={cn(
              'transition-all duration-300 overflow-hidden',
              isLoading.isLoadingDelete && listIdSelected.length > 0
                ? 'w-[2rem] max-md:w-[5rem]'
                : 'w-0'
            )}
          >
            <div className="max-md:hidden">
              <LoadingGlobal stroke="black" />
            </div>
            <div className="hidden max-md:block ml-[1rem] mb-[0.1rem]">
              <LoadingGlobal stroke="black" width={3} height={3} />
            </div>
          </div>
          <span className="mb-0 pb-0 max-md:text-[3.24rem]">
            Xóa sản phẩm đã chọn
          </span>
        </button>
        <div className="flex justify-between max-md:flex-col">
          {/* <button */}
          {/*  type="button" */}
          {/*  onClick={handleUpdateCart} */}
          {/*  className="flex relative w-fit items-center rounded-[0.5rem] mt-[1.25rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:w-full max-md:justify-center max-md:text-[2.8rem] max-md:leading-[6.4rem] max-md:h-[11rem] max-md:mt-[2rem]" */}
          {/* > */}
          {/*  <div */}
          {/*    className={cn( */}
          {/*      'transition-all duration-300 overflow-hidden', */}
          {/*      isLoading.isLoadingUpdate ? 'w-[2rem]' : 'w-0' */}
          {/*    )} */}
          {/*  > */}
          {/*    <LoadingGlobal stroke="white" /> */}
          {/*  </div> */}
          {/*  <span className="mb-0 pb-0 max-md:text-[3.6rem]"> */}
          {/*    Cập nhật giỏ hàng */}
          {/*  </span> */}
          {/* </button> */}
          <Link
            href="/cua-hang"
            className="ml-[1rem] mt-[1.25rem] flex items-center  rounded-[0.5rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:ml-0 max-md:text-[2.52rem] max-md:leading-[6.4rem] max-md:justify-center max-md:h-[11rem] max-md:mt-[2rem]"
          >
            <span className="max-md:text-[3.24rem]">Tiếp tục mua hàng</span>
          </Link>
        </div>
      </div>
    </>
  );
}
