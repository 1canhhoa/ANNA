'use client';

import Image from 'next/image';
import { IDetailProductRes } from '@/types/types-general';
import React, { useEffect, useState } from 'react';
import { formatCurrencyVND } from '@/ultils/format-price';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

interface IProps {
  dataInit?: IDetailProductRes;
  listColorProduct?: any;
  handleAddToCart: (data: any, quantity: any) => void;
  isLoadingAddToCart?: boolean;
}

export function Fixed(props: IProps) {
  const { dataInit, listColorProduct, handleAddToCart, isLoadingAddToCart } =
    props;
  const [dataProductSubmit, setDataProductSubmit] = useState<any>({
    color: '',
    image: '',
  });

  const handleChangeColor = (item: any) => {
    setDataProductSubmit({
      color: item?.attributes?.attribute_color,
      image: item?.image?.full_src,
    });
  };

  useEffect(() => {
    setDataProductSubmit({
      ...dataProductSubmit,
      image: dataInit?.featuredImage,
    });
  }, []);
  return (
    <div
      className="flex justify-between items-center
    "
    >
      <div className="left flex items-center">
        <Image
          width={200}
          height={200}
          className="w-[7.5rem] h-[7.5rem] mr-[2rem] object-cover"
          src={dataProductSubmit.image ?? '/img/no_image.jpg'}
          alt=""
        />
        <div className="flex flex-col items-center h-[7.5rem]">
          <div className="h-full flex items-center justify-center">
            {dataInit?.name && (
              <p className="text-[1rem] font-extrabold leading-[1.4625rem] mb-[0.5rem]">
                {dataInit?.name}
              </p>
            )}

            {dataInit?.sale_price && (
              <p className="text-[1rem] not-italic leading-[1.3rem] font-bold line-through">
                {formatCurrencyVND(dataInit?.sale_price.toString())}
              </p>
            )}

            {listColorProduct.length > 0 && (
              <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-md:hidden">
                {listColorProduct.map((item: any, index: number) => (
                  // <Link href={{pathname: "/detail/[id]",query: { id: item.id },}}>
                  <li
                    // role="button"
                    key={index}
                  >
                    <div
                      style={{
                        backgroundColor: item.attributes.attribute_color,
                        borderColor:
                          item.attributes.attribute_color ===
                          dataProductSubmit.color
                            ? '#55D5D2'
                            : item.attributes.attribute_color,
                      }}
                      role="button"
                      onClick={() => handleChangeColor(item)}
                      className="h-[1.25rem] w-[1.25rem] rounded-full border-2 mr-[1rem] transition-all duration-300"
                    />
                  </li>
                  // </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="right flex items-center">
        <p className="text-[1.875rem] font-extrabold leading-[2.25rem] text-blueAnna mr-[3.25rem]">
          {dataInit?.price && formatCurrencyVND(dataInit?.price.toString())}
        </p>
        <button
          disabled={isLoadingAddToCart}
          type="button"
          onClick={() => handleAddToCart(dataInit, 1)}
          className={`${dataInit?.stock_quantity === 0 ? "pointer-events-none !cursor-not-allowed opacity-50":""} py-[0.94rem] px-[1.88rem] bg-[#55D5D2] rounded-[3.125rem] flex items-center`}
        >
          <div className="max-md:hidden">
            {isLoadingAddToCart && <LoadingGlobal height={1} width={1} />}
          </div>
          <span className="text-[1rem] leading-[1.5rem] font-[800] text-white">
            Thêm vào giỏ hàng
          </span>
        </button>
      </div>
    </div>
  );
}
