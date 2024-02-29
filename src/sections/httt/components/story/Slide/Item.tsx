'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface IProps {
  img: string;
  des: string;
  slug: string;
}

function ItemStory(props: IProps) {
  return (
    <Link href={`/blog/${props?.slug}`}>
      <div className="w-full relative h-[84.49093rem] md:h-[33.25rem]">
        <Image
          src={props?.img ? props?.img : '/img/httt/story1.png'}
          alt=""
          width={386}
          height={503}
          className="w-full h-full rounded-[2.54107rem] md:rounded-[1rem] object-cover image-item-slide ease-out duration-300"
        />
        <div className="absolute bottom-0 cursor-pointer px-[3.81rem] md:px-6 pb-[2rem]">
          <p className="text-[3.36rem] md:text-[1.25rem] font-bold text-[#fff] line-clamp-2">
            {props?.des}
          </p>
          <span className="text-[2.88rem] md:text-[1rem] font-semibold text-[#fff]">
            Xem thêm
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ItemStory;
