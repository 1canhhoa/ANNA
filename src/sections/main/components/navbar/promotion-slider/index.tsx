import { useContext } from 'react';
import { ProductCartContext } from '@/context-provider';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PromotionSlider() {
  // const { getDataDetailPopup } = useContext(ProductCartContext);

  return (
    <div className="h-[2rem]">
      <Swiper
        autoplay
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Virtual, Navigation]}
        navigation
        virtual
      >
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <div className="w-[5rem]">sssss</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PromotionSlider;
