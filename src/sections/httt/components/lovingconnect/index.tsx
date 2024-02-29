import ICEmail from '@/components/Icons/ICEmail';
import ICLocation from '@/components/Icons/ICLocation';

import ICLovingFace from '@/components/Icons/ICLovingFace';
import ICLovingInsta from '@/components/Icons/ICLovingInsta';
import ICLovingTiktok from '@/components/Icons/ICLovingTiktok';
import ICLovingTwitter from '@/components/Icons/ICLovingTwitter';
import ICPhone from '@/components/Icons/ICPhone';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { linkSocial } from '@/configs/config';
import ICYoutube from '@/components/Icons/ICYoutube';

function LovingConnect() {
  return (
    <div className="relative z-[1]">
      <AspectRatio ratio={3 / 1} className="hidden sm:block">
        <Image
          className="w-full h-full object-cover z-[5] absolute top-0 left-0"
          src="/img/httt/bg-loving.jpg"
          alt="background hanh trinh tu te"
          width={1600}
          height={534}
          // style={{ opacity: 0.35 }}
        />
      </AspectRatio>
      <div className="block md:hidden min-h-[80rem]">
        <Image
          className="w-full h-full object-cover z-[5] absolute top-0 left-0"
          src="/img/httt/bg-loving.jpg"
          alt="background hanh trinh tu te"
          width={1600}
          height={534}
          // style={{ opacity: 0.35 }}
        />
      </div>
      <div className="h-full w-full absolute top-0 left-0 z-[5] bg-[#E3EDEB] bg-opacity-90" />
      <div className="absolute z-10 top-0 pt-[3.88rem] h-full left-0 w-full">
        <div className="flex flex-wrap w-[87.5rem] mx-auto">
          <div className="w-full md:w-1/2 px-[1rem]">
            <h3 className="text-blueAnna font-bold text-[5.76rem] md:text-[3.125rem]">
              Kết Nối Yêu Thương
            </h3>
            <div className="flex items-center pt-[2.34rem] pb-[1rem]">
              <ICPhone stroke="#7BD7D6" fill="#7BD7D6" width={22} height={22} />
              <span className="font-semibold px-2 text-[3.84rem] md:text-[1.25rem] leading-[1.875rem]">
                Liên hệ:
              </span>
              <Link
                href="tel:0888.071.297"
                className="text-[3.36rem] text-[#414141] font-medium md:text-base"
              >
                0888.071.297
              </Link>
            </div>
            <div className="flex items-center">
              <ICEmail stroke="#7BD7D6" fill="#7BD7D6" width={22} height={22} />
              <span className="font-semibold px-2 text-[3.84rem] md:text-[1.25rem] leading-[1.875rem]">
                Email:
              </span>
              <span className="text-[3.36rem] font-medium text-[#414141] md:text-base">
                kinhmatanna@gmail.com
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-[1rem] py-[1rem] ">
            <div className="flex max-md:hidden">
              <Link href={linkSocial.facebook} className="pr-[1.54rem]">
                <ICLovingFace />
              </Link>
              <Link href={linkSocial.youtube} className="pr-[1.54rem]">
                <ICLovingTwitter />
              </Link>
              <Link href={linkSocial.tiktok} className="pr-[1.54rem]">
                <ICLovingTiktok />
              </Link>
              <Link href={linkSocial.instagram} className="pr-[1.54rem]">
                <ICLovingInsta />
              </Link>
            </div>
            <div className="pt-[2.76rem]">
              <div className="flex items-center">
                <ICLocation fill="#7BD7D6" width={22} height={22} />
                <p className="font-bold text-[3.84rem] md:text-[1.25rem] pl-[0.75rem]">
                  Địa điểm:
                </p>
              </div>
              <p className="text-[3.36rem] md:text-[1.125rem] font-medium text-[#414141] leading-[5.6rem ] md:leading-[1.6875rem] mt-[1rem]">
                Dự kiến 30.000+ học sinh bản CAO và XA khó khăn trong hơn 60 xã
                thuộc 7 huyện khó nhất của tỉnh Điện Biên: Huyện Mường Nhé,
                huyện Nậm Pồ, huyện Điện Biên Đông và Mường Chà, Tủa Chùa ,
                Mường Ảng, TP.Điện Biên Phủ, Huyện Điện Biên.
              </p>
              <p className="text-[3.36rem] font-medium md:text-[1.125rem] text-[#414141] pt-[1rem]">
                - Tỉnh Cao Bằng : Huyện Bảo Lâm
              </p>
              <p className="text-[3.36rem] font-medium md:text-[1.125rem] text-[#414141] pt-[1rem]">
                - Tỉnh Gia Lai
              </p>
              <p className="text-[3.36rem]  font-medium md:text-[1.125rem] text-[#414141] pt-[1rem]">
                - Tỉnh Đắk Lắk .....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LovingConnect;
