'use client';

import ICCart from '@/components/Icons/ICCart';
import ICLocation2 from '@/components/Icons/ICLocation2';
import { ICClose } from '@/components/Icons/ICClose';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import React from 'react';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import Link from 'next/link';
import map from 'lodash.map';

interface IPropsMenuMobile {
  isShowMenu: boolean;
  handleTogleMenu: any;
  dataListProductHeader: any;
}
function MenuPopupMobile({
  isShowMenu,
  handleTogleMenu,
  dataListProductHeader,
}: IPropsMenuMobile) {
  return (
    <div
      className={`${
        isShowMenu ? 'block' : 'hidden'
      } h-screen w-full fixed top-0 left-0 z-50 bg-[#55D5D2] pt-[9.6rem] overflow-y-auto`}
    >
      <div className="px-[3.2rem]">
        <div className="flex justify-between">
          <ICLogo width="18.13333rem" height="16rem" />
          <button type="button" onClick={handleTogleMenu}>
            <ICClose width="6.4rem" height="6.4rem" />
          </button>
        </div>
        <div className="mt-[6rem] flex justify-between mb-[7.09rem]">
          <Link
            href="/"
            className="flex justify-start items-center bg-white h-[12rem] w-[46.13333rem] rounded-[12rem] py-[2.6667rem] px-[6.4rem]"
          >
            <div className="relative w-[5.83333rem] h-[5.83333rem] mr-[3.2rem]">
              <ICCart fill="#55D5D2" width="5rem" height="5rem" />
              <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[3.46667rem] h-[3.46667rem] font-bold not-italic text-[2.13333rem]">
                3
              </div>
            </div>
            <span className="text-[3.8888rem] not-italic font-extrabold leading-[5.44453rem] text-blueAnna">
              Giỏ hàng
            </span>
          </Link>
          <Link
            href="/"
            className="flex justify-start items-center bg-white h-[12rem] w-[46.13333rem] rounded-[12rem] py-[2.6667rem] px-[6.4rem]"
          >
            <ICLocation2
              stroke="#55D5D2"
              width="5.83333rem"
              height="5.83333rem"
            />
            <span className="text-[3.8888rem] not-italic font-extrabold leading-[5.44453rem] text-blueAnna">
              Tìm cửa hàng
            </span>
          </Link>
        </div>
        <span className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
          Sản phẩm
        </span>
        <ul className="mt-[2rem] list-disc list-inside grid grid-cols-2">
          {map(dataListProductHeader, (item: any, index: number) => (
            <li
              key={index}
              className="text-[3.73333rem] text-white not-italic font-extrabold leading-[4.85333rem] uppercase py-[2.27rem] mb-[0.93rem]"
            >
              {item?.name}
            </li>
          ))}
        </ul>
        <hr className="bg-white mt-[2.13rem] mb-[6.93rem]" />
        <Link href="/">
          <h3 className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
            Về ANNA
          </h3>
        </Link>
        <Link href="/order-checking">
          <h3 className="cursor-pointer text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] my-[3.2rem]">
            Tra cứu đơn hàng
          </h3>
        </Link>
        <Link href="/">
          <h3 className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
            Blog
          </h3>
        </Link>
      </div>
      <div className="bg-white w-full py-[8.53rem] pl-[3.2rem] rounded-t-[4.26667rem] mt-[16rem]">
        <h3 className="text-[6.4rem] not-italic font-extrabold leading-[9.6rem] ">
          Hành trình tử tế
        </h3>
        <div className="my-[4.8rem] flex overflow-x-auto">
          <div className="mr-[1.6rem] w-[213px] relative">
            <Image
              height={420}
              width={420}
              className="h-[38.66667rem] w-full rounded-[4.288rem] object-cover shrink-0"
              src="/img/header/image4.png"
              alt=""
            />
            <div className="absolute left-0 top-0 h-[38.66667rem] rounded-[4.288rem] w-full bg-[#001515] bg-opacity-40 flex justify-center items-center">
              <span className="text-[3.73333rem] text-white leading-[5.22667rem] not-italic font-extrabold uppercase">
                TÚI TỬ TẾ
              </span>
            </div>
          </div>
          <div className="w-[213px] relative">
            <Image
              height={420}
              width={420}
              className="h-[38.66667rem] w-full rounded-[4.288rem] object-cover shrink-0"
              src="/img/header/image5.png"
              alt=""
            />
            <div className="absolute left-0 top-0 h-[38.66667rem] rounded-[4.288rem] w-full bg-[#001515] bg-opacity-40 flex justify-center items-center">
              <span className="text-[3.73333rem] text-white leading-[5.22667rem] not-italic font-extrabold uppercase">
                ĐÔI MẮT MẶT TRỜI
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pr-[3.2rem]">
          <span className="text-[3.73333rem] text-[#4DC0BD] not-italic font-extrabold leading-[5.22667rem]">
            KẾT NỐI VỚI ANNA
          </span>
          <div className="grid grid-cols-4 gap-[4.27rem]">
            <ICFacebookFooter
              strokeWidth="4"
              stroke="#55D5D2"
              width="6.4rem"
              height="6.4rem"
            />
            <ICInstagramFooter
              strokeWidth="4"
              stroke="#55D5D2"
              width="6.4rem"
              height="6.4rem"
            />
            <ICTiktokFooter
              strokeWidth="4"
              stroke="#55D5D2"
              width="6.4rem"
              height="6.4rem"
            />
            <ICShopeeFooter
              strokeWidth="4"
              stroke="#55D5D2"
              width="6.4rem"
              height="6.4rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPopupMobile;
