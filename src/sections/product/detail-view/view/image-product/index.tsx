'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { IDetailProductRes } from '@/types/types-general';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ZoomScaleImage from '@/components/component-ui-custom/zoom-scale-image';
import { Skeleton } from '@/components/ui/skeleton';
import ICHeart2 from '@/components/Icons/ICHeart2';
import './style.css';
import { fetchDataAuthen } from '@/lib/post-data';
import { keyLocalStorage } from '@/configs/config';
import { onSuccess } from '@/ultils/notification';
import { useSession } from 'next-auth/react';
import { getDataLocalStorage } from '@/ultils/get-data-localstorage';
import { useBoolean } from '@/hooks/use-boolean';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { DetailContext } from '@/sections/product/detail-view/detail';

interface IProps {
  dataInit?: IDetailProductRes;
  imageChangeColor?: any;
}

function SlideProductMobile(props: any) {
  const { listImageProduct } = props;

  return (
    <div className="slider-product-detai-mobile max-md:h-[98.9333rem] ">
      {typeof listImageProduct === 'string' ? (
        <Image
          width={93}
          height={91}
          className="h-full w-full object-cover  max-md:min-w-full rounded-[5.33333rem]"
          src={listImageProduct ?? '/img/no_image.jpg'}
          alt=""
        />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            // el: '.swiper-pagination',
            clickable: true,
          }}
          loop
          modules={[Pagination, Navigation]}
          // className="mySwiper h-full rounded-[1rem] overflow-hidden"
          className="mySwiper h-full rounded-[1rem]"
        >
          {listImageProduct &&
            listImageProduct.map((item: string, index: number) => (
              <SwiperSlide key={index} className="w-full h-full">
                <Image
                  width={500}
                  height={500}
                  className="h-[91.73333rem] w-full object-cover  max-md:min-w-full rounded-[5.33333rem]"
                  src={item ?? '/img/no_image.jpg'}
                  alt=""
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      {/* <div className="swiper-pagination" /> */}
    </div>
  );
}

function ImageProduct(props: IProps) {
  const { dataInit, imageChangeColor } = props;

  const { data: session } = useSession();
  const isLoved = useBoolean(false);
  const isLoadingLoved = useBoolean(false);
  const [itemImagePreview, setItemImagePreview] = useState<any>();

  const handleChangeImage = (value: string): void => {
    setItemImagePreview(value);
  };

  const handleAddWishlist = async () => {
    if (dataInit?.id) {
      // save status add or remove product to wishlist
      let isAddWishlist = false;

      // get data to local storage
      let getListWishlist =
        getDataLocalStorage(keyLocalStorage.keyProductWishlist) === null
          ? []
          : getDataLocalStorage(keyLocalStorage.keyProductWishlist);

      const findIdAvailabel = getListWishlist.filter(
        (id: any) => id === dataInit.id
      );

      if (findIdAvailabel.length === 0) {
        getListWishlist.push(dataInit.id);
        isAddWishlist = true;
      } else {
        getListWishlist = getListWishlist.filter(
          (item: any) => item !== dataInit.id
        );
        isAddWishlist = false;
      }

      localStorage.setItem(
        keyLocalStorage.keyProductWishlist,
        JSON.stringify(getListWishlist)
      );

      // noti add or remove to wishlist when not logined
      if (session === null) {
        isLoved.onToggle();
        onSuccess({
          message: isAddWishlist
            ? 'Đã thêm vào danh sách yêu thích!'
            : 'Đã loại khỏi danh sách yêu thích!',
        });

        return;
      }

      isLoadingLoved.onTrue();

      if (isAddWishlist) {
        try {
          await fetchDataAuthen({
            url: 'wp-json/custom/v1/add-product-wishlist',
            method: 'post',
            body: JSON.stringify({ product_id: dataInit.id }),
            token: session?.user?.token,
          }).then(() => {
            isLoved.onTrue();
            isLoadingLoved.onFalse();
            onSuccess({
              message: 'Đã thêm vào danh sách yêu thích!',
            });
          });
        } catch (error: any) {
          isLoadingLoved.onFalse();
        }

        return;
      }

      try {
        await fetchDataAuthen({
          url: 'wp-json/custom/v1/delete-wishlist',
          method: 'delete',
          body: JSON.stringify({ wishlist_items: [{ id: dataInit.id }] }),
          token: session?.user?.token,
        }).then(() => {
          isLoved.onTrue();
          isLoadingLoved.onFalse();
          onSuccess({
            message: 'Đã loại khỏi danh sách yêu thích!',
          });
        });
      } catch (error: any) {
        isLoadingLoved.onFalse();
      }
    }
  };

  useEffect(() => {
    const listWishList =
      getDataLocalStorage(keyLocalStorage.keyProductWishlist) === null
        ? []
        : getDataLocalStorage(keyLocalStorage.keyProductWishlist);

    const findIdLoved = listWishList.filter((id: any) => id === dataInit?.id);
    if (findIdLoved.length > 0) {
      isLoved.onTrue();
    } else isLoved.onFalse();
  }, [dataInit]);

  useEffect(() => {
    setItemImagePreview(imageChangeColor);
  }, [imageChangeColor]);

  useEffect(() => {
    setItemImagePreview(dataInit?.featuredImage);
  }, []);

  return (
    <div className="left-detail w-[47rem] flex-col justify-center max-md:block max-md:w-full max-md:mb-[1.5rem]">
      {/* {JSON.stringify(dataGetWishList.data)} */}
      <div className="max-sm:h-full w-full relative">
        <button
          type="button"
          onClick={handleAddWishlist}
          className=" absolute top-[3.22rem] right-[2.37rem] z-20 select-none "
        >
          {isLoadingLoved.value ? (
            <div className="h-[3.875rem] w-[3.875rem] rounded-full flex items-center justify-center bg-white">
              <LoadingGlobal width="1.3rem" height="1.3rem" stroke="black" />
            </div>
          ) : (
            <ICHeart2 fill={isLoved.value ? '#55D5D2' : 'white'} />
          )}
        </button>
        <div className="max-md:hidden h-[47rem] w-[47rem] rounded-[1.875rem] overflow-hidden">
          {itemImagePreview && itemImagePreview.length === 0 ? (
            <Skeleton className="h-[47rem] w-[47rem]" />
          ) : (
            <div className="h-full w-full">
              {itemImagePreview ? (
                <ZoomScaleImage
                  width="47rem"
                  height="47rem"
                  image={itemImagePreview}
                  scale={1.5}
                  alt="image product"
                />
              ) : (
                <Image
                  height={200}
                  width={200}
                  className="w-[47rem] h-[47rem] object-cover"
                  src="/img/about-us/content2.jpg"
                  alt="no-image"
                />
              )}
            </div>
          )}
        </div>
        <div className="hidden max-md:block w-full mt-[5rem]">
          <SlideProductMobile
            listImageProduct={dataInit?.galleryImgs ?? dataInit?.featuredImage}
          />
        </div>
      </div>
      <div className="flex min-w-full mt-[1rem] justify-between max-md:hidden">
        <div className="w-full relative grid grid-cols-2 gap-[1rem]">
          {/* {dataInit?.galleryImgs && ( */}
          {/*  <Swiper */}
          {/*    slidesPerView={4} */}
          {/*    modules={[Navigation, Pagination]} */}
          {/*    navigation={{ */}
          {/*      prevEl: `.prev-${123}`, */}
          {/*      nextEl: `.next-${123}`, */}
          {/*    }} */}
          {/*    spaceBetween={15} */}
          {/*    className="mySwiper" */}
          {/*  > */}
          {/*    {dataInit?.galleryImgs?.map((item: any, index: number) => ( */}
          {/*      <SwiperSlide key={index}> */}
          {/*        <div role="button" onClick={() => handleChangeImage(item)}> */}
          {/*          <Image */}
          {/*            width={52} */}
          {/*            height={52} */}
          {/*            className="flex h-[12.25rem] w-[12.25rem] object-cover" */}
          {/*            src={item ?? '/img/no_image.jpg'} */}
          {/*            alt="" */}
          {/*          /> */}
          {/*        </div> */}
          {/*      </SwiperSlide> */}
          {/*    ))} */}

          {/*    <div */}
          {/*      className={`prev-${123}] z-10 top-[50%] -translate-y-1/2 left-2 absolute w-[3rem] h-[3rem] bg-white opacity-50 flex justify-center items-center rounded-full cursor-pointer`} */}
          {/*    > */}
          {/*      <ICArrowLeft stroke="#333333" /> */}
          {/*    </div> */}
          {/*    <div */}
          {/*      className={`next-${123} z-10  top-[50%] -translate-y-1/2 right-2 absolute w-[3rem] h-[3rem]  bg-white opacity-50 flex justify-center items-center rounded-full cursor-pointer`} */}
          {/*    > */}
          {/*      <ICArrowRight stroke="#333333" /> */}
          {/*    </div> */}
          {/*  </Swiper> */}
          {/* )} */}
          {dataInit?.galleryImgs &&
            dataInit?.galleryImgs.map((item, index) => (
              <div
                key={index}
                role="button"
                onClick={() => handleChangeImage(item)}
                className="rounded-[1.875rem]"
              >
                <Image
                  width={500}
                  height={500}
                  className="flex h-[25.5rem] w-[25.5rem] object-cover rounded-[1.875rem]"
                  src={item ?? '/img/no_image.jpg'}
                  alt="image product"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ImageProduct;
