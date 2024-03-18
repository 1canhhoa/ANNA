'use client';

import PopupAction from '@/sections/httt/components/action/popup';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './style.css';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Action() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpen = () => setIsShowPopup(true);
  const handleClose = () => setIsShowPopup(false);

  return (
    <div className="relative md:w-[87.5rem] mx-auto md:mt-[6.25rem] md:h-[61.4375rem] rounded-[1.25rem]">
      <div className="hidden md:block h-[30rem]">
        <div className="h-full">
          <Image
            className="w-full h-full object-cover z-[5] absolute top-0 left-0 rounded-[1.25rem]"
            src="/img/httt/bg-frame.jpg"
            alt="background hanh trinh tu te"
            width={1600}
            height={900}
          />
        </div>
      </div>
      <div className="block md:hidden h-[30rem]">
        <AspectRatio ratio={2 / 3} className="h-full">
          <Image
            className="w-full h-full object-cover z-[5] absolute top-0 left-0 rounded-[1.25rem]"
            src="/img/httt/bg-frame.jpg"
            alt="background hanh trinh tu te"
            width={1600}
            height={900}
          />
        </AspectRatio>
      </div>
      <div className="absolute top-0 pt-[4.31rem] pb-[4.94rem] px-[3.87rem] z-[5] w-full rounded-[1.25rem] max-md:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <div
            className="md:w-[40rem] max-md:mt-[15.27rem] max-md:px-[3.2rem]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="max-md:text-[6.72rem] text-[3.5rem] text-white font-bold leading-[4.55rem] tracking-[-0.175rem]">
              Các Hoạt Động Chính
            </h2>
            <h3 className="text-white font-medium leading-[1.3] tracking-[-0.0625rem] mt-[0.75rem] max-md:text-[3.36rem] text-[1.25rem] max-md:mt-[2.13rem] max-md:mb-[6.4rem]">
              ”Hành Trình Tử Tế” được khởi hành với 3 nhóm hoạt động chính
            </h3>
          </div>
          <Link href="https://www.facebook.com/groups/999473344383076">
            <div className="rounded-[6.5rem] border border-solid border-white px-[2rem] py-[0.75rem] hidden md:flex items-center h-fit">
              <span className="block mr-[1.5rem] text-[1rem] text-white font-medium leading-[1.575rem] tracking-[-0.03rem] pt-[0.1rem]">
                Cộng đồng sống tử tế
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  opacity="0.7"
                  d="M0.767274 0.599121C0.962138 0.599121 1.157 0.675675 1.31011 0.821822L8.94457 8.46325C9.24383 8.7625 9.24383 9.2427 8.94457 9.54195L1.30315 17.1764C1.00389 17.4757 0.523695 17.4757 0.224441 17.1764C-0.0748136 16.8772 -0.0748136 16.397 0.224441 16.0977L7.32303 8.99912L0.224441 1.90053C-0.0748136 1.60128 -0.0748136 1.12108 0.224441 0.821822C0.377548 0.675675 0.572411 0.599121 0.767274 0.599121Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="border-t border-solid border-white/50 my-[3.19rem] max-md:mx-[3.2rem]" />
        <div className="max-md:overflow-scroll ">
          <div className="grid grid-cols-2 gap-x-[2rem] md:h-[35.875rem] max-md:w-[122rem] ml-[3.2rem]">
            <div className=" bg-white rounded-[2.04213rem] md:rounded-[1rem] h-full px-[2rem] pb-[2rem] pt-[3rem] flex flex-col">
              <div
                role="button"
                className="font-bold max-md:text-[3.84rem] text-[2rem] text-[#414141] hover:text-[#7BD7D6] cursor-pointer"
                onClick={handleOpen}
              >
                Đôi Mắt Mặt Trời
              </div>
              <div className="border-t border-solid border-[#414141]/60 my-[1.12rem]" />
              <p className="text-[3.36rem] md:text-[1.25rem] w-full text-[#414141]/70 font-medium leading-[1.4] tracking-[-0.0375rem] mb-[2.31rem]">
                Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn
                cảnh khó khăn
              </p>
              <div className="grow" />
              <Image
                className="w-full md:h-[20.1875rem] object-cover rounded-[2.04213rem] md:rounded-[1rem]"
                src="/img/httt/eye.jpg"
                alt="doi mat mat troi"
                width={560}
                height={330}
              />
            </div>
            <div className="bg-white rounded-[2.04213rem] md:rounded-[1rem] h-full px-[2rem] pb-[2rem] pt-[3rem] flex flex-col">
              <h2 className="font-bold max-md:text-[3.84rem] text-[2rem] text-[#414141] hover:text-[#7BD7D6] cursor-pointer">
                Túi Tử Tế
              </h2>
              <div className="border-t border-solid border-[#414141]/60 my-[1.12rem]" />
              <p className="text-[3.36rem] md:text-[1.25rem] text-[#414141]/70 font-medium leading-[1.4] tracking-[-0.0375rem] w-full mb-[2.31rem]">
                Anna sẽ in 500,000 chiếc túi tử tế nhằm lan toả câu chuyện tìm
                người thân thất lạc, cùng hi vọng phép màu sẽ xảy ra.
              </p>
              <Image
                className="w-full md:h-[20.1875rem] object-cover rounded-[2.04213rem] md:rounded-[1rem]"
                src="/img/httt/action.png"
                alt="doi mat mat troi"
                width={560}
                height={330}
              />
            </div>
          </div>
        </div>
        <Link href="https://www.facebook.com/groups/999473344383076">
          <div>
            <div className="w-fit rounded-[6.5rem] border border-solid border-white px-[6.4rem] my-[6.4rem] py-[2.4rem] flex md:hidden items-center h-fit max-md:mx-[3.2rem]">
              <span className="block text-[3.36rem] mr-[1.5rem] text-white font-medium leading-[1.57] tracking-[-0.03rem] max-md:mr-[6.4rem]">
                Cộng đồng sống tử tế
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  opacity="0.7"
                  d="M0.767274 0.599121C0.962138 0.599121 1.157 0.675675 1.31011 0.821822L8.94457 8.46325C9.24383 8.7625 9.24383 9.2427 8.94457 9.54195L1.30315 17.1764C1.00389 17.4757 0.523695 17.4757 0.224441 17.1764C-0.0748136 16.8772 -0.0748136 16.397 0.224441 16.0977L7.32303 8.99912L0.224441 1.90053C-0.0748136 1.60128 -0.0748136 1.12108 0.224441 0.821822C0.377548 0.675675 0.572411 0.599121 0.767274 0.599121Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Link>
        <PopupAction handleClose={handleClose} isShow={isShowPopup} />
      </div>
    </div>
  );
}
