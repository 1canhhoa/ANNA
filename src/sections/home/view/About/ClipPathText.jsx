'use client';
import { gsap } from 'gsap/dist/gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
export default function ClipPathText({
  text,
  index,
  process = 100,
  startTrigger = 100,
}) {
  const textPrimary = useRef(null);
  const textSecond = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: textPrimary.current,
        start: `+=${(index + 1) * process} ${startTrigger}%`,
        end: `+=${process}`,
        scrub: true,
        stagger: 0.1,
        onUpdate: (self) => {
          setProgress(self.progress.toFixed(3));
        },
      });
    }, textPrimary);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={textPrimary} className="relative about-content">
      {text}
      <div
        ref={textSecond}
        style={{ clipPath: `inset(0 ${progress * -100 + 100}% 0 0)` }}
        className="absolute top-0 left-0 w-full h-full about-content text-white"
      >
        {text}
      </div>
    </div>
  );
}
