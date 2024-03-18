'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Controller, Navigation } from 'swiper/modules';
import ContentItem from '@/sections/httt/components/share/slideContent/Item';

function SlideContentShare({ setControlledSwiper }: any) {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        loop
        speed={600}
        navigation={{
          prevEl: `.prev-11111-tmp`,
          nextEl: `.next-11111-tmp`,
        }}
        modules={[Navigation, Controller]}
        onSwiper={setControlledSwiper}
        className="myShareContent pl-[0rem] mx-[1rem]"
      >
        <SwiperSlide className="swiper-no-swiping">
          <ContentItem
            title1="Tun Phạm"
            info="Diễn viên, 24 tuổi"
            title2="Hành trình này cần được kéo dài mãi"
            des={`Tun sẽ không bao giờ dừng lại trên Hành trình Tử tế by Anna, đây là
          một hành trình nhân ái, tiếp sức cộng đồng đầy ý nghĩa “ và cần được
          nối dài mãi mãi.`}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-no-swiping">
          <ContentItem
            title1="Phạm Hồng Thúy Vân"
            info="Á Hậu, 30 tuổi"
            title2="Tử tế là hành trình dài không phải là đích đến"
            des="Mình sẽ không bao giờ dừng lại trên Hành trình Tử tế by Anna, đây là một hành trình nhân ái, tiếp sức cộng đồng đầy ý nghĩa “ và cần được nối dài mãi mãi."
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-no-swiping">
          <ContentItem
            title1="Tun Phạm"
            info="Diễn viên, 24 tuổi"
            title2="Hành trình này cần được kéo dài mãi"
            des={`Tun sẽ không bao giờ dừng lại trên Hành trình Tử tế by Anna, đây là
          một hành trình nhân ái, tiếp sức cộng đồng đầy ý nghĩa “ và cần được
          nối dài mãi mãi.`}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-no-swiping">
          <ContentItem
            title1="Phạm Hồng Thúy Vân"
            info="Á Hậu, 30 tuổi"
            title2="Tử tế là hành trình dài không phải là đích đến"
            des="Mình sẽ không bao giờ dừng lại trên Hành trình Tử tế by Anna, đây là một hành trình nhân ái, tiếp sức cộng đồng đầy ý nghĩa “ và cần được nối dài mãi mãi."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideContentShare;
