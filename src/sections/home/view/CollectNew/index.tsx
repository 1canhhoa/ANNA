'use client';

import ICMore from '@/components/Icons/ICMore';
import ICVectorRight from '@/components/Icons/ICVectorRight';
import { cn } from '@/lib/utils';
import ItemCollect from '@/sections/home/view/CollectNew/Item';
import map from 'lodash.map';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface IPropCollection {
  dataProductGK: any;
  dataProductTK: any;
  dataProductKR: any;
  dataProductKAT: any;
}
function NewCollection({
  dataProductGK,
  dataProductTK,
  dataProductKR,
  dataProductKAT,
}: IPropCollection) {
  const [category, setCategory] = useState('gong-kinh');
  const [dataProduct, setDataProduct] = useState<any>(dataProductGK);
  const [titleCategory, setTitleCategory] = useState<any>({
    title: 'Gọng kính',
    slug: 'gong-kinh',
  });

  const handleChangeProduct = (item: string) => {
    setCategory(item);
    if (item === 'gong-kinh') {
      setDataProduct(dataProductGK);
      setTitleCategory({
        title: 'Gọng kính',
        slug: 'gong-kinh',
      });
    } else if (item === 'trong-kinh') {
      setDataProduct(dataProductTK);
      setTitleCategory({
        title: 'Tròng kính',
        slug: 'trong-kinh',
      });
    } else if (item === 'kinh-ram') {
      setDataProduct(dataProductKR);
      setTitleCategory({
        title: 'Kính râm',
        slug: 'kinh-ram',
      });
    } else if (item === 'kinh-ap-trong') {
      setDataProduct(dataProductKAT);
      setTitleCategory({
        title: 'Kính áp tròng',
        slug: 'kinh-ap-trong',
      });
    }
  };
  return (
    <div className="container-homepage max-sm:m-0 max-sm:px-[3.2rem] px-[5rem] pb-[5rem] max-lg:px-[3.25rem] mt-[4.75rem] md:mt-[3.75rem] relative max-sm:pb-[3.5rem] p-[6.67rem] md:p-[0] max-sm:bg-[#FAFAFA]">
      <div className="flex mb-[2.5rem] mx-4 items-center max-sm:mb-[1rem] justify-between flex-wrap">
        <h4 className="max-lg:w-full text-[#454545] max-sm:pb-8 max-sm:w-full flex justify-between font-extrabold md:font-black">
          <span className="hidden md:block text-[2.375rem] uppercase">
            bộ sưu tập mới nhất
          </span>
          <span className="block md:hidden text-[4.8rem] uppercase">
            bộ sưu tập mới
          </span>
          <Link
            href="/cua-hang"
            className="see-more cursor-pointer flex lg:hidden items-center"
          >
            {/*<ArrowRight className="text-[#C5C5C5]" />*/}
            <ICVectorRight width={16} height={16} fill="#C5C5C5" />
            <p className="text-[#C5C5C5] text-[2.88rem] md:text-lg font-black ml-[0.9rem] pt-[0.4rem]">
              Xem tất cả
            </p>
          </Link>
        </h4>
        <div className="max-md:overflow-auto hide-scrollbar-global">
          <div className="flex md:w-fit max-md:pb-8">
            <div className="item-collect pl-0 lg:px-[1.25rem] cursor-pointer relative z-10 flex items-center min-w-fit">
              {/* <ArrowRight className="icon-arrow-right hidden" /> */}
              <div
                className={cn(
                  'icon-arrow-right pr-[3.2rem] md:pr-3',
                  category === 'gong-kinh'
                    ? 'icon-arrow-right-active'
                    : 'opacity-0 -translate-x-full'
                )}
              >
                <ICVectorRight width={16} height={16} />
              </div>
              <p
                className={cn(
                  'category-collect text-[2.88rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase',
                  category === 'gong-kinh'
                    ? 'text-[#f58f5d]'
                    : 'text-[#828282] md:text-[#454545]'
                )}
                onClick={() => handleChangeProduct('gong-kinh')}
              >
                Gọng kính
              </p>
            </div>
            <div className="item-collect px-[4rem] md:px-[1.25rem] cursor-pointer relative z-10 flex items-center min-w-fit">
              <div
                className={cn(
                  'icon-arrow-right pr-[2rem] md:pr-3',
                  category === 'trong-kinh'
                    ? 'icon-arrow-right-active'
                    : 'opacity-0 -translate-x-full'
                )}
              >
                <ICVectorRight width={16} height={16} />
              </div>
              <p
                className={cn(
                  'category-collect text-[2.88rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase',
                  category === 'trong-kinh'
                    ? 'text-[#f58f5d]'
                    : 'text-[#828282] md:text-[#454545]'
                )}
                onClick={() => handleChangeProduct('trong-kinh')}
              >
                Tròng Kính
              </p>
            </div>
            <div className="item-collect px-[4rem] md:px-[1.25rem] cursor-pointer relative z-10 flex items-center min-w-fit">
              <div
                className={cn(
                  'icon-arrow-right pr-[2rem] md:pr-3',
                  category === 'kinh-ram'
                    ? 'icon-arrow-right-active'
                    : 'opacity-0 -translate-x-full'
                )}
              >
                <ICVectorRight width={16} height={16} />
              </div>
              <p
                className={cn(
                  'category-collect text-[2.88rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase',
                  category === 'kinh-ram'
                    ? 'text-[#f58f5d]'
                    : 'text-[#828282] md:text-[#454545]'
                )}
                onClick={() => handleChangeProduct('kinh-ram')}
              >
                Kính râm
              </p>
            </div>
            <div className="item-collect px-[4rem] md:px-[1.25rem] cursor-pointer relative z-10 flex items-center min-w-fit">
              <div
                className={cn(
                  'icon-arrow-right pr-[2rem] md:pr-3',
                  category === 'kinh-ap-trong'
                    ? 'icon-arrow-right-active'
                    : 'opacity-0 -translate-x-full'
                )}
              >
                <ICVectorRight width={16} height={16} />
              </div>
              <p
                className={cn(
                  'category-collect text-[2.88rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase',
                  category === 'kinh-ap-trong'
                    ? 'text-[#f58f5d]'
                    : 'text-[#828282] md:text-[#454545]'
                )}
                onClick={() => handleChangeProduct('kinh-ap-trong')}
              >
                Kính áp tròng
              </p>
            </div>
            <Link
              href="/cua-hang"
              className="see-more cursor-pointer hidden lg:flex items-center"
            >
              <ArrowRight className="text-[#C5C5C5]" />
              <p className="text-[#C5C5C5] text-[2.88rem] md:text-lg font-extrabold uppercase pl-[0.62rem] pt-[0.1rem]">
                Xem tất cả
              </p>
            </Link>
          </div>
        </div>
        {/* <div className="block sm:hidden w-full">
          <SlideSelect handleChangeProduct={handleChangeProduct} />
        </div> */}
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[4rem] md:gap-[2rem]">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {map(dataProduct?.item, (dataCollect: any, index: number) => {
            if (index <= 7) {
              return (
                <div key={index}>
                  <ItemCollect
                    dataCollect={dataCollect}
                    key={index}
                    category={category}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="px-4">
        <Link
          href={`/danh-muc-san-pham/${titleCategory.slug}`}
          className="hidden md:inline-flex collect-more w-full mb-[7.5rem] h-[58px] px-[1.88rem] py-[1.06rem] mt-[calc(2.75rem-17px)] rounded-[50px] border-2 border-teal-300 justify-center items-center gap-2.5 hover:border-[#f58f5d] transition-all duration-200"
        >
          <div className="collect-title uppercase text-center text-blueAnna text-[4.8rem] md:text-lg font-extrabold md:leading-[1.4625rem] leading-normal">
            XEM THÊM {titleCategory.title}
          </div>
          <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
            <ICMore />
          </div>
        </Link>
      </div>
      <Link
        href="/cua-hang"
        className="inline-flex md:hidden w-full justify-center items-center gap-2.5 mt-[4rem]"
      >
        <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
          <ICVectorRight width={16} height={16} fill="#F58F5D" />
        </div>
        <div className="collect-title text-center text-[#F58F5D] pt-[0.3rem] text-[2.88rem] md:text-lg font-extrabold leading-normal">
          Xem tất cả
        </div>
      </Link>
    </div>
  );
}

export default NewCollection;
