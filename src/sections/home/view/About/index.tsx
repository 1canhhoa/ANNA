'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import ICLocation3 from '@/components/Icons/ICLocation3';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SliceAbout from '@/sections/home/view/About/Slide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ICSvgFooter from '@/components/Icons/ICSvgFooter';

interface AboutHomeType {
  title: string;
  description: string;
  info: { image: string; title: string; location: string }[];
}
interface IPropAbout {
  dataAbout: AboutHomeType;
}
gsap.registerPlugin(ScrollTrigger);

function AboutHome({ dataAbout }: IPropAbout) {
  const refs = useRef([]);
  const box = useRef(null);
  const container = useRef(null);

  const isShowMascotGirl = useBoolean(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: refs.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
        },
        y: '-30%',
      });
      gsap.to('#box_q12', {
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
        },
        top: '43%',
        translateY: '-50%',
      });
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
      });
      gsap.to(box.current, {
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
          pin: true,
          pinSpacing: true,
        },
      });
    }, box);
    return () => {
      ctx.revert();
    };
  }, []);

  const splitWords = (phrase: string) => {
    const content: any = [];
    phrase?.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      content.push(<p key={word + '_' + i}>{letters}</p>);
    });
    return content;
  };

  const splitLetters = (word: string) => {
    const letters: any = [];
    // @ts-ignore
    word.split('').forEach((letter: any, i: string) => {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
            // @ts-ignore
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div
      ref={box}
      className="rounded-t-[2.25rem] -mt-[2rem] relative h-[214rem] md:h-fit bg-blueAnna overflow-hidden"
    >
      {/* <Image */}
      {/*  src="/img/home/about_bg.jpg" */}
      {/*  width={1600} */}
      {/*  height={1000} */}
      {/*  alt="background" */}
      {/*  className="w-full z-[1] object-cover md:object-fill top-0 left-0 rounded-t-[2.25rem] h-full absolute" */}
      {/* /> */}
      <div className="max-md:hidden absolute right-0 bottom-0 translate-x-[3rem]">
        <ICSvgFooter height="21.1875rem" width="30rem" />
      </div>
      <div className="relative z-10 lg:!px-0 h-fit container-homepage max-sm:px-[3.2rem]">
        <div
          role="button"
          onClick={() => isShowMascotGirl.onToggle()}
          className="absolute bottom-0 right-[13.06rem] h-[13.375rem] w-[9rem] overflow-hidden max-md:hidden"
        >
          <Image
            src="/img/home/mascot-girl.png"
            width={1600}
            height={1000}
            alt="background"
            className={cn(
              'w-full h-full object-contain transition-all duration-1000 delay-300',
              isShowMascotGirl.value ? '' : 'translate-y-[5.95rem]'
            )}
          />
        </div>
        <div className="py-[6.67rem] md:py-24 flex md:pb-[9rem] justify-between flex-wrap h-full">
          <div
            ref={container}
            className="w-full lg:w-[44.5rem] px-4 md:px-[2rem] lg:px-0 pt-10 about_paragraph"
          >
            <h4 className="text-white text-[3rem] max-md:text-[7.65rem] font-black uppercase leading-[1.2]">
              {dataAbout?.title}
            </h4>
            <div className="about-card-content max-sm:pt-[2.13rem]">
              <div className="about-content hidden md:flex max-sm:leading-[8.32rem]">
                {splitWords(dataAbout?.description)}
              </div>
            </div>
          </div>

          <div
            id="box_q12"
            className="hidden md:block w-full lg:w-[39rem] px-4 lg:pb-[7rem] lg:px-0 absolute top-[8.5rem] right-0"
          >
            <div className=" md:relative w-full h-full">
              <AspectRatio ratio={5 / 4}>
                <SliceAbout dataInfo={dataAbout?.info} />
                <Link
                  href="/he-thong-cua-hang"
                  className="search-about-slide flex justify-between items-center pl-[10rem] md:pl-[2.75rem] pr-1 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-[26rem] md:rounded-[3.125rem] border-[1px] border-[#55D5D2]"
                >
                  <div>
                    <p className="text-[4.48179rem] md:text-[1rem] font-extrabold text-white">
                      TÌM KIẾM CỬA HÀNG GẦN BẠN
                    </p>
                  </div>
                  <div className="arrow-about-slide p-[0.5rem] bg-white rounded-full justify-start items-center gap-2.5 inline-flex">
                    <ICArrowTopRightActive
                      width={30}
                      height={30}
                      stroke="#F58F5D"
                      fill="#F58F5D"
                    />
                  </div>
                </Link>
              </AspectRatio>
            </div>
          </div>

          <div className="w-full block md:hidden pt-12 relative about-mobile">
            <div className="absolute w-full top-[-10rem] pt-[3.2rem] pb-[6.4rem] search-about-slide flex justify-between items-center pl-16 md:pl-[2.75rem] pr-16 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-t-[4rem] border-[1px] border-[#55D5D2]">
              <p className="text-[3.84rem] md:text-[1.5rem] font-extrabold text-white flex items-center">
                <div className="mr-12 p-[0.5rem] bg-white rounded-full">
                  {/* <ICLocation stroke="#F58F5D" /> */}
                  <ICLocation3 height={26} width={26} />
                </div>
                <span>Tìm cửa hàng</span>
              </p>
              <div className="rotate-45 icon-next-about">
                <ICArrowTopRightActive
                  width={30}
                  height={30}
                  stroke="#fff"
                  fill="#fff"
                />
              </div>
            </div>
            <SliceAbout dataInfo={dataAbout?.info} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
