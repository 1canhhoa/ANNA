'use client';

import './style.css';
import FilterListProductChooseGlass from './components/filter-list-product-choose-glasses';
import Image from 'next/image';
import { IItemAttributeProduct } from '@/types/types-general';
import Link from 'next/link';

interface IProps {
  routerSearchCustom: string;
  dataListAttribute: any;
  searchParams?: any;
  listAttributeNew?: any;
}


export default function ProductFilter(props: IProps) {
  const {
    routerSearchCustom,
    dataListAttribute,
    searchParams,
    listAttributeNew,
  } = props;

  return (
    <div className="list-product-container mb-[2.94rem]">
      {/* banner */}
      <div className="height-banner-global relative bg-banner-about-us bg-cover bg-no-repeat w-full">
        <Image
          src="/img/about-us/bg-banner-about-us.jpg"
          width={1600}
          height={1000}
          alt="banner cart"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 left-[8rem]">
          <h1 className="text-white text-[3.125rem] leading-[4.6875rem] font-bold not-italic max-md:hidden max-md:font-bold max-md:text-[4.8rem] max-md:leading-[7.2rem]">
            LỜI CẢM ƠN
          </h1>
          <div className="flex items-center">
            <Link href={"/"} className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem]">
              Trang chủ
            </Link>
            <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
            <span className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem] max-md:leading-[4.8rem]">
              Danh sách sản phẩm
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-[87.5rem] mx-auto mt-[2.5rem] max-md:w-full max-md:px-[3.2rem] max-md:mt-[3.2rem]">
        <FilterListProductChooseGlass
          routerSearchCustom={routerSearchCustom}
          listAttribute={dataListAttribute}
          searchParams={searchParams}
          listAttributeNew={listAttributeNew}
        />
      </div>
    </div>
  );
}
