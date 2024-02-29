'use client';

import React, { useState } from 'react';
import { ArrowTopRight } from '@/app/icons';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyVND } from '@/ultils/format-price';
import { cn } from '@/lib/utils';

interface IPropsItemCollect {
  dataCollect: any;
  key: number;
  category: string;
}
function ItemCollect({ dataCollect, key, category }: IPropsItemCollect) {
  const [changeInfo, setChangeInfo] = useState({
    img: null,
    price: '',
    regular_price: '',
  });

  let widthScreen;
  if (typeof window !== 'undefined') {
    // Client-side-only code
    widthScreen = window.innerWidth;
  }
  const handleChangeInfoProduct = (item: any) => {
    setChangeInfo({
      img: item?.image?.url,
      price: item?.display_price || 0,
      regular_price: item?.display_regular_price || 0,
    });
  };

  return (
    <Link href={`/san-pham/${dataCollect?.slug}`}>
      <div
        className={cn(
          'item-product-home !mr-0 cursor-pointer relative rounded-[4.26667rem] md:rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,_0,_0,_0.05)]',
          widthScreen && widthScreen < 767 ? '' : 'item-product-home-hover'
        )}
      >
        <div className="h-[40rem] md:h-[20.375rem] w-full overflow-hidden rounded-[4.26667rem] md:rounded-2xl">
          <Link href={`/san-pham/${dataCollect?.slug}`}>
            <Image
              alt=""
              height={326}
              width={326}
              className="image-item-slide ease-out duration-300 h-full w-full object-fill"
              src={
                changeInfo?.img
                  ? changeInfo?.img
                  : dataCollect?.featuredImage
                  ? dataCollect?.featuredImage
                  : '/img/no_image.jpg'
              }
            />
          </Link>
        </div>
        <div className="relative z-2 -mt-[9rem] md:-mt-[3.5rem] z-9 left-0 right-0 w-full box-slide ">
          {/*<div className="flex ml-[1.25rem] md:ml-[1rem] mb-[3rem] md:mb-[0.9rem]">*/}
          {/*  <div className="p-8 md:p-2 bg-[#CAF2F1] h-[5.33333rem] md:h-[1.25rem] border-[#C5C5C5] border-[0.5px] rounded-[2.5rem] items-center flex justify-center">*/}
          {/*    <p className="text-[2.666rem] md:text-[0.75rem] text-[#454545] font-bold text-center">*/}
          {/*      {category === 'gong-kinh'*/}
          {/*        ? 'Gọng kính'*/}
          {/*        : category === 'trong-kinh'*/}
          {/*        ? 'Tròng kính'*/}
          {/*        : category === 'kinh-ram'*/}
          {/*        ? 'Kính râm'*/}
          {/*        : 'Kính áp tròng'}*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="p-8 md:p-2 bg-[#F58F5D] h-[5.33333rem] md:h-[1.25rem] hidden md:flex items-center justify-center border-[#C5C5C5] border-[0.5px] rounded-[2.5rem] ml-[0.25rem]">*/}
          {/*    <p className="text-[2.666rem] md:text-[0.75rem] text-white font-bold text-center mb-0">*/}
          {/*      Siêu Sale 10.10*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="p-[2.5rem] md:p-[1rem] rounded-[4.26667rem] md:rounded-[1rem] bg-[#FFF] box-slide">
            <span className="text-[3.36rem] md:text-base line-clamp-1 mb-[0.25rem] text-[#454545] font-extrabold">
              {dataCollect?.name}
            </span>
            <div className="flex max-md:flex-row-reverse justify-between items-center mt-[1.07rem] md:mt-[0.25rem] mb-[1.6rem] md:mb-[0.75rem]">
              <div className="flex">
                {dataCollect?.variations?.map(
                  (item: any, index: number) =>
                    index <= 3 && (
                      <div
                        key={index}
                        style={{ background: item.attributes.attribute_color }}
                        onClick={() => handleChangeInfoProduct(item)}
                        className="h-[3.2rem] md:h-[1.5rem] w-[3.2rem] md:w-[1.5rem] rounded-full mr-[1rem] md:mr-[0.31rem]"
                      />
                    )
                )}
                {dataCollect?.variations?.length > 4 ? (
                  <div
                    style={{ background: '#A9A9A9' }}
                    className="h-[3.2rem] md:h-[1.5rem] p-[0.25rem] text-white w-[3.2rem] md:w-[1.5rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[2.66667rem] md:text-[0.625rem] leading-[0.75rem] font-bold not-italic "
                  >
                    +{dataCollect?.variations?.length - 4}
                  </div>
                ) : (
                  <div className="h-[3.2rem] md:h-[1.5rem] " />
                )}
                {/* <div className="md:flex justify-between lg:mb-[0.5rem]">
                <div className="text-[2.66667rem] md:text-[0.875rem] text-[#6A6A6A] font-bold md:font-extrabold">
                  Tiết kiệm được
                  {dataCollect?.salePrice && (
                    <span className="text-[#F58F5D] pl-2">
                      {formatCurrencyVND(
                        dataCollect?.salePrice.toString() || 0
                      )}
                    </span>
                  )}
                </div>
              </div> */}
              </div>
              <div className="line-through text-[2.4rem] md:text-[0.875rem] max-sm:font-bold">
                {changeInfo?.regular_price !== ''
                  ? formatCurrencyVND(changeInfo?.regular_price.toString())
                  : formatCurrencyVND(
                      dataCollect?.regular_price.toString() || '0'
                    )}
              </div>
            </div>
            <Link
              href={`/san-pham/${dataCollect?.slug}`}
              className="max-sm:border border-[#55D5D2] bg-white md:bg-[#55D5D2] price-product-slide flex justify-between items-center px-[3rem] md:px-[1.25rem] py-[1.6rem] md:py-[0.5rem] rounded-[13.33333rem] md:rounded-[3.125rem]"
            >
              <p className="text-[3.36rem] md:text-[1.5rem] font-extrabold text-blueAnna md:text-[#fff] leading-[4.85333rem] md:leading-[1.1375rem]">
                {changeInfo?.price !== ''
                  ? formatCurrencyVND(changeInfo?.price.toString())
                  : formatCurrencyVND(dataCollect?.price.toString() || 0)}
              </p>
              <div className="arrow-product-slide p-[0.5rem] text-[#fff]">
                <ArrowTopRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCollect;
