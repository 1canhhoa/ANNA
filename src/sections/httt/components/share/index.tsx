'use client';

import ICQueto from '@/components/Icons/ICQueto';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SlideVideoShare from '@/sections/httt/components/share/slideVideo';
import Image from 'next/image';
import React, { useState } from 'react';
import './style.css';
import SlideContentShare from '@/sections/httt/components/share/slideContent';

function Share() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="mt-[8rem] relative max-md:h-[240rem] h-screen">
      <div className="h-full w-full absolute top-0 left-0 background-blur-share z-10" />
      <AspectRatio ratio={2 / 1}>
        <Image
          className="w-full h-full object-cover z-[1] absolute top-0 left-0 opacity-[0.35] max-md:hidden"
          src="/img/httt/banner_desktop.jpg"
          alt="background hanh trinh tu te"
          width={1600}
          height={900}
        />
      </AspectRatio>

      <h3 className="flex md:hidden absolute top-[12.2rem] left-[4.27rem]">
        <span className="text-[#7BD7D6] font-bold max-md:text-[6.72rem] max-md:leading-[8.736rem] text-[3.5rem] leading-[4.55rem] not-italic">
          Chia Sẻ Về Hành Trình
        </span>
        <div className="hidden md:block">
          <ICQueto />
        </div>
      </h3>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-0 flex justify-between w-full card-share flex-wrap md:pr-[6.19rem]">
        <div className="w-full md:w-1/2 h-[150rem] md:h-[36.5rem]">
          <SlideVideoShare controlledSwiper={controlledSwiper} />
        </div>
        <div className="w-full md:w-1/2 pl-[4rem]">
          <div className="py-[1.44rem] md:border-b border-[#414141]">
            <h3 className="flex max-md:hidden">
              <span className="text-[#7BD7D6] font-bold max-md:text-[6.72rem] max-md:leading-[8.736rem] text-[3.5rem] leading-[4.55rem] not-italic">
                Chia Sẻ Về Hành Trình
              </span>
              <div className="hidden md:block">
                <ICQueto />
              </div>
            </h3>
          </div>
          <SlideContentShare setControlledSwiper={setControlledSwiper} />
        </div>
      </div>
    </div>
  );
}

export default Share;
