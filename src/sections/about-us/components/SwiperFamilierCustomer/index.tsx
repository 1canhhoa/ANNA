'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import Image from 'next/image';
import map from 'lodash.map';
// import Item from '@/sections/product/components/slide/Item';

function Item(props: any) {
  const { item } = props;
  return (
    <div className="h-[42.288rem] w-full max-md:w-full max-md:h-[68.288rem]">
      <Image
        height={420}
        width={420}
        className="h-full w-full rounded-[1.5rem] object-cover"
        src={item?.image?.link ?? '/img/no_image.jpg'}
        alt=""
      />
      <h3 className="text-[#81C8C2] text-[1.5rem] font-bold max-md:text-[4rem]">
        {item?.name}
      </h3>
    </div>
  );
}

function SlideProduct(props: any) {
  const { dataGetAboutus } = props;
  return (
    <div className="swiper-familier-customer h-[50.288rem] relative max-md:h-[100rem]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        // centeredSlides={1}
        centeredSlides
        // slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.8,
          },
          767: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pl-[0rem] mx-[1rem] "
      >
        {map(dataGetAboutus?.acf?.custome, (item) => (
          <SwiperSlide>
            <Item item={item} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/*  <Item /> */}
        {/* </SwiperSlide> */}
      </Swiper>
      {/* <div
        className={`prev-${number} max-lg:left-[1.2rem] max-lg:z-[2] top-[50%] -translate-y-1/2 absolute lg:left-[-6.5%] md:left-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideLeft />
      </div>
      <div
        className={`next-${number} max-lg:right-[-1.2rem] max-lg:z-[2]  top-[50%] -translate-y-1/2 absolute lg:right-[-6.5%]  md:right-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideRight />
      </div> */}
    </div>
  );
}

export default SlideProduct;
