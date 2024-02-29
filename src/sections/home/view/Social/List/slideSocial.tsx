'use client';

import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ItemSocial from '@/sections/home/view/Social/List/Item';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICYoutube from '@/components/Icons/ICYoutube';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ItemV2 from '@/sections/home/view/Social/List/ItemV2';

export default function SlideSocial() {
  const slideRef = useRef() as any;
  const [isScrollingDown, setIsScrollingDown] = useState(1);
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    let currentScroll = 0;
    Draggable.create(slideRef.current, {
      type: 'x',
      inertia: true,
      edgeResistance: 1,
      onDragEnd: function () {
        const xChange = this.getDirection();
        if (xChange === 'left') {
          setIsScrollingDown(1);
        } else {
          setIsScrollingDown(-1);
        }
      },
    });
    slideRef.current.addEventListener('mouseover', () => {
      setIsScrollingDown(0);
    });
    slideRef.current.addEventListener('mouseleave', () => {
      setIsScrollingDown(1);
    });
    gsap.set('.marquee', {
      xPercent: -10,
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > currentScroll) {
        setIsScrollingDown(1);
      } else {
        setIsScrollingDown(-1);
      }
      currentScroll = window.scrollY;
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.marquee_item');

      slides.forEach((item: any) => {
        gsap
          .to(item, {
            xPercent: -350,
            repeat: -1,
            duration: 5,
            ease: 'linear',
          })
          .totalProgress(0.5)
          .timeScale(isScrollingDown);
      });
    }, slideRef);

    return () => ctx.revert();
  }, [isScrollingDown]);

  return (
    <div>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <div
          ref={slideRef}
          className="h-[500px] w-fit flex marquee flex-row flex-auto "
        >
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemSocial
                img="/img/home/facebook.png"
                icon={<ICFacebookFooter width={100} height={100} />}
                social="Facebook"
                infor="@kinhmatanna"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemSocial
                img="/img/home/facebook.png"
                icon={<ICYoutube width={100} height={100} />}
                social="Youtube"
                infor="@kinhmatanna"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemSocial
                img="/img/home/ig.png"
                icon={<ICInstagramFooter width={100} height={100} />}
                social="Instagram1111"
                infor="@kinhmatanna"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemSocial
                img="/img/home/facebook.png"
                icon={<ICFacebookFooter width={100} height={100} />}
                social="Facebook"
                infor="@kinhmatanna"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemSocial
                img="/img/home/facebook.png"
                icon={<ICYoutube width={100} height={100} />}
                social="Youtube"
                infor="@kinhmatanna"
              />
            </div>
          </div>
          <div className="w-[25vw] h-[31.9rem] flex justify-center items-center marquee_item">
            <div className="w-full h-full bg-gray-500 text-black rounded-[1rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
