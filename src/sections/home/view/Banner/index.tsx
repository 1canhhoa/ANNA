'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import React from 'react';
import ICPopupMessage from '@/components/Icons/ICPopupMessage';
import { ICClose } from '@/components/Icons/ICClose';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';

interface IpropBanner {
  dataBanner: any;
}
function BannerHome({ dataBanner }: IpropBanner) {
  return (
    <div>
      <div className="hidden sm:block">
        <Swiper watchSlidesProgress slidesPerView={1} loop className="sm:h-fit">
          {dataBanner?.map((valueBanner: any, index: number) => (
            <SwiperSlide key={index}>
              <div className=" max-md:h-[65rem] max-lg:h-[50rem] h-screen w-full">
                <Image
                  src={valueBanner?.url}
                  alt=""
                  fill
                  priority
                  className="w-full object-cover  max-md:h-[65rem] max-lg:h-[50rem] h-screen "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block sm:hidden">
        <Swiper
          watchSlidesProgress
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="sm:h-fit banner-pagination"
        >
          {dataBanner?.map((valueBanner: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[93.06667rem] md:h-[53rem]">
                <Image
                  src={valueBanner?.url}
                  alt=""
                  quality={80}
                  fill
                  priority
                  className="w-full object-cover h-[93.06667rem] md:h-[53rem]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BannerHome;
