'use client';

import ICDown from '@/components/Icons/ICDown';
import ICLine from '@/components/Icons/ICLine';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { IItemProduct } from '@/types/types-general';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import ListFlashSaleMobile from '@/sections/home/view/FlashSale/ListFlashSaleMobile';
import map from 'lodash.map';

interface IpropFlash {
  smallBanner1: string;
  smallBanner2: string;
  dataProductSale: IItemProduct[];
  dataSellingProduct: IItemProduct[];
}
function FlashSale({
  smallBanner1,
  smallBanner2,
  dataProductSale,
  dataSellingProduct,
}: IpropFlash) {
  const [progress, setProgress] = useState(13);
  const [height, setHeight] = useState(100);
  const [isTab, setIsTab] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          scrub: true,
          start: `top bottom`,
          end: `bottom top`,
        },
        stagger: 0.5,
        ease: 'power1.out',
        translateX: '-25%',
      });
    }, lineRef);
    ScrollTrigger.create({
      trigger: '#box_arrow',
      scrub: true,
      start: `top bottom`,
      end: `top top`,
      onUpdate: (self) => {
        setHeight(Math.abs(Number(self.progress.toFixed(3)) * 100 - 100));
      },
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#EEF9F9] md:relative md:mb-[11rem] md:pb-[11rem]">
      <div className="pt-[7.8rem] max-sm:pb-[6.4rem] container-homepage">
        <Tabs defaultValue="flash-sale" className="w-full h-full scroll-smooth">
          <TabsList className="flash-product bg-[#EEF9F9] h-auto flex items-center justify-start max-md:justify-between p-0 max-md:ml-[3.2rem]">
            <div
              role="button"
              className="flash-sale-tab max-md:grow"
              onClick={() => setIsTab(false)}
            >
              <TabsTrigger
                value="flash-sale"
                className="text-blueAnna text-[4.32rem] md:text-[2.375rem] font-extrabold uppercase pr-[1.688rem] max-md:pr-0 mb-[0.19rem] max-md:w-full"
              >
                Flash Sale
              </TabsTrigger>
              <div className="">
                {!isTab ? (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataProductSale?.length ?? 0 + 1))
                    }
                    className="h-[0.4rem] md:h-[0.1875rem] w-full box_q12-[#55D5D2]"
                  />
                ) : (
                  <div className="h-[0.4rem] md:h-[0.1875rem] w-full invisible" />
                )}
              </div>
            </div>
            <div className="mx-[1.69rem]">
              <ICLine className="h-[20px] md:h-[30px]" />
            </div>
            <div
              role="button"
              className="flash-sale-tab max-md:pr-[4.26667rem] max-md:grow"
              onClick={() => setIsTab(true)}
            >
              <TabsTrigger
                value="favorite-product"
                className="text-blueAnna text-[4.32rem] md:text-[2.375rem] font-extrabold uppercase pr-[1.688rem] max-md:pr-0 mb-[0.19rem] max-md:w-full"
              >
                bán chạy nhất
              </TabsTrigger>
              <div className="">
                {isTab ? (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataSellingProduct?.length ?? 0 + 1))
                    }
                    className="h-[0.4rem] md:h-[0.1875rem] w-full bg-[#55D5D2]"
                  />
                ) : (
                  <div className="h-[0.4rem] md:h-[0.1875rem] w-full invisible" />
                )}
              </div>
            </div>
          </TabsList>
          <TabsContent value="flash-sale" className="mt-[2rem]">
            <div className="flash-sale-home block">
              <SlideProductComponent
                mlSlide
                keySlide="flash-sale"
                data={dataProductSale}
                setProgress={setProgress}
              />
            </div>
          </TabsContent>
          <TabsContent value="favorite-product">
            <div className="flash-sale-home block">
              <SlideProductComponent
                keySlide="flash-sale"
                data={dataSellingProduct}
                setProgress={setProgress}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* <div className="pt-[6.4rem] pb-[1rem] md:pt-[3.5rem] flex justify-center max-sm:bg-white"> */}
      {/*  /!* <ICDown /> *!/ */}
      {/*  <div */}
      {/*    id="box_arrow" */}
      {/*    className="w-[11.25rem] md:w-[4.25rem] h-[11.25rem] md:h-[4.25rem] relative" */}
      {/*  > */}
      {/*    <Image */}
      {/*      className="w-full h-full object-contain" */}
      {/*      src="/img/home/mt.png" */}
      {/*      alt="arrow no background" */}
      {/*      height={60} */}
      {/*      width={60} */}
      {/*    /> */}
      {/*    <Image */}
      {/*      style={{ */}
      {/*        clipPath: `polygon(0 ${height}%, 100% ${height}%, 100% 100%, 0 100%)`, */}
      {/*      }} */}
      {/*      className="h-full object-contain absolute top-0 left-0 w-full" */}
      {/*      src="/img/home/mto.png" */}
      {/*      alt="arrow background" */}
      {/*      height={60} */}
      {/*      width={60} */}
      {/*    /> */}
      {/*  </div> */}
      {/* </div> */}
      {/* <div className="max-sm:bg-white relative h-[6.375rem] max-md:h-[10.375rem] overflow-hidden w-full"> */}
      {/*  <div */}
      {/*    ref={lineRef} */}
      {/*    className="flex items-center absolute top-0 left-1/2 -translate-x-[150%] flex-nowrap" */}
      {/*  > */}
      {/*    <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase whitespace-nowrap leading-[150%]"> */}
      {/*      Supper event 2023 birthday 9th anna */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
      <div className="flex pt-[2.5rem] md:justify-center md:absolute relative container-custom hide-scrollbar-global max-md:w-full max-md:overflow-x-auto md:-translate-x-2/4 md:left-1/2 select-none">
        <div className="md:w-full h-full flex w-max">
          <div className="pr-[2.13rem] md:pr-[1.25rem] w-[82.9333rem] md:h-[18.31rem] h-[34.9333rem] md:w-1/2 rounded-[4rem] md:rounded-[1rem]">
            <Image
              src={smallBanner1}
              alt=""
              width={850}
              height={345}
              className="object-cover rounded-[4rem] md:rounded-[1rem] h-full"
            />
          </div>
          <div className="pl-0 w-[82.9333rem] h-[34.9333rem] md:h-[18.31rem] md:w-1/2 rounded-[4rem] md:rounded-[1rem]">
            <Image
              src={smallBanner2}
              alt=""
              width={850}
              height={345}
              className="object-cover rounded-[4rem] md:rounded-[1rem] md:mt-0 h-full"
            />
          </div>
        </div>
      </div>
      {/* <div className="block py-[3.2rem] md:py-[0] pl-[3.2rem] md:pl-[0] md:hidden max-sm:bg-white">
        <Swiper
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          loop
          modules={[Navigation, Autoplay]}
          className="pl-[0rem] mx-[1rem] rounded-[1.6rem] md:rounded-[1rem]"
        >
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase md:h-[21.313rem] h-[34.94rem]">
            <Image
              src={smallBanner1}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pr-0 md:pr-3 h-full object-cover rounded-[1.6rem] md:rounded-[1rem]"
            />
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase md:h-[21.313rem] h-[34.94rem]">
            <Image
              src={smallBanner2}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pl-0 md:pl-3 h-full object-cover rounded-[1.6rem] md:rounded-[1rem] md:mt-0"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}

export default FlashSale;
