'use client';

import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';
import { IListProductMenuHeader } from '@/types/types-general';
import './style.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import map from 'lodash.map';
import ICArrowRight3 from '@/components/Icons/ICArrowRight3';

interface IProps {
  listProduct?: IListProductMenuHeader[] | [];
  onMouseLeaveTabMenu?: any;
}
function DropdownProductHeader(props: IProps) {
  const { listProduct, onMouseLeaveTabMenu } = props;
  const [listProductInCategory, setListProductInCategory] = useState<
    IListProductMenuHeader[] | []
  >([]);
  const [keyCategoryMenu, setKeyCategoryMenu] = useState<any>({
    name: undefined,
    slug: '',
  });

  const handleMouseCategory = (value: any): void => {
    setListProductInCategory(value);
  };

  useEffect(() => {
    if (listProduct && listProduct.length > 0 && listProduct[0]?.children) {
      setListProductInCategory(listProduct[0].children);
      setKeyCategoryMenu({ ...keyCategoryMenu, name: listProduct[0].name });
    }
  }, [listProduct]);
  return (
    <div className="dropdown-product-header-container w-[87.5rem] h-[28.6875rem] relative custom-container-dropdown-header dropdown-product-header rounded-[1.5rem] overflow-hidden border-none ">
      <div
        onMouseLeave={() => {
          setKeyCategoryMenu({ ...keyCategoryMenu, name: undefined });
          // setKeyCategoryMenu(listProduct[0].name);
          // setListProductInCategory(listProduct[0].children);
        }}
        className="flex justify-between h-full rounded-[1.5rem] "
      >
        <div className="w-[29.125rem] border-r-2 border-[#55D5D2] bg-[#4DC0BD]">
          <ul className="w-full">
            {map(listProduct, (item, index) => (
              <li
                key={index}
                onMouseMove={() => {
                  handleMouseCategory(item.children);
                  setKeyCategoryMenu({ name: item.name, slug: item.slug });
                }}
                onClick={onMouseLeaveTabMenu}
                className={`${
                  keyCategoryMenu.name === item.name
                    ? 'item-Category-active'
                    : ''
                } item-category-product cursor-pointer py-[1.44rem] px-[2.88rem] border-b-[1px] border-b-white border-opacity-20`}
              >
                <Link
                  href={`/danh-muc-san-pham/${item.slug}`}
                  className="flex justify-between items-center"
                >
                  <span className="text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase">
                    {item.name}
                  </span>
                  <ICArrowRight3 />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[1.5rem] px-[4rem] flex justify-between w-[33rem]">
          {listProductInCategory.map((item, index) => (
            <div key={index}>
              <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
                {item.name}
              </h3>
              <ul className="-ml-[1.95rem]">
                {item?.children &&
                  item?.children.map((itemChild, index) => (
                    <li key={index}>
                      <Link
                        href={`/danh-muc-san-pham/${keyCategoryMenu.slug}?${item.slug}=${itemChild.slug}`}
                        onClick={() => onMouseLeaveTabMenu()}
                        className="item-sub-category-product cursor-pointer flex items-center mb-[1.25rem]"
                      >
                        <div className="icon-arrow-right-dropdown-header">
                          <ICArrowRight2
                            fill="#F58F5D"
                            width="1.25rem"
                            height="1.25rem"
                          />
                        </div>
                        <span className="ml-[0.88rem] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                          {itemChild.name}
                        </span>
                      </Link>
                      {/* <div className="icon-arrow-right-dropdown-header"> */}
                      {/*  <ICArrowRight2 */}
                      {/*    fill="#F58F5D" */}
                      {/*    width="1.25rem" */}
                      {/*    height="1.25rem" */}
                      {/*  /> */}
                      {/* </div> */}
                      {/* <span className="ml-[0.88rem] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]"> */}
                      {/*  {itemChild.name} */}
                      {/* </span> */}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex grow items-center justify-center py-[1.5rem] rounded-[1rem]">
          {/* {listProduct && listProduct?.length > 0 ? ( */}
          {/*  <Image */}
          {/*    height={200} */}
          {/*    width={200} */}
          {/*    className="w-[23.3125rem] h-full " */}
          {/*    src={ */}
          {/*      listProduct && listProduct[1]?.link */}
          {/*        ? listProduct[1].link */}
          {/*        : '/img/no_image.jpg' */}
          {/*    } */}
          {/*    alt="" */}
          {/*  /> */}
          {/* ) : ( */}
          {/*  <Image */}
          {/*    height={200} */}
          {/*    width={200} */}
          {/*    className="w-[23.3125rem] h-full " */}
          {/*    src="/img/no_image.jpg" */}
          {/*    alt="no-image" */}
          {/*  /> */}
          {/* )} */}
          <Image
            height={200}
            width={200}
            className="w-[23.3125rem] h-[25.6875rem] object-cover"
            src="/img/about-us/content2.jpg"
            alt="no-image"
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownProductHeader;
