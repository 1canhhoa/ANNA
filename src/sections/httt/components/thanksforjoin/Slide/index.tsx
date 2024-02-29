'use client';

// Import Swiper React components

// Import Swiper styles
import ItemPeopleJoin from '@/sections/httt/components/thanksforjoin/Slide/Item';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function ListPeople() {
  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.4,
          },
          767: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop
        navigation={{
          prevEl: `.prev-join`,
          nextEl: `.next-join`,
        }}
        // modules={[Navigation, Autoplay]}
        className="myJoin pl-[0rem] mx-[1rem] max-md:!px-[4.27rem]"
      >
        <SwiperSlide>
          <ItemPeopleJoin
            img="/img/httt/people1.png"
            name="Tun Phạm"
            title="MC / Diễn giả / Người truyền cảm hứng"
            des="Tun Phạm tên thật là Phạm Đức Huy (24 tuổi), đến từ Hà Nội, là một vlogger, hot tiktoker mới nổi đang được nhiều bạn trẻ quan tâm. Ban đầu, Tun Phạm theo học Báo chí tại Học viện Báo chí và Tuyên truyền với ước mơ trở thành một biên tập viên thời sự. Song, anh chàng 9x này đã rẽ hướng sang làm vlogger và gần đây nhất là người sáng tạo nội dung trên TikTok."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemPeopleJoin
            img="/img/httt/people2.png"
            name="Phạm Hồng Thúy Vân"
            title="Á hậu quốc tế 2015/ Diễn giả/ Doanh nhân"
            des="Thúy Vân là một á hậu, huấn luyện viên, giám khảo chương trình, người mẫu, người dẫn chương trình, ca sĩ kiêm sáng tác nhạc, diễn viên, người mẫu, người dẫn chương trình và diễn giả người Việt Nam"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemPeopleJoin
            img="/img/httt/people3.png"
            name="Nông Thúy Hằng"
            title="Hoa hậu các dân tốc Việt Nam 2022"
            des="Nông Thúy Hằng là một hoa hậu người Việt Nam, cô là Hoa hậu các Dân tộc Việt Nam 2022."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ListPeople;
