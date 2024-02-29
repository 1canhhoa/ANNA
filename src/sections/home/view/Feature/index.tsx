'use client';

import ICVectorRight from '@/components/Icons/ICVectorRight';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ProductCartContext } from '@/context-provider';

interface ItemFeature {
  option: {
    title: string;
    description: string;
    link: any;
  }[];
  image: any;
}
interface IpropFeature {
  dataFeature: ItemFeature;
}
function Feature({ dataFeature }: IpropFeature) {
  const { isShowPopupChooseGlasses } = useContext(ProductCartContext);
  return (
    <div className="flex justify-between pt-[7.5rem] flex-wrap">
      <div className="w-full md:w-1/3 pt-20 hidden md:block">
        <Image
          src={dataFeature?.image?.url}
          alt=""
          width={635}
          height={755}
          className="w-full pr-5 md:pr-[4.688rem] lg:h-[40.0625rem] object-left object-contain"
        />
      </div>
      <div className="w-full md:w-2/3 max-sm:p-[3.2rem] md:pr-[6.25rem] max-sm:mb-[6.4rem]">
        <div className="max-md:w-full md:h-fit md:px-[2rem] py-2.5 md:bg-[#EEFBFB] rounded-tl-[1.9rem] rounded-tr-[1.9rem] rounded-br-[1.9rem] justify-center items-center gap-2.5 inline-flex">
          <div className="max-md:w-full max-md:pb-10 max-sm:border-b border-[#55D5D2] text-[#313131] md:text-blueAnna text-[3.3333rem] md:text-[2.625rem] font-black uppercase">
            Chọn kính phù hợp với bạn
          </div>
        </div>
        {dataFeature?.option?.map(
          (
            value: { title: string; description: string; link: any },
            index: number
          ) => (
            <div key={index}>
              {index === 0 ? (
                <div
                  role="button"
                  onClick={() => isShowPopupChooseGlasses.onTrue()}
                  key={index}
                  className={`feature-item max-sm:border-b border-t-0 md:border-t-2 border-[#55D5D2] max-sm:pr-[5.33rem] cursor-pointer pt-[4.27rem] md:pt-[2.75rem] pb-[4.27rem] md:pb-[2.5rem] flex items-start md:items-center w-full justify-between md:max-w-[63rem] relative before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#f58f5d] hover:before:w-full before:transition-all before:duration-500 before:z-10 before:-translate-y-full ${
                    index > 0 ? '' : 'md:border-[#fff]'
                  }`}
                >
                  <div>
                    <div className="feature-content text-[#454545] text-[4.32rem] md:text-[2.2rem] font-extrabold md:font-extrabold uppercase">
                      {value?.title}
                    </div>
                    <div className="feature-content w-full md:w-[26.5rem] text-[#454545] text-[3.333rem] md:font-extrabold md:text-[1.125rem] leading-[5.6rem] md:leading-[1.6875rem] font-bold md:font-extrabold">
                      {value?.description}
                    </div>
                  </div>
                  <ICVectorRight />
                </div>
              ) : (
                <Link
                  href={`/blog/${value?.link?.post_name}`}
                  target="_blank"
                  key={index}
                  className={`feature-item max-sm:border-b border-t-0 md:border-t-2 border-[#55D5D2] max-sm:pr-[5.33rem] cursor-pointer pt-[4.27rem] md:pt-[2.75rem] pb-[4.27rem] md:pb-[2.5rem] flex items-start md:items-center w-full justify-between md:max-w-[63rem] relative before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#f58f5d] hover:before:w-full before:transition-all before:duration-500 before:z-10 before:-translate-y-full ${
                    index > 0 ? '' : 'md:border-[#fff]'
                  }`}
                >
                  <div>
                    <div className="feature-content text-[#454545] text-[4.32rem] md:text-[2.2rem] font-extrabold md:font-extrabold uppercase">
                      {value?.title}
                    </div>
                    <div className="feature-content w-full md:w-[26.5rem] text-[#454545] text-[3.333rem] md:font-extrabold md:text-[1.125rem] leading-[5.6rem] md:leading-[1.6875rem] font-bold md:font-extrabold">
                      {value?.description}
                    </div>
                  </div>
                  <ICVectorRight />
                </Link>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Feature;
