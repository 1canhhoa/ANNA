import Image from 'next/image';
import React from 'react';

interface IProps {
  img: string;
  des: string;
}
function ActionItemSlide(props: IProps) {
  return (
    <div className="w-full relative h-[56.70933rem] md:h-[26.66781rem]">
      <Image
        src={props?.img}
        alt=""
        width={386}
        height={503}
        className="w-full h-full rounded-[2.09067rem] md:rounded-[1rem] object-cover image-item-slide ease-out duration-300"
      />
      <div className="absolute bottom-0 cursor-pointer px-6 pb-[2rem]">
        <p className="text-[2.93333rem] md:text-[1.25rem] font-bold text-[#fff] line-clamp-2">
          Em Nguyễn Văn A
        </p>
        <span className="text-[2.66667rem] md:text-[1rem] font-semibold text-[#fff]">
          Bắc Giang
        </span>
        <p className="text-[2.93333rem] md:text-[1.25rem] font-bold text-[#fff] line-clamp-2">
          {props?.des}
        </p>
      </div>
    </div>
  );
}

export default ActionItemSlide;
