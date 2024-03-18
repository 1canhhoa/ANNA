'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
import ICVectorRight from '@/components/Icons/ICVectorRight';

interface IProps {
  handleChangeProduct: any;
}
function SlideSelect({ handleChangeProduct }: IProps) {
  return (
    <div className="max-sm:py-[4.7rem]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item-collect-slide pl-0 lg:px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            {/* <ArrowRight className="icon-arrow-right hidden" /> */}
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p
              onClick={() => handleChangeProduct('gong-kinh')}
              className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase"
            >
              Gọng kính
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-collect-slide px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p
              onClick={() => handleChangeProduct('trong-kinh')}
              className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase"
            >
              Tròng Kính
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-collect-slide px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p
              onClick={() => handleChangeProduct('kinh-ram')}
              className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase"
            >
              Kính râm
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-collect-slide px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p
              onClick={() => handleChangeProduct('kinh-ap-trong')}
              className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase"
            >
              Kính áp tròng
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideSelect;
