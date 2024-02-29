'use client';

import { ICClose } from '@/components/Icons/ICClose';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import React, { useState } from 'react';

function Partner() {
  const [showMess, setShowMess] = useState(0);
  const handleShowMess = (item: number) => {
    setShowMess(item);
  };
  return (
    <div className="w-[87.5rem] mx-auto pt-[8.12rem] pb-[4.53rem]">
      <div className="text-center">
        <h4 className="text-[6rem] md:text-[2.5rem] font-extrabold text-[#444]">
          Những đối tác đồng hành trên
        </h4>
        <h3 className="text-[#7BD7D6] font-extrabold text-[7.46667rem] md:text-[3rem]">
          Hành trình tử tế
        </h3>
      </div>
      <div
        className={`pt-[4.53rem] justify-between flex flex-wrap relative ${
          showMess !== 0 ? 'mb-[31rem] md:mb-[3rem]' : ''
        }`}
      >
        <div
          className={`w-1/3 md:w-2/12 ${showMess !== 0 ? 'pb-[5.5rem]' : ''}`}
        >
          <div onClick={() => handleShowMess(1)}>
            <Image
              src="/img/httt/Object.svg"
              alt="poster"
              className="object-cover cursor-pointer"
              height={150}
              width={150}
            />
          </div>
          <div className={`${showMess === 1 ? 'opacity-1' : 'opacity-0'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
            >
              <g opacity="0.1">
                <path d="M0 8H17L8.5 0L0 8Z" fill="#7BD7D6" />
                <path d="M0 8H17L8.5 0L0 8Z" fill="black" fillOpacity="0.16" />
              </g>
            </svg>
            <div className="bg-[#f0f8f8] absolute z-10 w-full p-[4.27rem] md:p-[1rem] md:min-h-[220px]">
              <h4 className="font-semibold text-[#414141] flex justify-between">
                <span className="text-[4.26667rem] md:text-[1.5rem]">
                  OKhub
                </span>
                <div onClick={() => handleShowMess(0)}>
                  <ICClose stroke="#414141" />
                </div>
              </h4>
              <p className="text-[3.73333rem] md:text-[1rem]">
                Là Agency chuyên về Thiết kế website chuẩn insight. OKhub luôn
                sẵn sàng đồng hành cùng các dự án thiện nguyện. Anna tử tế,
                OKhub cũng thế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
