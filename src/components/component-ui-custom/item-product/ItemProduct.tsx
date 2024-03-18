import React, { useEffect, useState } from 'react';
import { ArrowTopRight } from '@/app/icons';
import Image from 'next/image';
import { IItemProduct } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useSWR from 'swr';
import { baseUrl, fetchDataRest } from '@/lib/fetch-data-rest';


interface IProps {
  item?: any;
  heightImage?: number;
  heightImageMobile?: number;
  keySlide?: string;
}

interface IImageItem {
  variation_id?: number;
  image?: string;
  
}

function ItemProduct(props: IProps) {
  const { item, heightImage, heightImageMobile, keySlide } = props;
  const [heightSlider, setHeightSlider] = useState<number>(20.375);
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
    url: `custom/v1/code-color-products-by-slug/${item?.slug?.trim()}`,
    method:'get'
  }

  const {data: listColor} = useSWR(
    bodyItemColorCode.url,
    () => {
      if (item?.variations) {
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
    if (window.innerWidth < 767) {
      setHeightSlider(heightImageMobile ?? 44);
    } else setHeightSlider(heightImage ?? 20.56588);
  }, []);

  useEffect(() => {
    setImageItem({ ...imageItem, image: item?.featuredImage });
  }, [item]);

  console.log("item", item)

  return (
    <div className="item-slider-product rounded-[3.2rem] md:rounded-2xl overflow-hidden  cursor-pointer relative h-[25.8rem] max-md:h-fit max-md:mb-0">
      <Link
        href={`/san-pham/${item?.slug?.trim()}`}
        style={{
          height: `${heightSlider}rem`,
        }}
        className="w-full overflow-hidden relative"
      >
        {
          !!item?.stock_quantity || item?.stock_quantity < 1 && (
            <div className='absolute top-1/2 left-1/2 text-[0.75rem] bg-black text-white z-10 p-[0.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full w-[5rem] h-[5rem] flex items-center justify-center font-semibold'>Hết hàng</div>
          )
        }
        <Image
          width={326}
          height={326}
          className={cn(
            'max-md:h-[44.26667rem] image-item-slide rounded-[3.2rem] md:rounded-2xl object-cover bg-slate-500 max-md:rounded-[1.5rem] transition-all duration-300 ease-linear',
            heightImage ? 'h-[16.56588rem]' : 'h-[20.56588rem]'
          )}
          src={
            imageItem?.image
              ? imageItem?.image.length > 0
                ? imageItem?.image
                : '/img/no_image.jpg'
              : '/img/no_image.jpg'
          }
          alt=""
        />
      </Link>
      <div className=" z-2  -mt-[4.1rem] z-9 left-0 bottom-0 w-full box-slide h-[9rem] max-md:h-[28rem] max-md:-mt-[8.1rem]">
        <div className="relative p-[1rem] h-full rounded-2xl bg-[#FFF]  box-slide max-md:p-[2.13rem] max-md:rounded-[3.2rem]">
          <Link
            href={`/san-pham/${item?.slug?.trim()}`}
            className={`${
              keySlide !== 'flash-sale'
                ? 'h-[1.2rem] max-md:h-[5.22667rem]'
                : ''
            } mb-[0.5rem]`}
          >
            <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-extrabold text-truncate line-clamp-2 max-md:line-clamp-1 leading-[1.2rem] max-md:text-[3.73333rem] max-md:leading-[5.22667rem]">
              {item?.name}
            </span>
          </Link>
          {keySlide === 'flash-sale' ? (
            <div className="md:flex justify-between lg:mb-[0.5rem]">
              {item?.price &&
                item?.regular_price &&
                item?.regular_price - item?.price > 0 && (
                  <div className="text-[2.66667rem] md:text-[0.875rem] text-[#6A6A6A] font-bold md:font-extrabold">
                    Tiết kiệm được
                    {item?.price && item?.price !== 0 && (
                      <span className="text-[#F58F5D] pl-2">
                        {formatCurrencyVND(
                          (item?.regular_price - item?.price).toString()
                        )}
                      </span>
                    )}
                  </div>
                )}

              {item?.regular_price && item?.regular_price !== 0 && (
                <span className="line-through max-md:text-[2.4rem] font-bold">
                  {formatCurrencyVND(item?.regular_price.toString())}
                </span>
              )}
            </div>
          ) : (
            <div className="flex justify-between mt-[0.25rem] mb-[0.75rem] max-md:flex-row-reverse">
              <div className="flex flex-start h-[1rem] max-md:h-[3.2rem]">
                {item?.variations && listColor?.length > 0 &&
                  listColor.map(
                    (color: any, index: number) =>{
                        if(index <= 2){
                          const colorSlug = color.slug;
                          const itemActive = item.variations?.find((variable:any)=>variable.attributes.attribute_pa_color === colorSlug)
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
                                'h-[1rem] w-[1rem] rounded-full mr-[0.31rem] max-md:h-[3.2rem] max-md:w-[3.2rem]',
                                itemActive?.variation_id === imageItem.variation_id
                                  ? 'border-[2px] border-[#55D5D2]'
                                  : ''
                              )}
                            />
                          )
                        }
                    }
                      
                  )}

                {item?.variations && item?.variations.length > 4 && (
                  <div
                    style={{ background: '#A9A9A9' }}
                    className="h-[1rem] w-[1rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[0.625rem] leading-[0.75rem] font-bold not-italic max-md:h-[3.2rem] max-md:w-[3.2rem] max-md:text-[2.13333rem] max-md:leading-[2.56rem]"
                  >
                    +{listColor?.length ?? 3 - 3}
                  </div>
                )}
              </div>

              {item?.salePrice && item?.salePrice !== 0 && (
                <span className="line-through max-md:text-[2.4rem] font-bold">
                  {formatCurrencyVND(item?.salePrice.toString())}
                </span>
              )}
            </div>
          )}
          {/* button show in PC */}
          <Link
            href={`/san-pham/${item?.slug?.trim()}`}
            className="absolute bottom-[1.17rem] left-[1.17rem] w-[calc(100%-1.07rem*2)] max-md:hidden bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem]"
          >
            <p className="text-[1.5rem] font-extrabold text-[#fff] not-italic leading-[1.8rem] h-[1.8rem]">
              {item?.price ? formatCurrencyVND(item?.price.toString()) : ' '}
            </p>
            <div className="arrow-peoduct-slide pl-[0.5rem] text-[#fff]">
              <ArrowTopRight />
            </div>
          </Link>

          {/* button show in mobile */}

          <Link
            href={`/san-pham/${item?.slug?.trim()}`}
            className={`hidden absolute bottom-[2.67rem] left-[2.13rem] w-[calc(100%-2.13rem*2)] max-md:flex price-product-slide justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] mt-[2rem] ${
              keySlide === 'flash-sale'
                ? 'bg-[#55D5D2]'
                : 'border-[1px] border-[#55D5D2]'
            }`}
          >
            <p
              className={`text-[3.36rem] font-extrabold leading-[4.85333rem] ${
                keySlide === 'flash-sale' ? 'text-[#fff]' : 'text-blueAnna'
              }`}
            >
              {item?.price && formatCurrencyVND(item?.price.toString())}
            </p>
            <div
              className={`arrow-peoduct-slide p-[0.5rem] ${
                keySlide === 'flash-sale' ? 'text-[#fff]' : 'text-blueAnna'
              }`}
            >
              <ArrowTopRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
