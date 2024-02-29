'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface IPropContentShare {
  title1: string;
  des: string;
  info: string;
  title2: string;
}
function ContentItem(props: IPropContentShare) {
  return (
    <div className="w-full h-full mt-[3.25rem]">
      <div className="">
        <h4 className="text-[#414141] max-md:text-[4.8rem] font-bold not-italic text-[2rem]">
          {props?.title1}
        </h4>
        <span className="mt-[1rem] max-md:text-[3.36rem] italic text-[#414141]">
          {props?.info}
        </span>
      </div>
      <div className="">
        <h4 className="text-[#414141] max-md:text-[3.84rem] text-[1.375rem] font-extrabold mt-[1.5rem]">
          {props?.title2}
        </h4>
        <p className="py-[0.5rem]  text-[#414141] text-[3.36rem] md:text-[1.25rem] w-full">
          {props?.des}
        </p>
      </div>
    </div>
  );
}

export default ContentItem;
