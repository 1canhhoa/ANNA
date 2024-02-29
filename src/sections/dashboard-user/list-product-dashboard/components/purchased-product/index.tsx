import React from 'react';
import Link from 'next/link';
import ICView from '@/components/Icons/ICView';
import { formatCurrencyVND } from '@/ultils/format-price';
import './style.css';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

interface IProps {
  dataGetListOrder?: any;
  isLoading: boolean;
}
function PurchasedProduct(props: IProps) {
  const { dataGetListOrder, isLoading } = props;

  const handleTimeStampToDate = (date: Date) => {
    const dateConvert = new Date(date);

    const resultDate = `${dateConvert.getDate()}/${
      dateConvert.getMonth() + 1
    }/${dateConvert.getFullYear()}
      `;
    return resultDate;
  };

  const handleQuantityProduct = (listProduct: any) => {
    let quantity = 0;
    listProduct.map((itemProduct: any) => (quantity += itemProduct.quantity));

    return quantity;
  };

  return (
    <div className="mt-[1.5rem] max-md:mt-[8rem]">
      <h3 className="text-title-level-black text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[4.5rem] max-md:pb-[3rem]">
        Sản phẩm đã mua
      </h3>
      <div className="list-purchased-product-dashboard mt-[1rem] flex justify-between max-md:flex-col">
        <div className="list-product-cart ">
          <div className="header-list-product">
            <div className="cell-header">Mã đơn hàng</div>
            <div className="cell-header">Số lượng</div>
            <div className="cell-header">Trạng thái</div>
            <div className="cell-header">Ngày tạo</div>
            <div className="cell-header">Tổng</div>
            <div className="cell-header flex justify-center">Thao tác</div>
          </div>
          <hr className="w-full" />
          <div className="md:overflow-y-auto">
            {isLoading ? (
              <LoadingGlobal />
            ) : (
              dataGetListOrder &&
              dataGetListOrder.map((item: any, index: number) => (
                <div key={index} className="body-list-product">
                  <div className="row-body-list-product">
                    <div className="cell-body w-[10rem]">{item?.order_id}</div>
                    <div className="cell-body">
                      {item?.product_name &&
                        handleQuantityProduct(item.product_name)}
                    </div>
                    <div className="cell-body">
                      <p className="text-[1rem] leading-[1.5rem] max-md:text-[2.7rem] max-md:leading-[3.5rem]">
                        {item?.order_status}
                      </p>
                    </div>
                    <div className="cell-body">
                      <p className="text-[1rem] leading-[1.5rem] w-[8rem] max-md:min-w-[23rem] overflow-hidden max-md:text-[2.7rem] max-md:leading-[3.5rem]">
                        {item?.order_date?.date &&
                          handleTimeStampToDate(item.order_date?.date)}
                      </p>
                    </div>
                    <div className="cell-body ">
                      <span className="text-[1rem] leading-[1.5rem] max-md:text-[2.7rem] max-md:leading-[3.5rem]">
                        {formatCurrencyVND(item?.order_total)}
                      </span>
                    </div>
                    <div className="cell-body flex justify-center items-center">
                      <Link
                        href={`/detail-order/${item.order_id}`}
                        type="button"
                        className="flex justify-center items-center grow max-md:hidden"
                      >
                        <ICView fill="#55D5D2" width="1.5rem" height="1.5rem" />
                      </Link>
                      <Link
                        href={`/detail-order/${item.order_id}`}
                        type="button"
                        className="hidden  max-md:flex justify-center items-center grow"
                      >
                        <ICView fill="#55D5D2" width="5rem" height="5rem" />
                      </Link>
                    </div>
                  </div>
                  <hr className="w-full" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasedProduct;
