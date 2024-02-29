'use client';

import './style.css';
import FilterListProduct from './components/filter-list-product';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { IItemAttributeProduct } from '@/types/types-general';
import map from 'lodash.map';
import ItemMobile from '@/components/component-ui-custom/item-product-mobile';

interface IProps {
  slug?: any;
  dataListAttribute: IItemAttributeProduct[];
  dataListProductInit: any;
  searchParams?: any;
  listAttributeNew?: any;
}

// interface IParamsFilter {
//   category: number;
//   page: number;
// }

export default function ListProduct(props: IProps) {
  const {
    slug,
    dataListAttribute,
    dataListProductInit,
    searchParams,
    listAttributeNew,
  } = props;
  return (
    <div className="list-product-container mb-[2.94rem]">
      {/* banner */}
      <div className="height-banner-global relative bg-banner-about-us bg-cover bg-no-repeat w-full">
        {/* <Image */}
        {/*  src="/img/about-us/bg-banner-about-us.jpg" */}
        {/*  width={100} */}
        {/*  height={32} */}
        {/*  alt="banner cart" */}
        {/*  className="w-full h-full" */}
        {/*  quality={100} */}
        {/* /> */}
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
            <span className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem]">
              Trang chủ
            </span>
            <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
            <span className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem] max-md:leading-[4.8rem]">
              Danh sách sản phẩm
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-[87.5rem] mx-auto mt-[2.5rem] max-md:w-full max-md:px-[3.2rem] max-md:mt-[3.2rem]">
        <FilterListProduct
          listAttribute={dataListAttribute}
          searchParams={searchParams}
          listAttributeNew={listAttributeNew}
        />
        <div className="mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
          <div className="flex justify-between mb-[2rem] items-center max-md:px-0 max-md:mb-[4.27rem]">
            <h4 className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[4.7rem]">
              SẢN PHẨM NỔI BẬT
            </h4>
            {/*<div className="button-see-more flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">*/}
            {/*  <ICArrowRight2 fill="#A9A9A9" />*/}
            {/*  <p className="text-[1.125rem] leading-[1.4625rem] font-bold ml-[0.62rem] text-right max-md:hidden">*/}
            {/*    Xem thêm*/}
            {/*  </p>*/}
            {/*  <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[2.88rem] max-md:text-[#F58F5D]">*/}
            {/*    Xem tất cả*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
          <div className="w-full max-md:hidden">
            {/* <OutstandingProduct /> */}
            <SlideProductComponent
              keySlide="out-standing-product"
              breakPoint={{ PerView767: 2 }}
              data={dataListProductInit?.item}
            />
          </div>

          <div className="hidden max-md:flex w-full overflow-x-auto hide-scrollbar-global">
            {map(dataListProductInit?.item, (item) => (
              <div className="min-w-[45.2rem] mr-[3.2rem]">
                <ItemMobile itemProduct={item} />
              </div>
            ))}
          </div>
        </div>
        {/* newest product */}
        <div>
          <div className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] mb-[2rem] max-md:text-[4.7rem] max-md:mb-[4.27rem]">
            SẢN PHẨM MỚI NHẤT
          </div>
          <div className="flex w-full max-md:flex-col">
            <Image
              width={400}
              height={300}
              // width={}
              className="w-2/5 h-[21.875rem] rounded-3xl mr-[1.25rem] max-md:w-full max-md:h-[60rem] max-md:rounded-[4.5rem] max-md:mb-[3rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-416.jpg"
              alt=""
            />
            <div className="grow w-full overflow-hidden h-[21.875rem] max-md:hidden">
              <SlideProductComponent
                keySlide="list-new-product"
                breakPoint={{
                  PerView1280: 3,
                }}
                heightImage={17}
                data={dataListProductInit?.item}
                left
              />
            </div>
            <div className="hidden max-md:flex grow w-full overflow-x-auto hide-scrollbar-global overflow-hidden h-[66.26667rem]">
              {map(dataListProductInit?.item, (item) => (
                <div className="min-w-[45.2rem] mr-[3.2rem]">
                  <ItemMobile itemProduct={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* outstanding product */}
    </div>
  );
}
