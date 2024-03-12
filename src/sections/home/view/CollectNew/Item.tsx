'use client';

import React, { useState } from 'react';
import { ArrowTopRight } from '@/app/icons';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyVND } from '@/ultils/format-price';
import { cn } from '@/lib/utils';
import useSWR from 'swr';
import { fetchDataRest } from '@/lib/fetch-data-rest';

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

  const bodyItemColorCode = {
    url: `custom/v1/code-color-products-by-slug/${dataCollect?.slug?.trim()}`,
    method:'get'
  }
  
  const {data: listColor} = useSWR(
    bodyItemColorCode.url,
    () => {
      if (dataCollect?.variations) {
        return fetchDataRest('GET', bodyItemColorCode.url).then((res: any) => {
          return res; // Return the data to update the SWR cache
        });
      }
      return null;
    },{
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false
    }
  );
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
          <div className="p-[2.5rem] md:p-[1rem] rounded-[4.26667rem] md:rounded-[1rem] bg-[#FFF] box-slide">
            <span className="text-[3.36rem] md:text-base line-clamp-2 mb-[0.25rem] text-[#454545] font-extrabold md:h-[3rem] h-[10rem]">
              {dataCollect?.name}
            </span>
            <div className="flex max-md:flex-row-reverse justify-between items-center mt-[1.07rem] md:mt-[0.25rem] mb-[1.6rem] md:mb-[0.75rem]">
              <div className="flex">

                    {
                      dataCollect?.variations && listColor?.length > 0 &&
                      listColor.map(
                        (color: any, index: number) =>{
                            if(index <= 2){
                              const colorSlug = color.slug;
                              const itemActive = dataCollect.variations?.find((variable:any)=>variable.attributes.attribute_pa_color === colorSlug)
                              return (
                                <button
                                  type="button"
                                  onClick={() => {
                                    
                                    return handleChangeInfoProduct({image: itemActive?.image, price: itemActive?.display_price || 0,
                                      regular_price: itemActive?.display_regular_price || 0,})
                                  }}
                                  key={index}
                                  style={{
                                    background: color.value[0],
                                  }}
                                  className={cn(
                                    'h-[3.2rem] md:h-[1.5rem] w-[3.2rem] md:w-[1.5rem] rounded-full mr-[1rem] md:mr-[0.31rem]',
                                  )}
                                />
                              )
                            }
                        }
                          
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
