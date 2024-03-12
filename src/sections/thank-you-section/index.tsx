'use client';

import React from 'react';
import './style.css';
import ViewCheckingOrder from '@/sections/checking-order/view-checking-order';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import Link from 'next/link';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';

interface IProps {
  dataCheckingOrder?: any;
  name?: string;
}

function ThankYou(props: IProps) {
  const { dataCheckingOrder } = props;
  console.log(dataCheckingOrder)

  return (
    <div className="h-screen flex max-md:flex-col max-md:h-fit max-md:mb-[5rem]">
      <div className="max-md:hidden w-[38.5275rem] h-[40.1875rem] absolute bottom-0 left-0 -z-20">
        <Image
          src="/img/thank-you/vector.png"
          width={1600}
          height={1000}
          alt="banner cart"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[40%] flex items-center justify-center max-md:pt-[15rem] max-md:h-[90rem] max-md:w-full">
        <div className="w-[26rem] flex flex-col items-center max-md:w-full max-md:px-[5rem]">
          <div className="max-md:hidden">
            <ICLogo fill="#55D5D2" width="6.8125rem" height="6.125rem" />
          </div>
          <div className="hidden max-md:block">
            <ICLogo fill="#55D5D2" width="20rem" height="20rem" />
          </div>
          <p className="mt-[1.5rem] text-[1.25rem] text-[#828282] not-italic leading-[1.625rem] font-normal  max-md:text-[4.25rem] max-md:leading-[4.625rem] max-md:font-medium">
            Thân <span className="uppercase">{props.name}</span>,
          </p>
          <p className="text-blueAnna text-[2.583rem] not-italic font-black leading-[3.35794rem] max-md:text-[7.583rem] max-md:leading-[8rem] max-md:font-extrabold max-md:mt-[2rem]">
            CẢM ƠN BẠN
          </p>
          <div className="flex items-center max-md:mb-[1.3rem]">
            <p className="text-blueAnna text-[2.583rem] not-italic font-black leading-[3.35794rem] mr-[0.62rem] max-md:text-[7.583rem] max-md:leading-[8rem] max-md:font-extrabold max-md:mr-[2rem]">
              VÌ ĐÃ MUA HÀNG
            </p>
            <div className="h-[2rem] w-[2rem] max-md:h-[6rem] max-md:w-[6rem]">
              <Image
                src="/img/thank-you/icon-heart.jpg"
                width={1600}
                height={1000}
                alt="banner cart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-[0.75rem] text-blackAnna font-bold not-italic leading-[0.975rem] text-center mt-[0.56rem] mb-[1.56rem] max-md:text-[3.8rem] max-md:leading-[1.5] max-md:mt-[1.56rem] max-md:mb-[2.56rem]">
            Chúng tôi sẽ liên hệ lại sớm để xác nhận đơn hàng. Bạn có thể kiểm
            tra tình trạng đơn hàng
            <Link
              className="underline text-blueAnna ml-[0.3rem] max-md:ml-[1rem]"
              href="/order-checking"
            >
              tại đây
            </Link>
          </div>
          <Link
            href="/cua-hang"
            className="button-shopping rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem]  flex justify-between items-center max-md:py-[1rem] max-md:px-[3rem] max-md:w-[41rem] max-md:h-[9rem]"
          >
            <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem] max-md:text-[3rem] max-md:leading-[3rem]">
              TIẾP TỤC MUA SẮM
            </span>
            <div className=" bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
              <div className="icon-rotate max-md:hidden">
                <ICArrowRight2 fill="#55D5D2" width="1.1rem" height="1.1rem" />
              </div>
              <div className="icon-rotate hidden max-md:block">
                <ICArrowRight2 fill="#55D5D2" width="3rem" height="3rem" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-blueAnna px-[3rem] grow h-full overflow-y-auto flex items-center justify-center max-md:items-start max-md:py-[3rem]">
        <div className="h-fit w-fit bg-white p-[2rem] rounded-[1rem] max-md:w-full">
          <ViewCheckingOrder dataGetDetailOrder={dataCheckingOrder} />
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
