'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import ICLocation from '@/components/Icons/ICLocation2';
import SliceAbout from '@/sections/home/view/About/Slide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import SplitLinesText from './SplitLinesText';

interface AboutHomeType {
  title: string;
  description: string;
  info: { image: string; title: string; location: string }[];
}
interface IPropAbout {
  dataAbout: AboutHomeType;
}
gsap.registerPlugin(ScrollTrigger);

function AboutHomeV2({ dataAbout }: IPropAbout) {
  const refs = useRef([]);
  const box = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: box.current,
        start: 'top top',
        end: '+=500',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });
    }, box);
    return () => {
      ctx.revert();
    };
    // createAnimation();
  }, []);

  return (
    <div ref={box} className="rounded-t-[2.25rem] -mt-[2rem] relative">
      <Image
        src="/img/home/about_bg.jpg"
        width={1600}
        height={1000}
        alt="background"
        className="w-full h-full z-[1] object-fill absolute top-0 left-0"
      />
      <div className="container-custom relative z-10">
        <div className="py-[6.67rem] md:py-24 flex justify-between flex-wrap">
          <div className="w-full lg:w-1/2 px-4 md:px-[2rem] pt-10 about_paragraph">
            <h4 className="text-white text-[8.53333rem] md:text-[4rem] font-black uppercase">
              {dataAbout?.title}
            </h4>
            <div className="about-card-content">
              {/* <div className="about-content"> */}
              {/* {splitWords(dataAbout?.description)} */}
              <SplitLinesText text={dataAbout?.description} />
              {/* </div> */}
            </div>
          </div>
          <div className="hidden md:block w-full lg:w-1/2 px-4 pt-10">
            <SliceAbout dataInfo={dataAbout?.info} />
            <div className="search-about-slide flex justify-between items-center pl-[10rem] md:pl-[2.75rem] pr-1 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-[26rem] md:rounded-[3.125rem] border-[1px] border-[#55D5D2]">
              <p className="text-[4.48179rem] md:text-[1rem] font-extrabold text-white">
                TÌM KIẾM CỬA HÀNG GẦN BẠN
              </p>
              <div className="arrow-about-slide p-[0.5rem] bg-white rounded-full justify-start items-center gap-2.5 inline-flex">
                <ICArrowTopRightActive
                  width={30}
                  height={30}
                  stroke="#F58F5D"
                  fill="#F58F5D"
                />
              </div>
            </div>
          </div>

          <div className="w-full block md:hidden pt-10 relative max-sm:pt-[16rem]">
            <div className="absolute w-full top-[4rem] pt-[2rem] pb-[6rem] search-about-slide flex justify-between items-center pl-16 md:pl-[2.75rem] pr-16 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-t-[4rem] border-[1px] border-[#55D5D2]">
              <p className="text-[3.84rem] md:text-[1.5rem] font-extrabold text-white flex items-center">
                <div className="mr-12 p-[0.5rem] bg-white rounded-full">
                  <ICLocation stroke="#F58F5D" />
                </div>
                <span>Tìm cửa hàng</span>
              </p>
              <div className="rotate-45">
                <ICArrowTopRightActive
                  width={30}
                  height={30}
                  stroke="#fff"
                  fill="#fff"
                />
              </div>
            </div>
            <SliceAbout dataInfo={dataAbout?.info} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHomeV2;
