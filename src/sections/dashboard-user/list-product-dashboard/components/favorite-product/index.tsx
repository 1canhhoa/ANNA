import React from 'react';
import map from 'lodash.map';
import Image from 'next/image';
import Link from 'next/link';
import ICView from '@/components/Icons/ICView';
import { formatCurrencyVND } from '@/ultils/format-price';
import ICTrash from '@/components/Icons/ICTrash';
import './style.css';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

interface IProps {
  dataWishList?: any;
  handleDeleteProductWishList: (id: number) => Promise<void>;
  isLoading: boolean;
}
function FavoriteProduct(props: IProps) {
  const { dataWishList, handleDeleteProductWishList, isLoading } = props;

  return (
    <div className="mt-[1.5rem] w-full max-md:mt-[8rem]">
      <h3 className="text-title-level-black text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[4.5rem] max-md:pb-[3rem]">
        Sản phẩm yêu thích
      </h3>
      <div className="list-item-product-dashboard mt-[1rem] flex justify-between max-md:flex-col">
        <div className="list-product-cart">
          <div className="header-list-product ">
            <div className="info-product-title">
              <div className="font-bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
                Thông tin sản phẩm
              </div>
            </div>
            <div className="price-product-title">
              <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
                Đơn giá
              </div>
            </div>
            <div className="amount-product-title">
              <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
                Phân loại
              </div>
            </div>
            <div className="total-product-title">
              <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic  leading-[1.5rem]">
                Số luợng
              </div>
            </div>
            <div className="total-product-title">
              <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
                Thao tác
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-y-auto">
            {dataWishList && dataWishList.length > 0 ? (
              map(dataWishList, (item: any, index: number) => (
                <div key={index} className="body-list-product">
                  <div className="row-body-list-product">
                    <div className="info-product">
                      <div className="h-[5rem] max-md:h-[20rem] flex items-center max-md:w-full">
                        <Image
                          width={70}
                          height={70}
                          className="h-full rounded-[0.4rem] object-cover w-[5rem] max-md:w-[18.133rem] max-md:h-[18.133rem]"
                          src={item?.product?.image ?? '/img/no_image.jpg'}
                          alt="img product"
                        />
                        <div className="h-full ml-[1rem] flex flex-col justify-center max-md:ml-[3.25rem] max-md:justify-between max-md:w-full">
                          <div>
                            <h4 className="text-[1rem] leading-[1.875rem] font-Nexa-Medium max-md:text-[3.33rem] max-md:leading-[4.5rem] max-md:hidden">
                              {item?.product?.name}
                            </h4>
                            <Link
                              href="/detail-order"
                              className="hidden max-md:block text-[1rem] leading-[1.875rem] font-Nexa-Medium max-md:text-[3.33rem] max-md:leading-[4.5rem]"
                            >
                              Gọng kính thời trang KL060
                            </Link>
                            <div className="flex items-center max-md:mt-[1rem]">
                              <h4 className="text-[1rem] leading-[1.875rem] font-Nexa-Medium max-md:text-[3.33rem] max-md:leading-[5rem]">
                                màu:
                              </h4>
                              <div className="h-[0.875rem] w-[0.875rem] rounded-full bg-black ml-[0.3rem] max-md:h-[3rem] max-md:w-[3rem] max-md:mt-[0.8rem] max-md:ml-[1rem]" />
                            </div>
                          </div>
                          <Link
                            href="/detail-order"
                            type="button"
                            className="hidden max-md:block max-md:text-[3.33rem] underline max-md:leading-[4.5rem] text-blueAnna"
                          >
                            <ICView fill="#55D5D2" width="6rem" height="5rem" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ alignItems: 'start', justifyContent: 'center' }}
                      className="price-product flex-col"
                    >
                      <div className="text-[#FF594F] font-Nexa-Normal text-[1rem] not-italic leading-[1.6875rem]">
                        {formatCurrencyVND(
                          item?.product?.price ? item?.product?.price : '0'
                        )}
                      </div>
                      <div className="text-[#A6A6A6] font-Nexa-Normal text-[0.875rem] line-through not-italic leading-[1.6875rem]">
                        200.000đ
                      </div>
                    </div>
                    <div className="amount-product">
                      <p className="text-[1rem] leading-[1.5rem] font-Nexa-Normal">
                        Gọng kính
                      </p>
                    </div>
                    <div className="total-product ">
                      <span className="text-[1rem] leading-[1.5rem] font-Nexa-Normal">
                        1
                      </span>
                    </div>
                    <div className="total-product flex justify-center items-center">
                      {isLoading !== false ? (
                        <LoadingGlobal stroke="black" />
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            item.wishlist_id &&
                            handleDeleteProductWishList(item.wishlist_id)
                          }
                          className="flex justify-center items-center grow"
                        >
                          <ICTrash />
                        </button>
                      )}
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center">
                <Image
                  src="/img/no-data.avif"
                  alt="banner-aboutus"
                  height={300}
                  width={300}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteProduct;
