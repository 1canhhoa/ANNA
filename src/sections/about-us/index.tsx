'use client';

import Image from 'next/image';
import SwiperFamilierCustomer from './components/SwiperFamilierCustomer';
import './style.css';

interface IProps {
  dataGetAboutus?: any;
}
export default function AboutUs(props: IProps) {
  const { dataGetAboutus } = props;

  return (
    <div className="about-us-container">
      {/* banner */}
      <div className="relative bg-banner-about-us bg-cover bg-no-repeat height-banner-global">
        <Image
          src="/img/about-us/bg-banner-about-us.jpg"
          alt="banner-aboutus"
          height="320"
          width={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 left-[8rem]">
          <h1 className="text-white text-[3.125rem] leading-[4.6875rem] font-semibold not-italic max-md:font-bold max-md:text-[4.32rem] max-md:leading-[7.2rem]">
            LỜI CẢM ƠN
          </h1>
          <div className="flex items-center">
            <span className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[2.88rem]">
              Trang chủ
            </span>
            <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
            <span className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[2.88rem] max-md:leading-[4.8rem]">
              Về Anna
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-[87.5rem] mx-auto my-0 flex flex-col items-center mt-[7.2rem] mx-[8.38rem] max-xl:mx-[3rem] max-md:mx-[6.4rem]">
        <div className="flex justify-between w-full max-md:flex-col-reverse">
          <div className="flex max-md:flex-col w-1/2 max-md:w-full">
            <Image
              width={180}
              height={290}
              className="w-[48%] h-[29.75rem] mr-[1.8125rem] object-cover max-md:w-full max-md:h-[105.06667rem]"
              src="/img/about-us/content1.jpg"
              alt=""
            />
            <Image
              width={180}
              height={290}
              className="w-[48%] h-[29.75rem] mr-[1.75rem] object-cover mt-[6.75rem] max-md:w-full max-md:h-[105.06667rem]"
              src="/img/about-us/content2.jpg"
              alt=""
            />
          </div>
          <div className="mt-[6.75rem] w-1/2 max-md:w-full">
            <h2 className="font-extrabold text-[2.188rem] not-italic leading-[3.28125rem] max-md:text-[4.32rem] max-md:leading-[7.2rem]">
              CẢM ƠN VÌ BẠN ĐÃ LỰA CHỌN CHÚNG TÔI
            </h2>
          </div>
        </div>

        <div className="w-full flex justify-between mt-[6.75rem] max-md:flex-col">
          <h2 className="mt-[6.75rem] w-1/2 font-extrabold text-[2.1875rem] not-italic leading-[3.28125rem] max-md:text-[4.32rem] max-md:leading-[7.2rem] max-md:w-full max-md:text-center">
            HỆ THỐNG CỬA HÀNG KÍNH MẮT
          </h2>
          <Image
            height={330}
            width={390}
            className="w-1/2 h-[33.8125rem] object-cover max-md:w-full max-md:mt-[4.27rem] max-md:h-[105.06667rem]"
            src="/img/about-us/content3.jpg"
            alt=""
          />
        </div>

        <div className="w-full flex justify-between mt-[5rem] h-[46rem] items-center max-md:flex-col max-md:h-fit max-md:items-center">
          <div className="w-[30rem]  mr-[2rem] max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
            <div className="relative h-[8rem] w-full max-md:flex max-md:justify-center">
              <h2 className="mb-[2.5rem] font-extrabold text-[2.1875rem] not-italic leading-[7rem] max-md:text-[4.32rem] max-md:leading-[7.2rem]">
                VŨ TRỤ TRUYỀN THÔNG
              </h2>
              <div className="absolute bottom-0 -z-10 h-full w-[79%] max-md:w-full">
                <Image
                  src="/img/about-us/vecto1.svg"
                  alt="verto"
                  height={100}
                  width={100}
                  className="w-full h-full object-contain max-md:object-fill"
                />
              </div>
            </div>
            <p className="text-[1rem] not-italic font-medium leading-[1.8rem] max-md:text-[3.78rem] max-md:leading-[7.68rem]">
              Kính mắt Anna chắc không còn quá xa lạ với giới trẻ nữa. Đây là
              kênh thông tin mua sắm và giải trí dành cho giới trẻ, là “món ăn
              tinh thần” hằng ngày không thể thiếu của mỗi người trẻ.
            </p>
            <p className="text-[1rem] not-italic font-medium leading-[1.8rem] mt-[1rem] max-md:text-[3.78rem] max-md:leading-[7.68rem]">
              Được thành lập từ năm 2015, trải qua hơn 7 năm phát triển kính mắt
              Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn
              trẻ. Cập nhật thông tin thời trang nhanh chóng và phù hợp với thị
              hiếu của khán giả thông qua các mạng xã hội như Facebook, Tiktok,
              Instagram, Youtube, kính mắt Anna là lựa chọn hàng đầu cho những
              ai muốn tận hưởng các bài viết, video vừa mang tính giải trí mà
              vẫn có đầy đủ thông tin cần thiết.
            </p>
          </div>
          <div className="relative marketing-war w-[20rem] h-[20rem] mr-[11.5rem] max-md:my-[28rem] max-md:h-[45rem] max-md:w-[45rem]  max-md:mr-[3.5rem] ">
            <Image
              height={200}
              width={200}
              className="w-[20rem] h-[20rem] object-cover rounded-full max-md:h-[45rem] max-md:w-[45rem]"
              src="/img/about-us/content4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-[1rem] facebook w-[17rem] h-[14rem] absolute top-[50%] -translate-y-1/2 -left-[40%] max-md:h-[28rem] max-md:w-[35rem] max-md:p-[3rem]">
              <svg
                className="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                width="3rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z" />
              </svg>
              <svg
                className="hidden max-md:block"
                xmlns="http://www.w3.org/2000/svg"
                height="6rem"
                width="6rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z" />
              </svg>
              <div>
                <h2 className="text-white font-semibold max-md:text-[3.15rem]">
                  ANNA
                </h2>
                <p className="text-white max-md:text-[2.25rem]">@kinhmatanna</p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-[1rem] instagram w-[17rem] h-[14rem] absolute -top-[30%] -right-[50%] max-md:h-[28rem] max-md:w-[35rem] max-md:p-[3rem]">
              <svg
                className="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                width="3rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M224 202.7A53.3 53.3 0 1 0 277.4 256 53.4 53.4 0 0 0 224 202.7zm124.7-41a54 54 0 0 0 -30.4-30.4c-21-8.3-71-6.4-94.3-6.4s-73.3-1.9-94.3 6.4a54 54 0 0 0 -30.4 30.4c-8.3 21-6.4 71.1-6.4 94.3S91 329.3 99.3 350.3a54 54 0 0 0 30.4 30.4c21 8.3 71 6.4 94.3 6.4s73.2 1.9 94.3-6.4a54 54 0 0 0 30.4-30.4c8.4-21 6.4-71.1 6.4-94.3S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.4-148.3a19.1 19.1 0 1 1 19.1-19.1A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.3 25.6-7.1 48.3-25.9 67s-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.9-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.9-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.2 67 25.9s24.6 41.4 25.9 67.1C384.4 216.4 384.4 295.6 382.9 322z" />
              </svg>
              <svg
                className="hidden max-md:block"
                xmlns="http://www.w3.org/2000/svg"
                height="6rem"
                width="6rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M224 202.7A53.3 53.3 0 1 0 277.4 256 53.4 53.4 0 0 0 224 202.7zm124.7-41a54 54 0 0 0 -30.4-30.4c-21-8.3-71-6.4-94.3-6.4s-73.3-1.9-94.3 6.4a54 54 0 0 0 -30.4 30.4c-8.3 21-6.4 71.1-6.4 94.3S91 329.3 99.3 350.3a54 54 0 0 0 30.4 30.4c21 8.3 71 6.4 94.3 6.4s73.2 1.9 94.3-6.4a54 54 0 0 0 30.4-30.4c8.4-21 6.4-71.1 6.4-94.3S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.4-148.3a19.1 19.1 0 1 1 19.1-19.1A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.3 25.6-7.1 48.3-25.9 67s-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.9-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.9-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.2 67 25.9s24.6 41.4 25.9 67.1C384.4 216.4 384.4 295.6 382.9 322z" />
              </svg>
              <div>
                <h2 className="text-white font-semibold max-md:text-[3.15rem]">
                  ANNA
                </h2>
                <p className="text-white max-md:text-[2.25rem]">@kinhmatanna</p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-[1rem] tiktok w-[17rem] h-[14rem] absolute -bottom-[30%] -right-[41%] max-md:h-[28rem] max-md:w-[35rem] max-md:p-[3rem]">
              <svg
                className="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                width="3rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
              <svg
                className="hidden max-md:block"
                xmlns="http://www.w3.org/2000/svg"
                height="6rem"
                width="6rem"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
              <div>
                <h2 className="text-white font-semibold max-md:text-[3.15rem]">
                  ANNA
                </h2>
                <p className="text-white max-md:text-[2.25rem]">@kinhmatanna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[87.5rem] mx-auto max-md:w-full mb-[5rem]">
        <div className="w-full flex justify-start">
          <div className="relative w-[39.6875rem] h-[10rem] mr-[2rem] max-md:flex max-md:flex-col max-md:items-center max-md:w-full">
            <p className="uppercase max-md:text-[2.7rem] font-medium">
              Tình thương mến thương
            </p>
            <h2 className="font-semibold text-[2.1875rem] not-italic leading-[5rem] max-md:text-[4.32rem] max-md:leading-[7.2rem]">
              KHÁCH HÀNG THÂN YÊU
            </h2>
            <div className="w-[55%] h-full absolute bottom-0 -z-10">
              <Image
                src="/img/about-us/vecto1.svg"
                alt="verto"
                height={100}
                width={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <SwiperFamilierCustomer dataGetAboutus={dataGetAboutus} />
        </div>
      </div>
    </div>
  );
}
