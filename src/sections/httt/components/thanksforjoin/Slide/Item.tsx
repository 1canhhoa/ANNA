'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useState } from 'react';

interface IProps {
  img: string;
  name: string;
  title: string;
  des: string;
}

function ItemPeopleJoin(props: IProps) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="w-full relative h-[120rem] md:h-[36.5rem]">
      <Image
        src={props?.img}
        alt=""
        width={386}
        height={503}
        className="w-full h-full object-contain image-item-slide ease-out duration-300"
      />
      <div className="absolute bottom-0 cursor-pointer md:px-6">
        <h4 className="text-[3.6rem] md:text-[1.875rem] font-bold text-[#7BD7D6]">
          {props?.name}
        </h4>
        <p className="text-[3.36rem] text-[#414141]  md:text-[1.125rem] font-semibold">
          {props?.title}
        </p>
        <p
          className={`${
            isShow ? 'line-clamp-none' : 'line-clamp-2'
          } text-[2.88rem] md:text-[1.125rem] text-[#414141] transition-all duration-500`}
        >
          {props?.des}
        </p>
        <span
          role="button"
          className="text-[3.2rem] text-[#414141]  md:text-[1.125rem] font-semibold"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? 'Thu gọn' : 'Xem thêm'}
        </span>
      </div>
    </div>
  );
}

export default ItemPeopleJoin;
