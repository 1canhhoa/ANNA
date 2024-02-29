'use client';

import React, { useEffect, useState } from 'react';
import './style.css';
import FormProvider from '@/components/hook-form';
import { listInputGlobal } from '@/types/types-general';
import { useForm } from 'react-hook-form';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import ViewCheckingOrder from '@/sections/checking-order/view-checking-order';
import { cn } from '@/lib/utils';
import useSWR from 'swr';
import { fetchDataAuthen } from '@/lib/post-data';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { onError } from '@/ultils/notification';

interface IProps {
  dataGetDetailOrder?: any;
}

// type MyFormState = FormState<{
//   // Kiểu của dữ liệu trong form
//   id: string;
//   email: string;
// }>;

function CheckingOrder(props: IProps) {
  const [dataDetailOrder, setDataDetailOrder] = useState<any>(undefined);
  const [paramCheckingOrder, setParamCheckingOrder] = useState({
    id: undefined,
    email: '',
  });

  const bodyGetCheckingOrder: any = {
    url: `wp-json/order/v1/tracking-order?id=${paramCheckingOrder.id}&email=${paramCheckingOrder.email}`,
    method: 'get',
  };

  const dataCheckingOrder = useSWR(bodyGetCheckingOrder.url, () =>
    paramCheckingOrder.id
      ? fetchDataAuthen(bodyGetCheckingOrder)
          .then((res) => {
            console.log('res', res);
            if (res && res[2]?.status === 400) {
              console.log('fail');
              onError({ message: res[0] });
            } else {
              setDataDetailOrder(res);
            }
          })
          .catch((res) => {})
      : undefined
  );

  const listInput: listInputGlobal[] = [
    {
      name: 'id',
      require: true,
      type: 'input',
      placeHolder: 'Mã đơn hàng',
    },
    {
      name: 'email',
      require: true,
      type: 'input',
      placeHolder: 'Email thanh toán',
    },
  ];

  const defaultValues = {
    id: '',
    email: '',
  };

  const formSchema = yup.object({
    id: yup.string().required('ID là bắt buộc!'),
    email: yup
      .string()
      .required('Email là bắt buộc!')
      .email('Email không đúng định dạng!'),
  });

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  }: any = methods;

  const handleSubmitForm = (value: any) => {
    setParamCheckingOrder({
      id: value.id,
      email: value.email,
    });
    dataCheckingOrder.mutate();
  };

  return (
    <div className="container mt-[8rem] w-[50rem] px-[3.31rem] py-[3.38rem] mx-auto max-md:w-full max-md:py-[15rem] max-md:px-[5rem]">
      {dataDetailOrder ? (
        <ViewCheckingOrder dataGetDetailOrder={dataDetailOrder} />
      ) : (
        // <div>ss</div>
        <div className="bg-white">
          <h1 className="text-[#454545] text-[2.125rem] font-bold not-italic max-md:text-[5.5125rem]">
            KIỂM TRA ĐƠN HÀNG
          </h1>
          <p className="text-black text-[1.075rem] not-italic font-medium leading-[1.5rem] mt-[0.3rem] mb-[1.5rem] max-md:text-[3.67rem] max-md:leading-[4.075rem] max-md:mb-[5rem] max-md:mt-[2rem]">
            Kiểm tra tình trạng đơn hàng của bạn
          </p>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="flex justify-between max-md:flex-col">
              <div className="w-full">
                {listInput.map((item, index) => (
                  <div key={index}>
                    <span className="text-[#414141] font-bold text-[1.2rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.33rem]">
                      {item.placeHolder}
                      <span className="text-[red]">*</span>
                    </span>
                    <div className="relative mt-[0.5rem] mb-[0.88rem] max-md:mb-[3rem]">
                      <input
                        type="text"
                        {...register(item.name, { required: item.require })}
                        name="input"
                        placeholder={item.placeHolder}
                        onChange={(value) =>
                          setValue(item.name, value.target.value)
                        }
                        className="px-[1.2rem] font-medium bg-[#F4F4F4] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[3.6rem] max-md:px-[4rem]"
                      />
                      {/* <span */}
                      {/*  className={cn( */}
                      {/*    'mt-[0.5rem] text-[#ff5660] font-bold text-[0.8rem] pb-[0.4rem] ml-[1.4rem] max-md:text-[2rem] transition-all duration-300', */}
                      {/*    errors[item.name] ? 'h-[1rem]' : 'h-0' */}
                      {/*  )} */}
                      {/* > */}
                      {/*  {errors[item.name] && errors[item.name].message} */}
                      {/* </span> */}
                      {item.name && errors[item.name]?.message && (
                        <span className="mt-[0.5rem] text-[#ff5660] font-bold text-[0.8rem] pb-[0.4rem] ml-[1.4rem] max-md:text-[1.8rem]">
                          {errors[item.name].message}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[3rem] mt-[1rem] max-md:h-[10rem]">
              <button
                type="submit"
                className="bg-[#55D5D2] flex justify-center items-center text-white rounded-full w-full h-full text-[1rem] font-medium leading-[1.7rem] not-italic max-md:text-[3.6rem] max-md:leading-[4rem]"
              >
                <div className="flex items-center w-fit">
                  <div
                    className={cn(
                      'transition-all duration-300 overflow-hidden',
                      dataCheckingOrder.isLoading ? 'w-[2rem]' : 'w-0'
                    )}
                  >
                    <LoadingGlobal stroke="white" />
                  </div>
                  <span> Theo dõi</span>
                </div>
              </button>
            </div>
          </FormProvider>
        </div>
      )}
    </div>
  );
}

export default CheckingOrder;
