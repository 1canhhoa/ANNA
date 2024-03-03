'use client';

import { MapMobile } from '@/app/icons';
import { ICDecreaseIcon, ICIncreaseIcon } from '@/components/Icons';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import ICBag from '@/components/Icons/ICBag';
import { IDetailProductRes } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import React, { useContext, useEffect, useRef, useState } from 'react';

import './style.css';
import Link from 'next/link';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import map from 'lodash.map';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import { ProductCartContext } from '@/context-provider';
import { onError } from '@/ultils/notification';
import { previousDay } from 'date-fns';

interface IProps {
  dataInit?: any;
  handleChangeColorGetApi: (value: any) => void;
  handleAddToCart: any;
  isLoadingAddToCart: boolean;
  dataTransportRes?: any;
  dataChangeRes?: any;
  variantProductSelected?: any;
  dataListColor?:any
}

interface IDataProduct {
  color: string;
  quantityProduct: number;
  idColor: string | null | number;
}

function InfoProduct(props: IProps) {
  const {
    dataInit,
    handleChangeColorGetApi,
    handleAddToCart,
    isLoadingAddToCart,
    dataTransportRes,
    dataChangeRes,
    variantProductSelected,
    dataListColor
  } = props;

  const { isShowPopupChooseGlasses } = useContext(ProductCartContext);
  const { listCartGlobal } = useContext<any>(ProductCartContext);

  const inventoryRef = useRef<any>(null);
  const refInfo = useRef<any>(null);
  const refTranform = useRef<any>(null);
  const refReturnInfo = useRef<any>(null);

  const isShowInventory = useBoolean(false);
  const [widthScreen, setWidthSreen] = useState<number>(0);
  const [numberInfor, setNumberInfor] = useState<number | undefined>(undefined);
  const [priceProduct, setPriceProduct] = useState<any>({
    price: 0,
    regularPrice: 0,
  });
  const [dataProductSubmit, setDataProductSubmit] = useState<IDataProduct>({
    color: '',
    idColor: null,
    quantityProduct:
      dataInit?.stock_quantity && dataInit?.stock_quantity > 0 ? 1 : 0,
  });
  const [stockQuantity, setStockQuantity] = useState(dataInit?.stock_quantity);
  const [dataCheckInventory, setDataCheckInventory] = useState<any>();
  const [isProductCheckInventory, setIsProductCheckInventory] = useState(
    dataInit?.id
  );
  const isLoadingInventory = useBoolean(false);

  // GET Return product

  const handleChangeColor = (detailProduct: any) => {
    setDataProductSubmit({
      ...dataProductSubmit,
      color: detailProduct.color,
      idColor: detailProduct.variation_id,
    });
    setStockQuantity(detailProduct.qty);
    handleChangeColorGetApi(detailProduct);

    if (dataProductSubmit.quantityProduct > detailProduct.max_qty) {
      setDataProductSubmit({
        ...dataProductSubmit,
        quantityProduct: detailProduct.max_qty,
      });
    }
    setIsProductCheckInventory(detailProduct.variation_id);
  };

  const handleHiddenInfor = (e: any, value: number) => {
    setNumberInfor(value === numberInfor ? undefined : value);
  };

  const handleOnchangeQuantity = (value: any): void => {
    const valueConvert = parseInt(
      value.target.value.replace(/[^0-9]/g, ''),
      10
    );

    let check;

    if (stockQuantity) {
      check = valueConvert > stockQuantity ? stockQuantity : valueConvert;
    } else check = valueConvert;

    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: Number.isNaN(check) ? 1 : check,
    });
  };

  const subQuantityProduct = (): void => {
    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: dataProductSubmit.quantityProduct - 1,
    });
  };

  const addQuantityProduct = (): void => {
    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: dataProductSubmit.quantityProduct + 1,
    });
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
        dataProductSubmit.quantityProduct
      );
    }

    return true;
  };

  const addToCart = (): void => {
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
      if (dataProductSubmit.quantityProduct > 0) {
        handleAddToCart({
          dataItemProduct: dataInit,
          quantityProduct: dataProductSubmit.quantityProduct,
          stock_quantity: stockQuantity,
        });
      }
    }
  };
  // console.log(dataInit)

  useEffect(() => {

    if(dataInit?.variations){
       setPriceProduct((prev:any)=>{
        return {
          ...prev,
        price:dataInit?.variations[0]?.display_price,
        regularPrice: dataInit?.variations[0]?.display_regular_price
        }
       });

    }else{
      setPriceProduct((prev:any)=>{
        return {
          ...prev,
        price:dataInit?.price,
        regularPrice: dataInit?.regular_price
        }
       });

    }
  }, [dataInit]);


  useEffect(() => {
    setWidthSreen(window.innerWidth);
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('/api/check-inventory', {
        method: 'POST',
        body: JSON.stringify({ id: isProductCheckInventory }),
      });

      const data = res.json();
      return data;
    };

    isLoadingInventory.onTrue();
    fetchInventory()
      .then((res) => {
        const resInventory = JSON.parse(res);
        setDataCheckInventory(resInventory?.data);
        isLoadingInventory.onFalse();
      })
      .catch((res) => {
        isLoadingInventory.onFalse();
      });
  }, [isProductCheckInventory]);

  return (
    <div className="info-detail-product right-detail grow max-lg:ml-[1.76rem]  ml-[3.76rem] max-md:mt-0 max-md:ml-[0rem] max-md:relative max-md:w-full">
      {dataInit?.categories && dataInit?.categories[0] && (
        <div className="flex items-center justify-center h-[1.4375rem] py-[0.8125rem] border-[0.5px] border-[#C5C5C5] px-[0.625rem] rounded-[2.5rem] w-fit bg-[#CAF2F1] max-md:py-[3.46667rem] max-md:h-[6.13333rem] max-md:px-[2.66667rem] max-md:rounded-[10.66667rem]">
          <span className="leading-[0.9rem] text-[#454545] text-[0.75rem] not-italic font-bold max-md:text-[2.66667rem] max-md:leading-[2.4rem] overflow-hidden">
            {dataInit?.categories[0]}
          </span>
        </div>
      )}

      {dataInit?.name && (
        <p className="text-[1.75rem] not-italic font-extrabold text-[#454545] leading-[2.1rem] my-[0.75rem] max-md:text-[5.76rem] max-md:mt-[2.13rem] max-md:leading-[7.488rem] max-sm:mb-[0.75rem]">
          {dataInit?.name}
        </p>
      )}

      <div className="hidden max-md:block">
        <div className="hidden max-md:block text-[3.2rem] text-[#F58F5D] not-italic leading-[4.16rem] font-bold">
          ( Còn {dataCheckInventory?.total ?? 0} sản phẩm )
        </div>
      </div>

      <div className="max-md:hidden">
        {priceProduct?.price > 0 && (
          <p className="text-[1.875rem] font-extrabold leading-[2.25rem] text-blueAnna">
            {formatCurrencyVND(priceProduct?.price)}
          </p>
        )}
      </div>

      <div className="max-md:hidden">
        {priceProduct?.regular_price > 0 && (
          <p className="text-[1rem] leading-[1.4rem] font-bold text-[#6A6A6A] line-through max-md:hidden">
            {formatCurrencyVND(priceProduct?.regular_price)}
          </p>
        )}
      </div>

      <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem]">
        {dataInit?.variations && dataListColor &&
          dataListColor?.map((item: any, index: number) => (
            <li
              key={index}
            >
              <div
                style={{
                  backgroundColor: item.value[0],
                  borderColor:
                    item.value[0] === dataProductSubmit.color
                      ? '#55D5D2'
                      : item.value[0],
                }}
                role="button"
                onClick={() => {
                    let colorSlug = item.slug
                    let activeItem = dataInit.variations.find((item: any) => item.attributes.attribute_pa_color === colorSlug);
                    setPriceProduct((prev:any)=>{
                      return {
                        ...prev,
                      price:activeItem?.display_price,
                      regularPrice: activeItem?.display_regular_price
                      }
                     });
                  return handleChangeColor({
                    variation_id: activeItem.variation_id,
                    color: item.value[0],
                    qty: activeItem.max_qty,
                    image: activeItem.image,
                    colorName: item.name
                  })
                }}
                className="h-[1.875rem] w-[1.875rem] rounded-full border-2 mr-[1rem] max-lg:h-[6rem] max-lg:w-[6rem]"
              />
            </li>
          ))}
      </ul>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div>${dataInit?.shortDescription
            .replace(/\r\n\r\n/g, '<br/>')
            .replace(/&nbsp;/g, '')}</div>`,
        }}
        className="w-full max-lg:text-[0.95rem] not-italic max-lg:mb-[2.5rem] w-[31.625rem] text-[1rem] text-[#3F3F3F] font-bold leading-[1.5rem] mb-[3.7rem] max-md:text-[3.36rem] max-md:leading-[5.04rem] max-md:w-[100%]"
      />
      {/* button */}
      <div className="max-lg:px-[0.5rem] max-lg:py-[0.5rem] px-[1rem] py-[1.06rem] bg-[#CAF2F1]  rounded-[5rem] mb-[2.6rem] max-sm:p-0  max-md:mt-[4rem]">
        <div className="flex justify-between items-center  h-[3.375rem] max-md:h-[11.73333rem] max-md:w-full">
          <div className="box-shadow-button w-[12.3125rem] h-full mr-[1.5rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-sm:hidden ">
            <div
              onClick={
                dataProductSubmit.quantityProduct > 1
                  ? subQuantityProduct
                  : undefined
              }
              style={{
                cursor:
                  dataProductSubmit.quantityProduct > 1
                    ? 'pointer'
                    : 'not-allowed',
              }}
              className="px-[1.5rem] py-[0.8rem] select-none max-lg:mr-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              -
            </div>
            <div className="quantity-product flex grow border-x-[0.0625rem] border-x-[#454545] border-opacity-10">
              <input
                type="text"
                // pattern="[0-9]/g*"
                className="w-full focus:outline-none text-center placeholder:text-[1rem] "
                defaultValue={dataProductSubmit.quantityProduct}
                value={dataProductSubmit.quantityProduct}
                onChange={(value) => handleOnchangeQuantity(value)}
              />
            </div>
            {/* <div className="number-add-cart-opacity" /> */}
            <div
              role="button"
              onClick={
                dataProductSubmit.quantityProduct < stockQuantity
                  ? addQuantityProduct
                  : undefined
              }
              style={{ cursor: 'pointer' }}
              className="select-none px-[1.5rem] py-[0.8rem] max-lg:ml-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              +
            </div>
          </div>
          <button
            disabled={isLoadingAddToCart || (dataInit.variations && variantProductSelected.variant_id.length === 0)}
            onClick={addToCart}
            type="button"
            className={cn(
              'cursor-pointer flex items-center grow bg-blueAnna max-lg:whitespace-nowrap max-lg:px-[0.75rem] text-white text-[1rem] font-extrabold leading-[1.4rem] px-[1.25rem] h-full rounded-[6.25rem] ml-[1.5rem] max-sm:w-full max-sm:ml-0 max-sm:justify-between max-lg:ml-[0.5rem] disabled:cursor-not-allowed disabled:opacity-50',
              widthScreen > 767 ? 'box-shadow-button' : '',
              dataProductSubmit.quantityProduct === 0
                ? 'opacity-75 cursor-not-allowed'
                : ''
            )}
          >
            <div className="max-md:hidden">
              {isLoadingAddToCart && <LoadingGlobal height={1} width={1} />}
            </div>
            <div className="flex justify-between items-center">
              <div className="hidden max-md:block mr-[2.67rem] ml-[5.33rem]">
                {isLoadingAddToCart ? (
                  <LoadingGlobal height={5} width={5} />
                ) : (
                  <ICBag />
                )}
              </div>
              <p className="max-lg:mr-[0.49rem] text-[1rem] mb-0 pb-0 not-italic font-extrabold leading-[1.4rem] max-md:text-[3.84rem] max-md:leading-[5.376rem] pb-[0rem] mb-[0rem]">
                Thêm vào giỏ
              </p>
            </div>
            <div className=" flex items-center ml-[0.62rem] max-md:ml-[2.67rem]">
              <svg
                className="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#CAF2F1" />
              </svg>
              <svg
                className="hidden max-md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1.06667rem"
                height="1.06667rem"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#CAF2F1" />
              </svg>
              <p className="title-add-cart text-[1rem] mb-0 pb-0 not-italic font-extrabold leading-[1.4rem] ml-[0.62rem] max-md:ml-[2.67rem] max-md:text-[3.84rem] max-md:leading-[5.376rem] max-md:font-extrabold max-md:mr-[5.33rem]">
                {formatCurrencyVND(
                  (priceProduct.price * dataProductSubmit.quantityProduct).toString()
                )}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* check product quantity */}
      <div
        style={{
          paddingBottom: !isShowInventory.value
            ? 0
            : inventoryRef?.current?.getBoundingClientRect().height,
        }}
        className={cn(
          'relative overflow-hidden transition-all duration-300  py-[0.9375rem] max-md:hidden'
        )}
      >
        <div
          className={cn(
            'flex justify-between py-[0.94rem] px-[1.88rem] border-b border-t transition-all duration-300',
            isShowInventory.value ? 'border-[#F58F5D]' : '',
            dataInit?.variations &&
            dataInit?.variations.length > 0 &&
            variantProductSelected.variant_id.length === 0 ? 'hidden':'flex'
          )}
        >
          <div>
            {isLoadingInventory.value ? (
              <LoadingGlobal stroke="#6A6A6A" />
            ) : (
              <span className="text-[1rem] text-[#6A6A6A] not-italic font-medium leading-[1.5rem]">
                Còn {dataCheckInventory?.total ?? 0} sản phẩm
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={isShowInventory.onToggle}
            className="cursor-pointer flex items-center"
          >
            <span className="text-[1rem] text-[#F58F5D] not-italic font-bold leading-[1.5rem] mr-[0.62rem]">
              Xem showroom còn hàng
            </span>
            <div className="max-md:hidden">
              {isShowInventory.value ? (
                <ICDecreaseIcon fill="#F58F5D" width="1.5rem" height="1.5rem" />
              ) : (
                <ICIncreaseIcon fill="#F58F5D" width="1.5rem" height="1.5rem" />
              )}
            </div>
          </button>
        </div>
        <div ref={inventoryRef} className="absolute left-0 w-full">
          {map(dataCheckInventory?.depots, (item, index) => (
            <div key={index} className="flex justify-between py-[0.5rem]">
              <div className="text-[0.875rem] text-[#454545] not-italic font-medium leading-[1.3125rem] line-clamp-1 w-3/4">
                {item.address}
              </div>
              <div className="cursor-pointer text-[0.75rem] hover:text-[#F58F5D] not-italic font-medium leading-[0.975rem]">
                Xem bản đồ
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* infor */}
      <div className="all-infor-detail">
        <div>
          <div
            style={{
              paddingBottom:
                numberInfor !== 1
                  ? 0
                  : refInfo?.current?.getBoundingClientRect().height,
            }}
            className="relative transition-all overflow-hidden duration-300"
          >
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 1)}
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-extrabold leading-[1.95rem] text-[#454545] max-md:text-[4.8rem] max-md:leading-[6.72rem]">
                Thông tin
              </span>
              <div className="max-md:hidden">
                {numberInfor === 1 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className=" hidden max-md:block">
                {numberInfor === 1 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            <div ref={refInfo} className="absolute left-0">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div>${dataInit?.description
                    .replace(/\r\n\r\n/g, '<br/>')
                    .replace(/&nbsp;/g, '')}</div>`,
                }}
                className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch  overflow-hidden max-md:text-[3.36rem] max-md:leading-[5.04rem] max-md:w-[100%]"
              />
            </div>
          </div>

          <div
            style={{
              paddingBottom:
                numberInfor !== 2
                  ? 0
                  : refTranform?.current?.getBoundingClientRect().height,
            }}
            className="relative transition-all overflow-hidden duration-300"
          >
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 2 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC] `}
              onClick={() => handleHiddenInfor('show', 2)}
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-extrabold leading-[1.95rem] text-[#454545] max-md:text-[4.8rem] max-md:leading-[6.72rem]">
                Vận chuyển
              </span>
              <div className="max-md:hidden">
                {numberInfor === 2 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className="hidden max-md:block">
                {numberInfor === 2 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            <div ref={refTranform} className="absolute left-0">
              {dataTransportRes && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${dataTransportRes[0]?.content?.rendered}`,
                  }}
                  className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch  overflow-hidden max-md:text-[3.36rem] max-md:leading-[5.04rem] max-md:w-[100%]"
                />
              )}
            </div>
          </div>
          <div
            style={{
              paddingBottom:
                numberInfor !== 3
                  ? 0
                  : refReturnInfo?.current?.getBoundingClientRect().height,
            }}
            className="relative transition-all overflow-hidden duration-300"
          >
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 3 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 3)}
            >
              <span className=" max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-extrabold leading-[1.95rem] text-[#454545] max-md:text-[4.8rem] max-md:leading-[6.72rem]">
                Đổi trả
              </span>
              <div className="max-md:hidden">
                {numberInfor === 3 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className="hidden max-md:block">
                {numberInfor === 3 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            <div ref={refReturnInfo} className="absolute left-0">
              {dataChangeRes && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${dataChangeRes[0]?.content?.rendered}`,
                  }}
                  className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch  max-md:text-[3.36rem] max-md:leading-[5.04rem] max-md:w-[100%]"
                />
              )}
            </div>
          </div>
          <div>
            <div
              role="button"
              onClick={() => isShowPopupChooseGlasses.onToggle()}
              className="flex justify-between items-center py-[0.9375rem] max-md:py-[4rem]  border-[#ECECEC]"
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-extrabold leading-[1.95rem] text-[#454545] max-md:text-[4.8rem] max-md:leading-[6.72rem]">
                Chọn kính theo gương mặt
              </span>
              <div className="max-md:hidden">
                <ICArrowRight height="1.5rem" width="1.5rem" />
              </div>
              <div className="hidden max-md:block">
                <ICArrowRight height="6.4rem" width="6.4rem" />
              </div>
            </div>
          </div>

          {/* adddress */}
          <div className="max-md:hidden">
            <div className="flex items-center justify-between py-[0.94rem] px-[1.5rem] border-t border-b border-[#55D5D2] mb-[1rem] max-md:absolute max-md:top-0 max-md:right-0 max-md:border-none max-md:py-[0rem]">
              <div className="flex items-center">
                <svg
                  className="jumping-map max-md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 16.3584C12.6895 16.3584 13.3158 16.0822 13.6755 15.6195C16.1958 12.3776 19.2 8.10496 19.2 6.16075C19.2 3.0394 15.9701 0.5 12 0.5C8.02988 0.5 4.8 3.0394 4.8 6.16075C4.8 8.10496 7.80429 12.3776 10.3245 15.6195C10.6842 16.0822 11.3106 16.3584 12 16.3584ZM9.10601 5.77208C9.10601 4.51752 10.4043 3.49684 12 3.49684C13.5957 3.49684 14.894 4.51752 14.894 5.77208C14.894 7.02667 13.5957 8.04735 12 8.04735C10.4043 8.04735 9.10601 7.02671 9.10601 5.77208Z"
                    fill="#55D5D2"
                  />
                </svg>
                <div className="pt-[0.8rem] hidden max-md:flex max-md:bg-[#55D5D2] rounded-[50%] w-[6.4rem] h-[6.4rem] justify-center items-center">
                  <MapMobile />
                </div>
                <Link
                  href="/he-thong-cua-hang"
                  className="cursor-pointer text-[1.5rem] leading-[1.95rem] text-blueAnna ml-[0.62rem] not-italic font-extrabold max-md:leading-[3.46667rem] max-md:text-[2.4rem] max-md:ml-[1.06667rem]"
                >
                  Tìm cửa hàng
                </Link>
              </div>
              <div className="rotate-[315deg] max-md:hidden">
                <ICArrowRight2 fill="#55D5D2" height="1.5rem" width="1.5rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
