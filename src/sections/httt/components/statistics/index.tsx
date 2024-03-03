'use client';

import ICStart from '@/components/Icons/ICStart';
import map from 'lodash.map';
import React, { useEffect, useRef, useState } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const dataMock = [
  {
    startQuantity: 0,
    endQuantity: 30,
    title: 'Em nhỏ',
    des: 'Được tài trợ chi phí phẫu thuật mắt 1',
  },
  {
    startQuantity: 0,
    endQuantity: 500000,
    title: 'TÚI TỬ TẾ',
    des: 'Được phát tặng để tìm người thân thất lạc',
  },
  {
    startQuantity: 0,
    endQuantity: 1046,
    title: 'LƯỢT CHIA SẺ',
    des: 'Các câu chuyện của Hành trình Tử tế',
  },
  {
    startQuantity: 0,
    endQuantity: 7,
    title: 'TỈNH THÀNH',
    des: 'Hành trình Tử tế có mặt',
  },
];
function Statistics() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isStartCount, setIsStartCount] = useState(false);

  const targetElementRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementTop = targetElementRef?.current?.getBoundingClientRect().top;
      if (scrollTop >= elementTop) {
        setIsStartCount(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-[87.5rem] mx-auto mt-[135rem] md:mt-[6.44rem]">
      <div className="flex" data-aos="fade-up" data-aos-duration="1500">
        <ICStart fill="#777b7f" />
        <p className="max-md:text-[2.88rem] text-[#777b7f] font-bold text-[0.875rem] uppercase ml-[0.2rem]">
          LÁ LÀNH ĐÙM LÁ RÁCH
        </p>
      </div>
      <div
        className="py-[3.2rem] md:py-[0.75rem]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="text-[4.32rem] md:text-[1.75rem] text-[#414141] font-semibold leading-[7.2rem] md:leading-[2.625rem] md:max-w-[45.4375rem]">
          Chuyến hành trình của{' '}
          <span className="text-[#7BD7D6]">“Hành trình tử tế by Anna”</span> sẽ
          luôn tiếp tục tiến về phía trước. Chúng mình rất mong sự{' '}
          <span className="text-[#7BD7D6]">chung tay giúp sức</span> của tất cả
          các bạn
        </p>
      </div>
      <div
        ref={targetElementRef}
        className="flex justify-between flex-wrap mt-[2.75rem]"
      >
        {map(dataMock, (value, index) => (
          <div
            className="md:text-center max-sm:w-1/2 max-sm:pr-[1rem] max-sm:pt-[10.13rem]"
            key={index}
          >
            <CountUp
              end={value?.endQuantity}
              start={value?.startQuantity}
              // onPauseResume={({ reset, start, update }) =>
              //   isStartCount ? reset() : reset()
              // }
              // onReset={({ pauseResume, start, update }) =>
              //   isStartCount ? start() : pauseResume()
              // }
              duration={3}
              className="text-[8.64rem] md:text-[6.25rem] text-[#7BD7D6] font-extrabold"
            />
            <div className="block md:hidden w-[15.2rem] h-[0.26667rem] bg-[#7BD7D6] my-[3.47rem]" />
            <h4 className="text-[3.6rem] md:text-[1.6875rem] text-[#414141] font-bold uppercase leading-[5.6rem] md:leading-[1.6875rem]">
              {value?.title}
            </h4>
            <div className="flex justify-center mt-[0.5rem]">
              <p className="max-md:text-[3.36rem] text-[1.125rem] font-medium md:max-w-[13rem] max-md:leading-[5.6rem] leading-[1.6875rem]">
                {value?.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
