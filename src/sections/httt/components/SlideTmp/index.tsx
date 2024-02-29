'use client';

import VideoItem from '@/sections/httt/components/share/slideVideo/Item';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import { Mousewheel, Navigation } from 'swiper/modules';
import './style.css';

function SlideTmp() {
  return (
    <div className="slide-tmp relative w-full">
      <Swiper
        breakpoints={{
          414: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={8}
        loop
        speed={900}
        // cssMode
        // mousewheel
        dir="rtl"
        navigation={{
          prevEl: `.prev-11111-tmp`,
          nextEl: `.next-11111-tmp`,
        }}
        modules={[Mousewheel, Navigation]}
        className=" h-full w-full"
      >
        <SwiperSlide className="">
          <Image
            src="/img/home/about_bg.jpg"
            width={1600}
            height={1000}
            alt="background"
            className="w-full h-full z-[1] object-cover absolute top-0 left-0"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/img/home/about_bg.jpg"
            width={1600}
            height={1000}
            alt="background"
            className="w-full h-full z-[1] object-cover absolute top-0 left-0"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/img/home/about_bg.jpg"
            width={1600}
            height={1000}
            alt="background"
            className="w-full h-full z-[1] object-cover absolute top-0 left-0"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/img/home/about_bg.jpg"
            width={1600}
            height={1000}
            alt="background"
            className="w-full h-full z-[1] object-cover absolute top-0 left-0"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/img/home/about_bg.jpg"
            width={1600}
            height={1000}
            alt="background"
            className="w-full h-full z-[1] object-cover absolute top-0 left-0"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 max-sm:left-0 md:right-[280px] btnTopItem">
        <Button className="prev-11111-tmp h-[45px] w-[45px] rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40">
          <ICArrowLeft />
        </Button>
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 right-0">
        <Button className="next-11111-tmp h-[45px] w-[45px] rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40">
          <ICArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default SlideTmp;
