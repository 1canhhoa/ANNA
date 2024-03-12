'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useContext, useEffect, useState } from 'react';
import { IItemCart } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
// eslint-disable-next-line import/no-cycle
import { FormPaymentContext } from '@/sections/payment';
import { ProductCartContext } from '@/context-provider';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { useBoolean } from '@/hooks/use-boolean';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import useSWR from 'swr';
import { fetchDataRest } from '@/lib/fetch-data-rest';

export default function ListProductInCart(props: any) {
  const [dataInit, setDataInit] = useState<IItemCart[]>([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState<number>(0);
  const [dataCoupon, setDataCoupon] = useState<string>('');
  const isLoadingCoupon = useBoolean(false);
  // const [priceDiscount, setPriceDiscount] = useState<any>({
  //   type:"",
  //   value:0,
  // });

  const { handleUpdate } = useContext<any>(FormPaymentContext);
  const { listCartGlobal } = useContext(ProductCartContext);
  const {shippingData,priceDiscount,setPriceDiscount  } = props
  const handleCheckCoupon = async () => {
    isLoadingCoupon.onTrue();
    try {
      await fetchDataAuthen({
        url: `wp-json/custom/v1/coupon/check`,
        method: 'post',
        body:JSON.stringify({
          coupon_code:dataCoupon,
        })
      }).then((res) => {
        isLoadingCoupon.onFalse();
        if (res.status === 'success') {
          onSuccess({
            message: 'Áp dụng mã thành công!',
          });
        let newDiscount = {
          type: res.discount_type ,
          value:res.discount_type === "percent"?totalPriceInCart * res.amount / 100:res.amount,
        }
          setPriceDiscount(newDiscount);
          handleUpdate(dataCoupon);
        } else {
          onError({
            message: 'Mã không tồn tại !',
          });
        }
      });
    } catch (error: any) {
      onError();
      isLoadingCoupon.onFalse();
    }
  };
  useEffect(() => {
    setDataInit(listCartGlobal);

    let total = 0;

    listCartGlobal?.map(
      // eslint-disable-next-line no-return-assign
      (item: any) =>
        (total +=
          (item?.quantity ?? 0) * parseInt(item?.product_price ?? '0', 10))
    );

    setTotalPriceInCart(total);
  }, [listCartGlobal]);
// console.log(dataInit);
const bodyItemShipping = {
  url: `custom/v1/shipping-methods`,
  method:'get'
}
const {data: dataShipping} = useSWR(
  bodyItemShipping.url,
  () => fetchDataRest('GET', bodyItemShipping.url).then((res: any) => {
    return res; // Return the data to update the SWR cache
  }),{
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false
  }
);
  return (
    <div className="p-[2rem] bg-[#F3F3F3] max-md:p-[4rem]">
      <h3 className="text-[1.5rem] font-bold max-md:text-[6.4rem]">
        Nhập mã giảm giá
      </h3>
      <div className="flex justify-between items-center mb-[1rem] mt-[1rem]">
        <input
          type="text"
          name="input"
          onChange={(val: any) => setDataCoupon(val.target.value)}
          placeholder="Nhập mã giảm giá"
          className="px-[1rem] border-2 border-[#EAEAEA] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[0.8rem] h-[3.43rem]  w-[80%] text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[3.733rem] max-md:w-[70%]"
        />
        <Button
          onClick={handleCheckCoupon}
          type="submit"
          className="grow ml-[0.5rem] rounded-[0.8rem] h-[3.43rem] bg-[#55D5D2] text-[1rem] not-italic font-bold leading-[1.5rem] max-md:ml-[2rem] max-md:h-[10rem] max-md:text-[3rem]"
        >
          {isLoadingCoupon.value ? <LoadingGlobal /> : <span>Áp dụng</span>}
        </Button>
      </div>
      <div className="flex justify-between mb-[1rem] max-md:mt-[4rem]">
        <p className="text-[#3A3A3A] font-bold max-md:text-[4.267rem]">
          Sản phẩm
        </p>
        <p className="text-[#3A3A3A] font-bold max-md:text-[4.267rem]">
          Thành tiền
        </p>
      </div>
      {dataInit &&
        dataInit?.map((item: IItemCart, index: number) => (
          <div key={index}>
            <hr />
            <div className="flex justify-between items-center my-[1.5rem] max-md:my-[4rem]">
              <div className="flex items-center max-md:flex-col max-md:items-start">
                <Image
                  height={60}
                  width={60}
                  className="w-[4.75rem] h-[4.75rem] max-md:w-[16rem] max-md:h-[16rem]"
                  src={
                    item.product_image ||
                    'https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png'
                  }
                  alt=""
                />
                <div className="flex items-center ml-[1rem] max-md:mt-[2rem] relative">
                  <span className="leading-[1.375rem] font-medium max-md:text-[4rem] max-md:leading-[5rem]">
                    {item.product_name}
                  </span>
                  <span className="ml-[0.4rem] text-[1.3rem] font-bold leading-[1.375rem] text-[#3A3A3A] max-md:text-[4rem] max-md:leading-[5rem] max-md:ml-[2rem]">
                    x{item.quantity}
                  </span>
                  <span className='absolute left-0 -bottom-[1.25rem] text-[0.75rem]'>Màu sắc: {item.variant_value}</span>
                </div>
              </div>
              <span className="text-[#101010] font-semibold max-md:text-[3.733rem]">
                {formatCurrencyVND(
                  (
                    (item?.product_price
                      ? parseInt(item?.product_price, 10)
                      : 0) * (item?.quantity ?? 0)
                  ).toString()
                )}
              </span>
            </div>
            <hr />
          </div>
        ))}

      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">Tạm tính</p>
        <p className="text-[1rem] text-blueAnna font-bold max-md:text-[4.267rem]">
          {formatCurrencyVND(totalPriceInCart.toString())}
        </p>
      </div>

      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">Phí vận chuyển</p>
        <p className="text-[1rem] text-blueAnna font-bold max-md:text-[4.267rem]">
          {shippingData && formatCurrencyVND(shippingData[0]?.cost?.toString() || 0)}
        </p>
      </div>
      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">Giảm</p>
        <p className="text-[1rem] text-blueAnna font-bold max-md:text-[4.267rem]">
          {formatCurrencyVND(priceDiscount.value.toString())}
        </p>
      </div>
      <hr />
      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">
          Tổng cộng
        </p>
        <p className="text-[1rem] text-blueAnna font-bold max-md:text-[4.267rem]">
          {formatCurrencyVND((totalPriceInCart - priceDiscount.value + (dataShipping? Number(dataShipping[0]?.cost): 0)).toString())}
        </p>
      </div>
    </div>
  );
}
