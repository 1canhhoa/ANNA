'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import ImgAnna from '@/assets/blogImg/kinh-mat-anna.jpg';

interface ItemSlice {
  image: string;
  title: string;
  location: string;
}
interface IpropSlideAbout {
  dataInfo: ItemSlice[];
}
function SliceAbout({ dataInfo }: IpropSlideAbout) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-about"
      >
        {dataInfo?.map((info: ItemSlice, index: number) => (
          <SwiperSlide
            className="relative rounded-[4.26667rem] md:rounded-2xl"
            key={index}
          >
            <Image
              src={info?.image ? info?.image : ImgAnna}
              alt=""
              width={612}
              height={488}
              className=" w-full h-[82.4rem] md:h-[30.5rem] object-cover max-sm:rounded-[4.26667rem] lg:rounded-[1.25rem] border-0 md:border-[6px] border-solid border-[#E6F9F8]"
            />
            <div className="absolute bottom-12 w-full p-[2px] md:p-[6px]">
              <div className="max-sm:flex items-center justify-between max-sm:bg-[#828282]/30 max-sm:rounded-[4.26667rem] max-sm:p-[1rem]">
                <div className="p-8 md:p-3 md:bg-black/30 max-sm:rounded-[4.26667rem] md:rounded-[1rem] backdrop-blur-[4px] md:backdrop-blur-[12.5px] lg:py-[1.13rem] lg:pl-[1.31rem] lg:pr-[1.94rem]">
                  <h4 className="text-left text-white text-[3.36rem] md:text-2xl lg:text-[1.5rem] font-black uppercase leading-[1.2]">
                    {info?.title}
                  </h4>
                  <div className="text-white flex justify-between lg:mt-[0.12rem]">
                    <p className="text-[2.88rem] md:text-[2.5rem] md:text-lg lg:text-[1.125rem] leading-[4.16rem] md:leading-[1.4] font-semibold lg:w-[23.5625rem] max-sm:max-w-[67rem]">
                      {info?.location}
                    </p>
                    <div className="hidden md:block">
                      <ICArrowTopRightActive
                        width={30}
                        height={30}
                        stroke="#fff"
                        fill="#fff"
                      />
                    </div>
                  </div>
                </div>
                <div className="block md:hidden p-[1.5rem] bg-white rounded-full rotate-45 icon-next-about mr-[2.2rem]">
                  <ICArrowTopRightActive
                    width={30}
                    height={30}
                    stroke="#F58F5D"
                    fill="#F58F5D"
                  />
                </div>
              </div>
            </div>
            <div className="h-12" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliceAbout;
