'use client';

import ItemStory from '@/sections/httt/components/story/Slide/Item';
import map from 'lodash.map';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IPropsStory {
  dataBlogList: any;
}
function ListStory({ dataBlogList }: IPropsStory) {
  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          767: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        loop
        speed={500}
        navigation={{
          prevEl: `.prev-story`,
          nextEl: `.next-story`,
        }}
        modules={[Navigation]}
        className="myJoin"
      >
        {map(dataBlogList, (list) => (
          <SwiperSlide className="mr-[2rem]">
            <ItemStory
              img={list?.thumbnail_url}
              des={list?.title}
              slug={list?.slug}
            />
          </SwiperSlide>
        ))}
        {map(dataBlogList, (list) => (
          <SwiperSlide className="mr-[2rem]">
            <ItemStory
              img={list?.thumbnail_url}
              des={list?.title}
              slug={list?.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ListStory;
