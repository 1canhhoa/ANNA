'use client';

// eslint-disable-next-line import/no-cycle
import FormPayment from '@/sections/payment/components/form-payment';
import ListProductInCart from '@/sections/payment/components/list-product-in-cart';
import { createContext, useMemo, useState } from 'react';

export const FormPaymentContext = createContext<any>({});

export default function Payment(props: any) {
  const [voucher, setVoucher] = useState<string | null>(null);
  const {shippingData} = props
  console.log(shippingData)
  const handleUpdate = (value: any): void => {
    setVoucher(value);
  };

  const contextValue = useMemo(() => ({ handleUpdate, voucher }), []);
  return (
    <FormPaymentContext.Provider value={contextValue}>
      <div className="w-[87.5rem] mx-auto flex pt-[12rem] mb-[5rem] max-md:flex-col max-md:pt-[21rem]">
        <div className="w-[40rem] mr-[2rem] max-md:mr-[0rem] max-md:w-full">
          <span className="text-[2.1875rem] not-italic font-semibold leading-[3.28125rem] max-md:text-[8.333rem] max-md:leading-[10rem]">
            THANH TOÁN
          </span>
          <div className="mt-[1rem] max-md:mt-[3rem]">
            <FormPayment voucher={voucher} shippingData={shippingData}/>
          </div>
        </div>
        <div className="grow max-md:hidden">
          <ListProductInCart shippingData={shippingData}/>
        </div>
      </div>
    </FormPaymentContext.Provider>
  );
}
