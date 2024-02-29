import React from 'react';
import { ArrowTopRightActive } from '@/app/icons';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyVND } from '@/ultils/format-price';

interface IProps {
  itemProduct?: any;
}
function ItemMobile(props: IProps) {
  const { itemProduct } = props;


  return (
    <Link href={`/san-pham/${itemProduct?.slug}`}>
      <div className="item-product-mobile relative max-md:h-[59.5rem] max-md:w-[45.2rem] rounded-[3.2rem]">
        <div className="overflow-hidden rounded-[1rem] w-full ">
          <Image
            width={200}
            height={200}
            className=" object-cover h-[40rem] w-full rounded-3xl"
            src={
              itemProduct?.featuredImage !== false
                ? itemProduct?.featuredImage
                : '/img/no_image.jpg'
            }
            alt=""
          />
        </div>
        <div className="absolute z-99 bottom-[0rem] w-full md:h-[8.5rem] box-slide">
          {/* <div className="ml-[2.13rem] bg-[#CAF2F1] border-[#C5C5C5] border-[0.2px] rounded-[2.5rem] items-center mb-[1.62rem] flex justify-center w-fit"> */}
          {/*  {itemProduct?.categories && ( */}
          {/*    <p className="text-[2.66667rem] text-[#454545] font-bold py-[0.2rem] leading-normal px-[1.6rem] text-center items-center"> */}
          {/*      {itemProduct?.categories[0]} */}
          {/*    </p> */}
          {/*  )} */}
          {/* </div> */}
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
                  {itemProduct?.variations &&
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
                    )}
                  <div
                    style={{ background: '#A9A9A9' }}
                    className="h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem] flex justify-center items-center text-[2.13333rem] leading-[2.56rem] font-bold not-italic "
                  >
                    +{itemProduct?.variations?.length ?? 4 - 4}
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
