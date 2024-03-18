'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ItemMobileBlogHome from '@/sections/home/view/Blog/SlideMobile/Item';
import './style.css';
import map from 'lodash.map';

interface IPropItem {
  dataSliderBlog: any[];
}
function SliderMobileBlogHome({ dataSliderBlog }: IPropItem) {
  return (
    <div className="w-full">
      <Swiper
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={12}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" max-w-[93.6rem] max-sm:min-h-[123rem] pagination-sl-blog"
      >
        <SwiperSlide className="myBlog">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {map(dataSliderBlog, (blogData: string, index: number) => {
            if (index <= 3) {
              return (
                <div key={index} className="w-full">
                  <ItemMobileBlogHome blog={blogData} index={index} />
                </div>
              );
            }
          })}
        </SwiperSlide>
        {dataSliderBlog?.length >= 5 && (
          <SwiperSlide className="myBlog">
            {map(dataSliderBlog, (blogData: string, index: number) => {
              if (index > 3 && index <= 7) {
                return (
                  <div key={index} className="w-full">
                    <ItemMobileBlogHome blog={blogData} index={index} />
                  </div>
                );
              }
              return null;
            })}
          </SwiperSlide>
        )}
        {dataSliderBlog?.length > 8 && (
          <SwiperSlide className="myBlog">
            {map(dataSliderBlog, (blogData: string, index: number) => {
              if (index > 7 && index <= 11) {
                return (
                  <div key={index} className="w-full">
                    <ItemMobileBlogHome blog={blogData} index={index} />
                  </div>
                );
              }
              return null;
            })}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
export default SliderMobileBlogHome;
