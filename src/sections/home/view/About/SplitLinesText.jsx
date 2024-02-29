'use client';

import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef, useState } from 'react';
import ClipPathText from './ClipPathText';

export default function SplitLinesText({ text }) {
  const textPrimary = useRef(null);
  const [lines, setLines] = useState([]);
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let ctx = gsap.context(() => {
      const split = new SplitText(textPrimary.current, { type: 'lines' });
      const arr = [];
      split?.lines?.forEach((e) => {
        arr.push(e?.textContent);
      });
      setLines(arr);
    }, textPrimary);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="content" className="relative overflow-hidden about-content">
        <div ref={textPrimary} className="absolute top-0 -translate-y-full">
          {text}
        </div>
      </div>
      {lines?.map((e, index) => (
        <ClipPathText
          key={index}
          text={e}
          index={index}
          process={100}
          startTrigger={100}
        />
      ))}
    </>
  );
}
