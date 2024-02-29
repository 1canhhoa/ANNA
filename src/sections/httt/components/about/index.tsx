import ICHeart from '@/components/Icons/ICHeart';
import ICQueto from '@/components/Icons/ICQueto';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import React from 'react';
import './style.css';
import map from 'lodash.map';

const listImg = [
  'img1.png',
  'img1.png',
  'img2.jpg',
  'img2.jpg',
  'img3.jpg',
  'img3.jpg',
  'img4.jpg',
  'img4.jpg',
  'img5.jpg',
  'img5.jpg',
  'img6.jpg',
  'img6.jpg',
  'img7.jpg',
  'img7.jpg',
  'img8.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
];
const listImgMobile = [
  'img1.png',
  'img1.png',
  'img2.jpg',
  'img2.jpg',
  'img3.jpg',
  'img3.jpg',
  'img4.jpg',
  'img4.jpg',
  'img5.jpg',
];
function About() {
  return (
    <div className="relative pb-[5rem] z-[1]">
      <AspectRatio ratio={3 / 2}>
        <Image
          className="w-full h-full object-cover z-[5] absolute top-0 left-0"
          src="/img/httt/bg-action.png"
          alt="background hanh trinh tu te"
          width={1600}
          height={900}
        />
      </AspectRatio>
      <div className="absolute z-[5] top-[9.36rem] left-0 w-full">
        <div className="relative  m-auto text-center w-fit">
          <h4 className="text-[4.8rem] md:text-[2.5rem] font-semibold text-[#444] max-md:px-[8rem]">
            Cảm ơn các bạn đã bước cùng
            <span className="max-md:hidden">chúng mình trên</span>
          </h4>

          <div className="flex justify-center items-center">
            <span className="md:hidden flex text-[4.8rem] md:text-[2.5rem] font-semibold text-[#444] max-md:mr-[2rem]">
              chúng mình trên
            </span>
            <h3 className="text-[#7BD7D6] font-bold text-[4.8rem] md:text-[2.875rem]">
              Hành trình tử tế
            </h3>
          </div>
          <div className="absolute right-0 md:right-[-95px] top-[-17px] md:top-[-80px] icon-heart">
            <ICHeart />
          </div>
        </div>
        <div className="mt-[3rem] relative">
          <AspectRatio ratio={2 / 1}>
            <Image
              className="w-full h-[388px] md:h-full object-cover z-[5] absolute top-0 left-0"
              src="/img/httt/bg-about.jpg"
              alt="background hanh trinh tu te"
              width={1600}
              height={900}
            />
          </AspectRatio>
          <div className="hidden md:flex absolute z-10 w-full top-0 flex-wrap h-full">
            {map(listImg, (value) => (
              <div className="w-1/3 md:w-2/12 img-item border-2 border-[#fff]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    className="w-full h-full object-cover transition duration-600 ease-in-out rotate-0 opacity-0 hover:opacity-1 "
                    src={`/img/httt/${value}`}
                    alt="bout"
                    width={267}
                    height={178}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
          <div className="block md:hidden absolute z-10 w-full top-0 flex flex-wrap h-full">
            {map(listImgMobile, (value) => (
              <div className="w-1/3 md:w-2/12 img-item border-2 border-[#fff]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    className="w-full h-full object-cover transition duration-600 ease-in-out rotate-0 opacity-0 hover:opacity-1 "
                    src={`/img/httt/${value}`}
                    alt="bout"
                    width={267}
                    height={178}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
