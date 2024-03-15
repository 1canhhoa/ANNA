"use client"

import React, { useEffect, useState } from 'react';
import { ArrowTopRightActive } from '@/app/icons';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyVND } from '@/ultils/format-price';
import useSWR from 'swr';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { cn } from '@/lib/utils';

interface IProps {
  itemProduct?: any;
}
interface IImageItem {
  variation_id?: number;
  image?: string;
  
}
function ItemMobile(props: IProps) {
  const { itemProduct } = props;
  const [imageItem, setImageItem] = useState<IImageItem>({
    variation_id: undefined,
    image: '',
  });
  const handleChangeColor = (item: any): void => {
    const tmp = {
      variation_id: item?.variation_id,
      image: item?.image?.full_src,
    };
    setImageItem(tmp);
  };

  const bodyItemColorCode = {
    url: `custom/v1/code-color-products-by-slug/${itemProduct?.slug?.trim()}`,
    method:'get'
  }

  const {data: listColor} = useSWR(
    bodyItemColorCode.url,
    () => {
      if (itemProduct?.variations) {
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

  useEffect(() => {
    setImageItem({ ...imageItem, image: itemProduct?.featuredImage });
  }, [itemProduct]);

  console.log("itemMB", itemProduct)
  return (
    <Link href={`/san-pham/${itemProduct?.slug}`} className='relative'>

        {
          !!itemProduct?.stock_quantity || itemProduct?.stock_quantity < 1 && (
            <div className='absolute top-[15rem] left-1/2 text-[2.5rem] bg-black text-white z-10 p-[1.5rem] -translate-x-1/2 rounded-full w-[15rem] h-[15rem] flex items-center justify-center font-semibold'>Hết hàng</div>
          )
        }
      <div className="item-product-mobile relative max-md:h-[59.5rem] max-md:w-[45.2rem] rounded-[3.2rem]">
        <div className="overflow-hidden rounded-[1rem] w-full ">
          <Image
            width={200}
            height={200}
            className=" object-cover h-[40rem] w-full rounded-3xl"
            src={
              imageItem?.image
                ? imageItem?.image.length > 0
                  ? imageItem?.image
                  : '/img/no_image.jpg'
                : '/img/no_image.jpg'
            }
            alt=""
          />
        </div>
        <div className="absolute z-99 bottom-[0rem] w-full md:h-[8.5rem] box-slide">
          <div className="p-[2.13rem] rounded-[3.2rem] bg-[#FFF] box-slide max-md:h-[24rem] max-md:flex max-md:flex-col max-md:justify-between">
            <span className="text-[1rem] text-[#454545] font-extrabold leading-[1.2rem] max-md:text-[3.36rem] max-md:leading-[4.704rem] line-clamp-1">
              {itemProduct?.name}
            </span>
            {/* list color */}
            <div className="flex justify-between mb-[1.6rem] mt-[1.07rem]">
              {itemProduct?.regular_price && (
                <span className="line-through text-[2.66667rem] font-bold leading-[3.73333rem] text-[#6A6A6A]">
                  {formatCurrencyVND(itemProduct?.regular_price)}
                </span>
              )}

              {itemProduct?.variations?.length > 0 && (
                <div className="flex">
                {itemProduct?.variations && listColor?.length > 0 &&
                  listColor.map(
                    (color: any, index: number) =>{
                        if(index <= 2){
                          const colorSlug = color.slug;
                          const itemActive = itemProduct.variations?.find((variable:any)=>variable.attributes.attribute_pa_color === colorSlug)
                          return (
                            <button
                              type="button"
                              onClick={() => {
                                
                                return handleChangeColor({variation_id: itemActive?.variation_id,image: itemActive?.image})
                              }}
                              key={index}
                              style={{
                                background: color.value[0],
                              }}
                              className={cn(
                                'h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem]',
                                itemActive?.variation_id === imageItem.variation_id
                                  ? 'border-[2px] border-[#55D5D2]'
                                  : ''
                              )}
                            />
                          )
                        }
                    }
                      
                  )}

                  {/* {itemProduct?.variations &&
                    itemProduct?.variations.map(
                      (item: any, index: number) =>
                        index <= 3 && (
                          <div
                            key={index}
                            style={{
                              background: item.attributes.attribute_color,
                            }}
                            className="h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem]"
                          />
                        )
                    )} */}
                  <div
                    style={{ background: '#A9A9A9' }}
                    className="h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem] flex justify-center items-center text-[2.13333rem] leading-[2.56rem] font-bold not-italic "
                  >
                    +{listColor?.length ?? 3 - 3}
                  </div>
                </div>
              )}
            </div>
            {/* button */}
            <div className="price-product-slide flex justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] border-[1px] border-[#55D5D2]">
              <p className="text-[3.36rem] font-extrabold leading-[4.368rem] h-[4.85333rem] text-blueAnna">
                {itemProduct?.price
                  ? formatCurrencyVND(itemProduct?.price)
                  : ' '}
              </p>
              <div className="arrow-peoduct-slide p-[0.5rem]">
                <ArrowTopRightActive />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemMobile;
