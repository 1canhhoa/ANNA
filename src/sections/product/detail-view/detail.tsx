'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ImageProduct from '@/sections/product/detail-view/view/image-product';
import InfoProduct from '@/sections/product/detail-view/view/info-product';
import RecommendProduct from '@/sections/product/detail-view/view/recommend-product';
import { fetchDataAuthen } from '@/lib/post-data';
import { ICProtected } from '@/components/Icons/ICProtected';
import { ICFree } from '@/components/Icons/ICFree';
import { ICChange } from '@/components/Icons/ICChange';
import { ICClean } from '@/components/Icons/ICClean';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ItemMobile from '../../../components/component-ui-custom/item-product-mobile';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { Fixed } from '@/sections/product/detail-view/view/Fixed';
import './style.css';
import Link from 'next/link';
import Image from 'next/image';
import { keyLocalStorage } from '@/configs/config';
import map from 'lodash.map';
import { onError, onSuccess } from '@/ultils/notification';
import { ProductCartContext } from '@/context-provider';
import { ICChangeMobile } from '@/components/Icons/ICChangeMobile';
import { useSession } from 'next-auth/react';

interface IProps {
  slug: string;
  dataInitDetail: any;
  dataGlasses: any;
  dataListSimilarGlasses: any;

  dataProductGlasses: any;
  dataDataLenses: any;
  dataProductByAnyCategory: any;
  dataTransportRes?: any;
  dataChangeRes?: any;
  dataListColor?:any
}

export const DetailContext = createContext<any>({});

