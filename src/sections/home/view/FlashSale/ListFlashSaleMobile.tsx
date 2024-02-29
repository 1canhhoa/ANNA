import { ArrowTopRight } from '@/app/icons';
import { IItemProduct } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  item: IItemProduct;
}
function ListFlashSaleMobile({ item }: IProps) {
  return (
    <div className="slide-hover overflow-hidden rounded-[1rem] lg:mr-[2rem] lg:last:mr-0 w-[44.26667rem] max-sm:mr-[2.16rem]">
      <div className="rounded-[3.2rem] md:rounded-2xl overflow-hidden  cursor-pointer relative h-full w-[44.26667rem]">
        <Link
          href={`/san-pham/${item?.slug?.trim()}`}
          className="w-full overflow-hidden "
        >
          <Image
            width={326}
            height={326}
            className="h-[20.56588rem] max-md:h-[44.26667rem] image-item-slide rounded-[3.2rem] md:rounded-2xl object-cover"
            src={
              item?.featuredImage ? item?.featuredImage : '/img/no_image.jpg'
            }
            alt=""
          />
        </Link>
        <div className="relative z-2 -mt-[5.1rem] z-9 left-0 right-0 w-full box-slide max-md:h-[36.5rem] max-md:-mt-[11.1rem]">
          {/*<div className="flex ml-[1rem] mb-[0.9rem]">*/}
          {/*  /!* Show in Mobile *!/*/}
          {/*  <div className="hidden max-md:block bg-[#CAF2F1] rounded-[2.5rem] items-center mb-[0.62rem] flex justify-center w-fit">*/}
          {/*    {item?.categories && (*/}
          {/*      <p className="text-[2.66667rem] text-[#454545] font-bold py-[0.2rem] px-[1.6rem] text-center items-center">*/}
          {/*        {item?.categories ?? 'null'}*/}
          {/*      </p>*/}
          {/*    )}*/}
          {/*  </div>*/}

          {/*  /!* hide in mobile *!/*/}
          {/*  <div className="lg:mb-[0.75rem] bg-[#F58F5D] max-sm:ml-[1.07rem] h-[4.5rem] md:h-[1.25rem] flex items-center justify-center border-[#C5C5C5] border-[1px] rounded-[2.5rem] md:w-[6.375rem] ml-[0.25rem]">*/}
          {/*    <p className="text-[0.75rem] text-white font-bold leading-[0.9rem] text-center mb-0 max-sm:hidden">*/}
          {/*      Siêu Sale 10.10*/}
          {/*    </p>*/}
          {/*    <p className="text-[2.66667rem] text-[#fff] font-bold py-[0.2rem] px-[1.6rem] text-center items-center block md:hidden">*/}
          {/*      Sale*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="relative p-[1rem] rounded-2xl bg-[#FFF] box-slide max-md:p-[2.13rem] max-md:rounded-[3.2rem]">
            <div className="h-[2.4rem] max-md:h-[7.45334rem]">
              <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-extrabold text-truncate line-clamp-2 max-md:line-clamp-1 leading-[1.2rem] max-md:text-[3.36rem] max-md:leading-[4.704rem]">
                {item?.name}
              </span>
            </div>
            <div className="md:flex justify-between lg:mb-[0.5rem]">
              <div className="text-[2.4rem] md:text-[0.875rem] text-[#6A6A6A] font-bold md:font-extrabold">
                Tiết kiệm được
                <span className="text-[#F58F5D] pl-2">
                  {item?.salePrice && item?.salePrice !== 0
                    ? formatCurrencyVND(item?.salePrice.toString())
                    : formatCurrencyVND('0')}
                </span>
              </div>
              <span className="line-through max-md:text-[2.4rem] font-bold">
                {item?.salePrice && item?.salePrice !== 0
                  ? formatCurrencyVND(item?.salePrice.toString())
                  : formatCurrencyVND('0')}
              </span>
            </div>
            {/* button show in PC */}
            <Link href={`/san-pham/${item?.slug?.trim()}`}>
              <div className="max-md:hidden bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                <p className="text-[1.5rem] font-extrabold text-[#fff] not-italic leading-[1.8rem] h-[1.8rem]">
                  {item?.price
                    ? formatCurrencyVND(item?.price.toString() || '0')
                    : ' '}
                </p>
                <div className="arrow-peoduct-slide pl-[0.5rem] text-[#fff]">
                  <ArrowTopRight />
                </div>
              </div>
            </Link>

            {/* button show in mobile */}

            <Link href={`/san-pham/${item?.slug?.trim()}`}>
              <div className="hidden max-md:flex price-product-slide justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] mt-[2rem] bg-[#55D5D2]">
                <p className="text-[3.36rem] font-extrabold leading-[4.85333rem] text-[#fff]">
                  {item?.price && formatCurrencyVND(item?.price.toString())}
                </p>
                <div className="arrow-peoduct-slide p-[0.5rem] text-[#fff]">
                  <ArrowTopRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFlashSaleMobile;
