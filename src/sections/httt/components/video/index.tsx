'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Video() {
  const vidRef = useRef(null) as any;
  const [isControl, setIsControl] = useState(false);
  const handlePlayVideo = () => {
    setIsControl(!isControl);
    if (isControl === true) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="w-full h-[75.46667rem] md:h-[47.125rem] mt-[0rem] max-md:mt-0 relative">
      <video
        src="https://kinhmatanna.com/wp-content/uploads/2023/07/y2mate.com-Den-Nau-an-cho-em-ft-PiaLinh-MV_v720P-online-video-cutter.com-1.mp4#t=0.001"
        className="w-full h-full object-cover"
        ref={vidRef}
        poster="/img/httt/poster.jpg"
        controls={isControl}
      />
      <Image
        src="/img/httt/play.svg"
        alt="poster"
        className={cn(
          'w-[7rem] h-[7rem] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10 object-cover cursor-pointer',
          isControl ? 'hidden' : 'block'
        )}
        height={120}
        width={120}
        onClick={handlePlayVideo}
      />
    </div>
  );
}
