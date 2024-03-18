'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import SliceAction from '@/sections/home/view/Action/Slide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ICButton from '@/components/Icons/ICButton';
import map from 'lodash.map';

interface TripType {
  banner: string;
  slider: string[];
  banner_mobile: string;
}
interface IPropsAction {
  dataTrip: TripType;
}
function ActionHome({ dataTrip }: IPropsAction) {
  return (
    <div
      className="py-[6.4rem] md:!pt-[2.19rem] sm-px-0 sm:py-[7.19rem]  bg-cover relative"
      // style={{ backgroundImage: `url(${dataTrip?.banner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={dataTrip?.banner} alt="" fill className="hidden md:block" />
        <Image
          src={dataTrip?.banner_mobile}
          alt=""
          fill
          className="md:hidden block"
        />
      </div>
      <div className="max-sm:pl-[3.2rem] container-homepage">
        <div className="flex justify-between items-end">
          <Image
            src="/img/home/Logo_HTTT.png"
            alt=""
            width={201}
            height={120}
            className="w-[25rem] md:w-[12.563rem]"
          />
          <Link href="/hanh-trinh-tu-te">
            <div className="h-fit pl-[1.25rem] pr-[0.5rem] py-[0.5rem] bg-zinc-800 bg-opacity-30 rounded-[100px] border border-white backdrop-blur-[5px] justify-between items-center gap-3 hidden md:inline-flex cursor-pointer group">
              <div className="text-right text-white text-[3.36rem] md:text-base font-extrabold">
                Cộng đồng sống tử tế
              </div>
              <div className="p-[0.62rem] bg-white rounded-[100px] justify-start items-center gap-2.5 flex ">
                <ICArrowTopRightActive
                  height="0.97494rem"
                  width="0.975rem"
                  className="group-hover:rotate-45 transition-all duration-200"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap md:px-8 md:py-6 border-0 md:rounded-[2.5rem] md:border-[10px] md:border-[rgba(255,255,255,0.6)] mt-10 lg:pt-[1.62rem]">
          <div className="w-full md:w-1/2 md:h-[30.125rem] flex-col justify-start items-start gap-5 inline-flex">
            <div className="max-sm:mr-[3.2rem] item-actions self-stretch px-[3.2rem] md:px-5 py-20 md:py-6 max-sm:rounded-[5.26667rem] rounded-tl-[1.75rem] rounded-bl-[1.75rem] border-l border-white flex-col justify-start items-start gap-2 max-md:gap-0 flex max-md:py-[3.2rem] max-md:px-[2.67rem]">
              <div className="max-md:w-full px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-[1rem] justify-start items-start gap-2.5 inline-flex">
                <div className="text-center w-full text-white text-[3.36rem] font-extrabold md:text-[2rem] max-md:p-[1.5rem] max-md:font-bold py-[0.25rem]">
                  ĐÔI MẮT MẶT TRỜI
                </div>
              </div>
              <div className="self-stretch px-4 py-6 md:py-3 rounded-xl justify-start items-start inline-flex max-md:pt-[2.67rem] max-md:pb-[3.73rem] max-md:px-[2.67rem] md:pr-0">
                <div className="grow shrink basis-0 text-white text-[3.36rem] md:text-xl font-bold md:font-extrabold leading-[1.4]">
                  Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn
                  cảnh khó khăn.
                </div>
              </div>
              <div className="max-md:w-full px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-[1rem] justify-start items-start gap-2.5 inline-flex">
                <div className="text-center w-full text-white text-[3.36rem] font-extrabold md:text-[2rem] max-md:p-[1.5rem] max-md:font-bold py-[0.25rem]">
                  TÚI TỬ TẾ
                </div>
              </div>
              <div className="self-stretch px-4 py-6 md:py-3 rounded-xl justify-start items-start inline-flex max-md:px-[2.67rem] max-md:pb-[1.6rem] max-md:pt-[2.67rem]">
                <div className="grow shrink basis-0 text-white text-[3.36rem] md:text-xl font-bold md:font-extrabold leading-[1.4]">
                  Anna sẽ in 500.000 chiếc túi tử tế nhằm lan toả câu chuyện tìm
                  người thân mất lạc, cùng hy vọng phép màu sẽ xảy ra.
                </div>
              </div>
            </div>
            <div className="max-sm:mr-[3.2rem] item-actions self-stretch rounded-[5.26667rem] md:rounded-3xl justify-start items-start gap-3 inline-flex">
              <div className="flex flex-col-reverse justify-end h-full w-1/3 px-[5rem] md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-l border-white sm:max-backdrop-blur-sm  items-center gap-2.5 flex">
                <div className="md:pr-[3rem]">
                  <span className="text-white text-[2rem] leading-[2.6rem] not-italic font-black max-md:text-[3.84rem] max-md:leading-[5.54667rem]">
                    07
                    <br />
                  </span>
                  <span className="text-white text-[0.875rem] leading-[2.4rem] not-italic font-extrabold max-md:text-[2.4rem] max-md:leading-[5.54667rem]">
                    TỈNH THÀNH
                    <br />
                  </span>
                  <span className="text-white text-[1rem] not-italic leading-[2.8rem] md:text-base font-bold max-md:text-[2.4rem] max-md:leading-[5.8rem]">
                    Hành trình tử tế có mặt
                  </span>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-end h-full w-1/3 px-0 md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm items-center gap-2.5">
                <div className="grow shrink basis-0 md:pr-[2rem]">
                  <span className="text-white text-[2rem] leading-[2.6rem] not-italic font-black max-md:text-[3.84rem] max-md:leading-[5.54667rem]">
                    30
                    <br />
                  </span>
                  <span className="text-white text-[0.875rem] leading-[2.4rem] not-italic font-extrabold max-md:text-[2.4rem] max-md:leading-[5.54667rem]">
                    EM NHỎ
                    <br />
                  </span>
                  <span className="text-white text-[1rem] not-italic leading-[2.8rem] md:text-base font-bold max-md:text-[2.4rem] max-md:leading-[5.8rem]">
                    Được tài trợ chi phí phẫu thuật mắt
                  </span>
                </div>
              </div>
              <div className="flex-col-reverse justify-end h-full w-1/3 px-[5rem] md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm items-center gap-2.5 flex">
                <div className="grow shrink basis-0">
                  <span className="text-white text-[2rem] leading-[2.6rem] not-italic font-black max-md:text-[3.84rem] max-md:leading-[5.54667rem]">
                    500.000
                    <br />
                  </span>
                  <span className="text-white text-[0.875rem] leading-[2.4rem] not-italic font-extrabold max-md:text-[2.4rem] max-md:leading-[5.54667rem]">
                    TÚI TỬ TẾ
                    <br />
                  </span>
                  <span className="text-white text-[1rem] not-italic leading-[2.8rem] md:text-base font-bold max-md:text-[2.4rem] max-md:leading-[5.8rem]">
                    Được phát tặng để tìm người thân thất lạc
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 my-10 md:my-0 max-md:hidden">
            <SliceAction dataSlider={dataTrip?.slider} />
          </div>
          <div className="hidden max-md:flex overflow-x-auto hide-scrollbar-global my-10">
            {map(dataTrip?.slider, (item, index) => (
              <div
                key={index}
                className="relative min-w-[93.33333rem] rounded-[8rem] md:rounded-2xl h-[72.0368rem] item-slide-action md:pb-[1.5rem]"
              >
                <Image
                  src={item ?? ''}
                  alt=""
                  width={673}
                  height={504}
                  className="w-full h-full rounded-[8rem] md:rounded-2xl object-cover"
                />
                <div className="absolute bottom-0 mb-8 max-sm:left-[3.47rem] max-sm:bottom-[1.33rem] md:right-[0.5rem] cursor-pointer">
                  <Link href="/hanh-trinh-tu-te">
                    <ICButton />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-sm:pr-[3.2rem]">
          <Link href="/hanh-trinh-tu-te">
            <div className="inline-flex md:hidden w-full h-[50px] pl-5 pr-1 py-2 bg-zinc-800 bg-opacity-30 rounded-[100px] border border-white backdrop-blur-[5px] justify-center items-center gap-3 max-md:font-bold">
              <div className="text-right text-white text-[3.36rem] md:text-base font-extrabold">
                Cộng đồng sống tử tế
              </div>
              <ICArrowTopRightActive
                height={25}
                width={25}
                stroke="#fff"
                fill="#fff"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ActionHome;
