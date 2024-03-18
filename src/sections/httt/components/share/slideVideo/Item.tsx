'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

function VideoItem() {
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
    <div className="w-full h-full md:rounded-[1.875rem] relative">
      <video
        src="https://kinhmatanna.com/wp-content/uploads/2023/07/y2mate.com-Den-Nau-an-cho-em-ft-PiaLinh-MV_v720P-online-video-cutter.com-1.mp4#t=0.001"
        className="w-full h-full rounded-[1.875rem] object-cover max-md:rounded-none"
        ref={vidRef}
        poster="/img/httt/poster.jpg"
        controls={isControl}
      />
      <Image
        src="/img/httt/play.svg"
        alt="poster"
        className={cn(
          'w-[3.8rem] h-[3.8rem] max-md:w-[11.03787rem] max-md:h-[12.44267rem] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10 object-contain cursor-pointer',
          isControl ? 'hidden' : 'block'
        )}
        height={120}
        width={120}
        onClick={handlePlayVideo}
      />
    </div>
  );
}

export default VideoItem;
