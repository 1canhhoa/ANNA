'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import Video from '@/sections/httt/components/SlideVideoMobile/Item';

const array = new Array(4).fill(0);
const listIcon = [
  '/img/home/fb_icon.svg',
  '/img/home/tiktok_icon.svg',
  '/img/home/ins_icon.svg',
  '/img/home/you_icon.svg',
];
export default function SlideVideoMobile() {
  const swiperRef = useRef<any>(null);
  const [indexSlider, setIndexSlider] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setIndexSlider(swiper.realIndex);
  };
  return (
    <div className="w-full h-[157rem] relative md:hidden">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={0}
        loop
        modules={[EffectFade, Autoplay]}
        className="w-full h-full"
      >
        {array.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Video />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 w-full top-[3.73rem] px-[3.2rem]">
        <ul
          id="progress_video"
          className="mt-[3.07rem] list-none flex justify-between"
        >
          {array.map((item: any, index: number) => (
            <li
              key={index}
              className={`${
                indexSlider === index ? 'active' : ''
              } relative w-[22.13333rem] h-[0.4rem] bg-white/30`}
            />
          ))}
        </ul>
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-[5px] btnTopItem">
        <Button className="prev-share h-[45px] w-[45px] rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40">
          <ICArrowLeft />
        </Button>
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 right-[5px]">
        <Button className="next-share h-[45px] w-[45px] rounded-full border border-[#fff] shadow-btn bg-[#FFFFFF]/40">
          <ICArrowRight />
        </Button>
      </div>
    </div>
  );
}
