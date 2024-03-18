'use client';

import VideoItem from '@/sections/httt/components/share/slideVideo/Item';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ICArrowRight from '@/components/Icons/ICArrowRight';
import { Controller, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import './style.css';

function SlideVideoShare({ controlledSwiper }: any) {
  return (
    <div className="slide-tmp1 relative w-full">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2.4,
          },
        }}
        spaceBetween={32}
        loop
        speed={600}
        dir="rtl"
        navigation={{
          prevEl: `.prev-11111-tmp`,
          nextEl: `.next-11111-tmp`,
        }}
        pagination
        modules={[Mousewheel, Navigation, Controller, Pagination]}
        controller={{ control: controlledSwiper }}
        className="md:h-[36.5rem] h-[150.66667rem] w-full md:!py-[1.5rem] md:!pr-[1.5rem]"
      >
        <SwiperSlide className="">
          <VideoItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <VideoItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <VideoItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <VideoItem />
        </SwiperSlide>
      </Swiper>
      <div className="next-11111-tmp select-none absolute z-10 top-1/2 -translate-y-1/2 max-sm:left-0 btnTopItem  rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40 flex justify-center items-center w-[2.45rem] h-[2.45rem] p-[0.72rem] rotate-180 max-md:w-[10.487rem] max-md:h-[10.487rem] max-md:p-[3.07rem] max-md:!left-[2.4rem]">
        <ICArrowRight />
      </div>
      <div className="prev-11111-tmp select-none absolute z-10 top-1/2 -translate-y-1/2 right-0 rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40 flex justify-center items-center w-[2.45rem] h-[2.45rem] p-[0.72rem] max-md:w-[10.487rem] max-md:h-[10.487rem] max-md:p-[3.07rem] max-md:right-[2.4rem]">
        <ICArrowRight />
      </div>
    </div>
  );
}

export default SlideVideoShare;