function ProductDetail(props: IProps) {
  const {
    slug,
    dataInitDetail,
    dataGlasses,
    dataListSimilarGlasses,
    dataProductGlasses,
    dataDataLenses,
    dataProductByAnyCategory,
    dataTransportRes,
    dataChangeRes,
    dataListColor
  } = props;
  const refHeightProductInfo = useRef<any>();
  const { data: session } = useSession();
  const [isShowItemProduct, setIsShowItemProduct] = useState<boolean>(false);
  const [variantProductSelected, setVariantProductSelected] = useState({
    image: '',
    variant_id: '',
    color_variant: '',
  });
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState<boolean>(false);

  const { handleChangeDataCartGlobal, listCartGlobal } =
    useContext<any>(ProductCartContext);

  const handleChangeColorGetApi = (dataItemColor?: any): void => {
    setVariantProductSelected({
      image: dataItemColor?.image?.url,
      variant_id: dataItemColor?.variation_id,
      color_variant: dataItemColor?.colorName,
    });
  };

  const handleAddToCartLocalStorage = (dataParams: {
    dataItemProduct: any;
    quantityProduct: any;
    keyItemAddCartApi?: string;
    stock_quantity?: any;
  }): void => {
    let listCartHandle = listCartGlobal;
  console.log("dataParams",dataParams)
  console.log("listCartHandle",listCartHandle)

    const findItemAvailabelStorage = listCartHandle.filter(
      (itemProduct: any) =>
        itemProduct?.product_id === dataParams.dataItemProduct?.id &&
        itemProduct?.variant_id === variantProductSelected.variant_id
    );

    if (findItemAvailabelStorage.length === 0) {
      const ItemAddToCard = {
        key: dataParams.keyItemAddCartApi,
        product_id: dataParams.dataItemProduct?.id,
        product_image: dataParams.dataItemProduct?.featuredImage,
        product_name: dataParams.dataItemProduct?.name,
        category: dataParams.dataItemProduct?.categories
          ? dataParams.dataItemProduct?.categories[0]
          : 'no-dataItemProduct',
        product_price: dataParams.dataItemProduct?.price,
        // salePrice: dataItemProduct?.sale_price,
        stock_quantity: dataParams.dataItemProduct?.stock_quantity,
        quantity: dataParams.quantityProduct,
        variant_id: variantProductSelected.variant_id,
        variant_value: variantProductSelected.color_variant,
      };

      listCartHandle = [...listCartHandle, ItemAddToCard];

      handleChangeDataCartGlobal(listCartHandle);

      if (session === null) {
        onSuccess({ message: 'Thêm giỏ hàng thành công' });

        if (typeof window !== 'undefined') {
          localStorage.setItem(
            keyLocalStorage.keyProductsInCart,
            JSON.stringify(listCartHandle)
          );
        }
      }
      return;
    }

    const newListProduct = map(listCartHandle, (item: any) => {
      const newObject = {
        key: item.key,
        product_id: item.product_id,
        product_image: item.product_image,
        product_name: item.product_name,
        category: item.category,
        product_price: item?.product_price,
        stock_quantity: item?.stock_quantity,
        variant_id: item?.variant_id,
        quantity: item.quantity,
        variant_value: item.variant_value,
      };

      if(item.product_id === dataParams.dataItemProduct?.id && variantProductSelected.variant_id === "" && item.variant_id === ""){
        let newList = {
          ...newObject,
          quantity: item.quantity + dataParams.quantityProduct
        }
        return newList
      }
        
      if(item.product_id === dataParams.dataItemProduct?.id && item.variant_id === variantProductSelected.variant_id){
          let newList = {
            ...newObject,
            quantity: item.quantity + dataParams.quantityProduct
          }
          return newList
      }
      
      return newObject;
    });

    handleChangeDataCartGlobal(newListProduct);

    if (session === null) {
      onSuccess({ message: 'Thêm giỏ hàng thành công' });

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          keyLocalStorage.keyProductsInCart,
          JSON.stringify(newListProduct)
        );
      }
    }
  };

  const handleAddToCartAPI = async (dataParams: {
    dataItemProduct: any;
    quantityProduct: any;
    keyItemAddCartApi?: string;
    stockQuantity: any;
  }) => {
    setIsLoadingAddToCart(true);

    const objectSubmit = {
      product_id: dataParams?.dataItemProduct?.id,
      quantity: dataParams.quantityProduct,
      variation_id: variantProductSelected?.variant_id,
    };

    try {
      fetchDataAuthen({
        url: `wp-json/woocart/v1/cart`,
        method: 'post',
        body: JSON.stringify(objectSubmit),
        token: session?.user?.token,
      })
        .then((res) => {
          handleAddToCartLocalStorage({
            dataItemProduct: dataParams.dataItemProduct,
            quantityProduct: dataParams.quantityProduct,
            keyItemAddCartApi: res?.cart_item?.cart_id,
          });
          onSuccess({ message: 'Thêm giỏ hàng thành công' });
          setIsLoadingAddToCart(false);
        })
        .catch((res) => {
          onError({ message: res?.message });
          setIsLoadingAddToCart(false);
        });
    } catch (error) {
      setIsLoadingAddToCart(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (scrollY > refHeightProductInfo.current?.clientHeight) {
        setIsShowItemProduct(true);
      } else setIsShowItemProduct(false);
    });
  }, []);

  return (
    // <DetailContext.Provider
    //   value={{ imageChangeColor, handleChangeColorGetApi }}
    // >
    <div className="pt-[12rem] detail-product-container">
      <div className="fixed -left-[15.25rem] -top-[16rem] -z-20">
        <Image
          height={200}
          width={200}
          className="w-[61rem] h-[61rem]"
          src="/img/detail/EllipseLightBlue.svg"
          alt=""
        />
      </div>
      <div className="fixed -right-[15.25rem] -top-[16rem] -z-20">
        <Image
          height={200}
          width={200}
          className="w-[61rem] h-[61rem]"
          src="/img/detail/EllipseLightOrange.svg"
          alt=""
        />
      </div>
      {/* section 1 */}
      <div
        ref={refHeightProductInfo}
        className="flex justify-center w-[87.5rem] mx-auto max-md:w-full max-md:px-[3.2rem]"
      >
        <div className="w-full  flex max-md:flex-col mb-[5rem] max-md:mb-[0]">
          <div>
            <ImageProduct
              dataInit={dataInitDetail}
              imageChangeColor={variantProductSelected.image}
            />
          </div>
          {/* right */}
          <div className="relative grow">
            <div className="sticky top-[7rem]" >
              <InfoProduct
                dataTransportRes={dataTransportRes}
                dataChangeRes={dataChangeRes}
                dataInit={dataInitDetail}
                isLoadingAddToCart={isLoadingAddToCart}
                handleAddToCart={
                  session !== null
                    ? handleAddToCartAPI
                    : handleAddToCartLocalStorage
                }
                handleChangeColorGetApi={handleChangeColorGetApi}
                variantProductSelected={variantProductSelected}
                dataListColor={dataListColor}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div
        id="check-scroll-to-show"
        className="px-[6.25rem] border-t border-b border-teal-300 max-md:mt-[5.6rem] max-md:py-[4.27rem] max-md:px-[3.2rem] max-md:bg-[#EEFBFB] max-md:border-0"
      >
        <div className="w-[87.5rem] mx-auto flex justify-between text-[#454545] max-md:flex-wrap max-md:bg-[#EEFBFB] py-[1.875rem] max-md:w-full max-md:mx-0 max-md:py-[0rem]">
          <Link
            href="/chinh-sach-bao-hanh"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2"
          >
            <div className="max-md:hidden">
              <ICProtected height="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICProtected height="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:ml-[2.13rem] max-md:text-[2.4rem] max-md:leading-[3.12rem]">
              Bảo hành trọn đời
            </p>
          </Link>
          <Link
            href="/do-mat-mien-phi"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2"
          >
            <div className="max-md:hidden">
              <ICFree height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICFree height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] not-italic leading-[1.575rem] font-bold ml-[0.75rem] max-md:ml-[2.13rem] max-md:text-[2.4rem] max-md:leading-[3.12rem]">
              Đo mắt miễn phí
            </p>
          </Link>
          <Link
            href="/thu-cu-doi-moi"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2 max-md:mt-[4.27rem]"
          >
            <div className="max-md:hidden">
              <ICChange height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICChangeMobile height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:ml-[2.13rem] max-md:text-[2.4rem] max-md:leading-[3.12rem]">
              Thu cũ đổi mới
            </p>
          </Link>
          <Link
            href="/ve-sinh-va-bao-quan-kinh"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2 max-md:mt-[4.27rem]"
          >
            <div className="max-md:hidden">
              <ICClean height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICClean height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:ml-[2.13rem] max-md:text-[2.4rem] max-md:leading-[3.12rem]">
              Vệ sinh và bảo quản kính
            </p>
          </Link>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[9.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
            TRÒNG KÍNH BỔ TRỢ
          </h4>
          <div className="hover-see-more flex items-center justify-center h-full  hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#F58F5D" />
            <Link
              href="/cua-hang"
              className="text-[1.125rem] leading-[1.4625rem] font-bold ml-[0.62rem] text-right max-md:hidden"
            >
              Xem thêm
            </Link>
            <Link
              href="/cua-hang"
              className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent keySlide="support-lenses" data={dataGlasses} />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            {dataGlasses[0] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[0]} />
              </div>
            )}
            {dataGlasses[1] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[1]} />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {dataGlasses[2] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[2]} />
              </div>
            )}
            {dataGlasses[3] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[3]} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <Link href="/danh-muc-san-pham/trong-kinh">
            <p className="text-[#F58F5D] text-[3.2rem] ml-[1.07rem] not-italic font-extrabold leading-[4.48rem] text-right pt-[0.8rem]">
              Xem tất cả
            </p>
          </Link>
        </div>
      </div>
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem] max-md:h-[12rem]">
          <h4 className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem] max-md:leading-[7.46667rem]">
            TRÒNG KÍNH TƯƠNG TỰ
          </h4>
          <div className="hover-see-more flex items-center justify-center h-full hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#A9A9A9" />
            <Link
              href="/cua-hang"
              className="text-[1.125rem] leading-[1.4625rem] font-bold ml-[0.62rem] text-right max-md:hidden"
            >
              Xem thêm
            </Link>
            <Link
              href="/cua-hang"
              className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent
            keySlide="same-glasses"
            data={dataListSimilarGlasses}
          />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            {dataListSimilarGlasses[0] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[0]} />
              </div>
            )}
            {dataListSimilarGlasses[1] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[1]} />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {dataListSimilarGlasses[2] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[2]} />
              </div>
            )}
            {dataListSimilarGlasses[3] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[3]} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <Link href="/danh-muc-san-pham/trong-kinh">
            <p className="text-[#F58F5D] text-[3.2rem] ml-[1.07rem] not-italic font-extrabold leading-[4.48rem] text-right pt-[0.8rem]">
              Xem tất cả
            </p>
          </Link>
        </div>
      </div>

      {/* section 4 */}
      <RecommendProduct
        dataProductGlasses={dataProductGlasses}
        dataDataLenses={dataDataLenses}
        dataProductByAnyCategory={dataProductByAnyCategory}
      />
      {/* section fix */}

      <div
        className={`h-[7.5rem] ${
          isShowItemProduct ? '-bottom-[0rem]' : '-bottom-[7.5rem]'
        }  fixed transition-all duration-150  z-50 bg-[#FAFAFA] w-full px-[6.25rem] border-t-[1px] border-t-[#ECECEC] max-md:hidden`}
      >
        <Fixed
          isLoadingAddToCart={isLoadingAddToCart}
          dataInit={dataInitDetail}
          handleAddToCart={
            session?.user.token && session.user.token.length > 0
              ? handleAddToCartAPI
              : handleAddToCartLocalStorage
          }
          variantProductSelected={variantProductSelected}
          handleChangeColorGetApi={handleChangeColorGetApi}
          dataListColor={dataListColor}

        />
      </div>
    </div>
    // </DetailContext.Provider>
  );
}

export default ProductDetail;
