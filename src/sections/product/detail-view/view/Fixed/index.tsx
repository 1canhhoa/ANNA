'use client';

import Image from 'next/image';
import { IDetailProductRes } from '@/types/types-general';
import React, { useContext, useEffect, useState } from 'react';
import { formatCurrencyVND } from '@/ultils/format-price';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { ProductCartContext } from "@/context-provider";
import { onError } from "@/ultils/notification";

interface IProps {
  dataInit?: IDetailProductRes;
  listColorProduct?: any;
  handleAddToCart: any;
  isLoadingAddToCart?: boolean;
  variantProductSelected?: any;
  handleChangeColorGetApi?: any;
}

export function Fixed(props: IProps) {
  const {
    dataInit,
    listColorProduct,
    handleAddToCart,
    variantProductSelected,
    isLoadingAddToCart,
    handleChangeColorGetApi,
  } = props;
  const [dataProductSubmit, setDataProductSubmit] = useState<any>({
    color: '',
    image: '',
  });
  const [stockQuantity, setStockQuantity] = useState(dataInit?.stock_quantity);

  console.log('listColorProduct', listColorProduct);
  const { listCartGlobal } = useContext<any>(ProductCartContext);
  const handleChangeColor = (item: any) => {
    setStockQuantity(dataInit?.max_qty);
    setDataProductSubmit({
      color: item?.attributes?.attribute_color,
      image: item?.image?.full_src,
    });
    handleChangeColorGetApi(item);
  };

  const checkStockQuantity = () => {
    const listCartHandle = listCartGlobal;

    const findItemAvailabelStorage = listCartHandle.filter(
      (itemProduct: any) =>
        itemProduct?.product_id === dataInit?.id &&
        itemProduct?.variant_id === variantProductSelected.variant_id
    );

    if (findItemAvailabelStorage.length > 0) {
      return (
        findItemAvailabelStorage[0].stock_quantity -
          findItemAvailabelStorage[0].quantity >=
        1
      );
    }

    return true;
  };

  const handleCart = (): void => {
    if (!checkStockQuantity()) {
      onError({
        message: 'Số lượng tồn kho không đủ.',
      });
      return;
    }

    if (
      dataInit?.variations &&
      dataInit?.variations.length > 0 &&
      variantProductSelected.variant_id.length === 0
    ) {
      onError({ message: 'Vui lòng chọn màu sắc sản phẩm.' });
    } else {
      handleAddToCart({
        dataItemProduct: dataInit,
        quantityProduct: 1,
        stock_quantity: stockQuantity,
      });
    }
    //
    // handleAddToCart({
    //   dataItemProduct: dataInit,
    //   quantityProduct: 1,
    // });
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
            <div>
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
                <ul className=" list-color flex mt-[1.06rem] max-md:hidden">
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
      </div>
      <div className="right flex items-center">
        <p className="text-[1.875rem] font-extrabold leading-[2.25rem] text-blueAnna mr-[3.25rem]">
          {dataInit?.price && formatCurrencyVND(dataInit?.price.toString())}
        </p>
        <button
          disabled={isLoadingAddToCart}
          type="button"
          onClick={handleCart}
          className="py-[0.94rem] px-[1.88rem] bg-[#55D5D2] rounded-[3.125rem] flex items-center"
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
