'use client';

import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import './style.css';
import { IItemCart } from '@/types/types-general';
import Link from 'next/link';
import { TableCart } from '@/sections/cart/CartComponent/components/table-cart';
import { formatCurrencyVND } from '@/ultils/format-price';
import { ProductCartContext } from '@/context-provider';

export function CartComponent() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleTotalCart = (data: IItemCart[]): void => {
    let total = 0;

    data?.map(
      // eslint-disable-next-line no-return-assign
      (item: any) =>
        (total +=
          (item?.quantity ?? 0) * parseInt(item?.product_price ?? '0', 10))
    );

    setTotalPrice(total);
  };

  const { listCartGlobal } = useContext<any>(ProductCartContext);

  useEffect(() => {
    // if (
    //   typeof window !== 'undefined' &&
    //   localStorage.getItem(keyProductsInCart) !== null
    // ) {
    //   const storedData = localStorage.getItem(keyProductsInCart) as string;
    //   const listDataLocalStorage = JSON.parse(storedData);
    //
    //   handleTotalCart(listDataLocalStorage);
    // }

    if (listCartGlobal?.length > 0) {
      handleTotalCart(listCartGlobal);
    }
  }, [listCartGlobal]);
  return (
    <div className="cart-component mt-[2rem] flex justify-between max-md:flex-col">
      {/* <BottomTabCart /> */}
      <div className="w-3/4 max-md:w-full">
        <TableCart handleTotalCart={handleTotalCart} totalPrice={totalPrice} />
      </div>

      <div className="grow ml-[1rem] max-md:mt-[7.5rem] ">
        <div className=" bg-[#F3F3F3] h-[21rem] flex flex-col items-center justify-center max-md:h-[69.86667rem]">
          <h3 className="w-full text-center text-[1.125rem] not-italic font-bold leading-[1.6875rem] text-black pb-[1.25rem] border-b-2 border-[#DADADA] border-dotted max-md:text-[4.32rem] max-md:leading-[6.4rem] max-md:pb-[6rem]">
            Tóm tắt đơn hàng
          </h3>
          <hr />
          <div className="w-full px-[1.5rem] flex justify-between my-[0.9rem] max-md:px-[4.27rem] max-md:mt-[3rem]">
            <div className="text-black text-[1rem] not-italic font-semibold leading-[1.5rem] max-md:text-[3.15rem] max-md:leading-[4.8rem]">
              Tạm tính
            </div>
            <div className="text-black text-[1rem] font-bold not-italic leading-[1.5rem] max-md:text-[3.15rem] max-md:leading-[6.4rem]">
              {formatCurrencyVND(totalPrice.toString())}
            </div>
          </div>
          <hr />
          <div className="border-t-2 pt-[0.9rem] border-[#DADADA] border-dotted w-full px-[1.5rem] flex justify-between max-md:px-[4.27rem] max-md:mb-[3rem]">
            <div className="text-black text-[1rem] not-italic font-semibold leading-[1.5rem] max-md:text-[3.15rem] max-md:leading-[4.8rem]">
              Tổng
            </div>
            <div className="text-black text-[1rem] font-bold not-italic leading-[1.5rem] max-md:text-[3.15rem] max-md:leading-[6.4rem]">
              {formatCurrencyVND(totalPrice.toString())}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/thanh-toan"
              className="mt-[1.25rem] px-[2rem] py-[0.75rem] bg-blueAnna rounded-[2.125rem] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.88rem] max-md:leading-[5.6rem] max-md:px-[6.4rem] max-md:py-[2.93rem] max-md:mt-[6.5rem]"
            >
              Thanh toán ngay
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[3rem] max-md:mt-[5rem]">
          <div className="w-[16.75remrem] max-md:w-full flex flex-col items-center">
            <span className="text-[1rem] not-italic font-semibold max-md:text-[3.3333rem]">
              Chúng tôi chấp nhận thanh toán
            </span>
            <div className="flex justify-between mt-[1.3rem] max-md:w-full max-md:mt-[5rem]">
              <Image
                src="/img/cart/visa.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/amex.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/discover.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/mastercard.png"
                alt=""
                quality={80}
                width={1920}
                height={1080}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
