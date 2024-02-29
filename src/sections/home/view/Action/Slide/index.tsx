'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import ICButton from '@/components/Icons/ICButton';
import Link from 'next/link';

interface IPropItem {
  dataSlider: string[];
}
function SliceAction({ dataSlider }: IPropItem) {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          767: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={30}
        grabCursor
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-action h-[66.625rem] md:h-[34.625rem]"
      >
        {dataSlider?.map((img: string, index: number) => (
          <SwiperSlide
            key={index}
            className="relative rounded-[8rem] md:rounded-2xl h-[60rem] md:h-[33.5rem] item-slide-action md:pb-[1.5rem]"
          >
            <Image
              src={img}
              alt=""
              width={673}
              height={504}
              className="w-full h-full rounded-[8rem] md:rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 mb-8 max-sm:left-[3.47rem] max-sm:bottom-[1.33rem] md:right-[0.5rem] cursor-pointer">
              <Link href="/hanh-trinh-tu-te">
                <ICButton />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliceAction;
