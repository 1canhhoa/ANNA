// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import ICPhone from '@/components/Icons/ICPhone';
// import './style.css';
// import { formatCurrencyVND } from '@/ultils/format-price';
// import map from 'lodash.map';
// import Link from 'next/link';
// import { formatDate } from '@/ultils/format-date';

// interface IProps {
//   dataGetDetailOrder?: any;
// }
// function ViewCheckingOrder(props: IProps) {
//   const { dataGetDetailOrder } = props;

//   const handleConvertAddress = () => {
//     const company = `${dataGetDetailOrder?.shipping?.company}${
//       dataGetDetailOrder?.shipping?.company ? ',' : ''
//     }`;
//     const address1 = `${dataGetDetailOrder?.shipping?.address_1}${
//       dataGetDetailOrder?.shipping?.address_1 ? ',' : ''
//     }`;
//     const address2 = `${dataGetDetailOrder?.shipping?.address_2}${
//       dataGetDetailOrder?.shipping?.address_2 ? ',' : ''
//     }`;
//     const district = `${dataGetDetailOrder?.shipping?.state}${
//       dataGetDetailOrder?.shipping?.state ? ',' : ''
//     }`;
//     const city = `${dataGetDetailOrder?.shipping?.city}${
//       dataGetDetailOrder?.shipping?.city ? '.' : ''
//     }`;
//     const country = `${dataGetDetailOrder?.shipping?.country}${
//       dataGetDetailOrder?.shipping?.country ? '.' : ''
//     }`;

//     return `${company} ${address1} ${address2} ${district} ${city} ${country}`;
//   };

//   return (
//     <div className="checking-order w-full pb-[3rem]">
//       <h3 className="text-[1.5rem] not-italic font-semibold leading-[1.5rem] max-md:pb-[3rem] max-md:text-[5rem] max-md:leading-[5rem]">
//         Chi tiết đơn hàng
//       </h3>
//       <div className="mt-[0.8rem] list-product-detail-order">
//         <div className="info-order-dashboard w-[27.4375rem] h-[5.8125rem] flex justify-between items-center px-[1rem] rounded-[1rem] max-md:w-full max-md:h-[14rem] max-md:rounded-[10rem] max-md:px-[4.93333rem] max-md:leading-[3rem]">
//           <div>
//             <div className="flex items-center max-md:hidden">
//               <ICPhone stroke="black" height="1rem" width="1rem" />
//               <h3 className="ml-[0.2rem] leading-[1.5rem] text-[0.875rem] not-italic font-medium max-md:text-[2.93333rem] max-md:leading-[3rem]">
//                 {/* 03.07.2022, 10:01 AM */}
//                 {formatDate(dataGetDetailOrder?.date_created?.date)}
//               </h3>
//             </div>
//             <div className="items-center hidden max-md:flex ">
//               <ICPhone stroke="black" height="3rem" width="3rem" />
//               <h3 className="leading-[1.5rem] text-[0.875rem] not-italic font-medium max-md:text-[2.93333rem] max-md:leading-[3rem] ml-[2rem]">
//                 {/* 03.07.2022, 10:01 AM */}
//                 {formatDate(dataGetDetailOrder?.date_created?.date)}
//               </h3>
//             </div>
//             <div className="flex max-md:mt-[2.13rem]">
//               <h3 className="ml-[0.2rem] leading-[1.5rem] text-[0.875rem] font-medium not-italic font-Nexa-Normal max-md:text-[2.93333rem] max-md:leading-[3rem]">
//                 Đơn hàng ID:{' '}
//               </h3>
//               <h3 className="ml-[0.2rem] leading-[1.5rem] text-[0.875rem] font-medium not-italic font-Nexa-Normal max-md:text-[2.93333rem] max-md:leading-[3rem] ">
//                 {dataGetDetailOrder?.id}
//               </h3>
//             </div>
//           </div>
//           <div className="w-[6.25rem] h-[1.875rem] bg-[#D9F3E2] flex justify-center font-semibold items-center text-[0.75rem] not-italic rounded-[0.25rem] text-[#00AD3B] max-md:text-[2.999rem] max-md:h-[7rem] max-md:w-[15rem] max-md:rounded-[4rem]">
//             {dataGetDetailOrder?.status}
//           </div>
//         </div>
//         <div className="flex justify-between mt-[1.5rem]">
//           <div className="w-full pr-[1rem]">
//             <div className="header-list-product ">
//               <div className="info-product-title">
//                 <div className="font-bold text-white text-[1rem] not-italic leading-[1.5rem]">
//                   Thông tin sản phẩm
//                 </div>
//               </div>
//               <div className="price-product-title">
//                 <div className="font-bold text-white text-[1rem] not-italic leading-[1.5rem]">
//                   Đơn giá
//                 </div>
//               </div>
//               <div className="amount-product-title">
//                 <div className="font-bold text-white text-[1rem] not-italic leading-[1.5rem]">
//                   Phân loại
//                 </div>
//               </div>
//               <div className="total-product-title">
//                 <div className="font-bold text-white text-[1rem] not-italic  leading-[1.5rem]">
//                   Số luợng
//                 </div>
//               </div>
//               <div className="total-product-title">
//                 <div className="font-bold text-white text-[1rem] not-italic leading-[1.5rem]">
//                   Thao tác
//                 </div>
//               </div>
//             </div>
//             <div className="body-list-product">
//               {dataGetDetailOrder ? (
//                 map(dataGetDetailOrder?.product, (item: any, index: number) => (
//                   <div key={index} className="row-body-list-product">
//                     {index !== 0 && <hr />}
//                     <div className="info-product">
//                       <div className="flex items-center">
//                         <Image
//                           width={70}
//                           height={70}
//                           className="h-[5rem] rounded-[0.4rem] object-cover w-[5rem] max-md:w-[18.133rem] max-md:h-[20rem]"
//                           src={item?.image ?? '/img/no_image.jpg'}
//                           alt="img product"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         alignItems: 'start',
//                         justifyContent: 'center',
//                       }}
//                       className="price-product flex-col"
//                     >
//                       <div className="text-[#FF594F] font-medium text-[1rem] not-italic leading-[1.6875rem]">
//                         {item?.price &&
//                           formatCurrencyVND(item.price.toString())}
//                       </div>
//                     </div>
//                     <div className="amount-product">
//                       <p className="text-[1rem] font-medium leading-[1.5rem] font-Nexa-Normal">
//                         {item?.category}
//                       </p>
//                     </div>
//                     <div className="total-product ">
//                       <span className="text-[1rem] font-medium leading-[1.5rem] font-Nexa-Normal">
//                         {item?.quantity}
//                       </span>
//                     </div>
//                     <Link
//                       href={`/san-pham/${item?.slug}`}
//                       className="total-product font-medium flex justify-center items-center"
//                     >
//                       <div className="cursor-pointer max-md:text-[3.733rem] underline max-md:leading-[4.5rem] text-blueAnna">
//                         Mua lại
//                       </div>
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div className="w-full flex justify-center">
//                   <Image
//                     src="/img/no-data.svg"
//                     alt="banner-aboutus"
//                     height={300}
//                     width={300}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between max-md:flex-col">
//         <div className="w-[60%] px-[1.5rem] py-[1rem] bg-[#F6FDFD] rounded-[0.5rem] mt-[1.5rem] max-md:w-full max-md:py-[3rem] max-md:px-[3rem] max-md:rounded-[4rem]">
//           <h3 className="text-[1rem] not-italic font-bold mb-[0.7rem] max-md:text-[4.26667rem] max-md:font-Nexa-Bold max-md:mb-[2rem]">
//             Thông tin thanh toán
//           </h3>
//           <hr className="bg-[#E5EAEA]" />
//           <div className="mt-[0.75rem] mb-[0.3rem] flex justify-between max-md:mt-[2rem]">
//             <span className="text-[1rem] font-medium not-italic max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//               Tổng tiền:
//             </span>
//             <span className="text-[0.875rem] font-semibold leading-[1.3125rem] font-Nexa-Medium not-italic max-md:text-[3.2rem] max-md:leading-[5.6rem]">
//               {formatCurrencyVND(dataGetDetailOrder?.total?.toString())}
//             </span>
//           </div>
//           <div className="mb-[0.3rem] flex justify-between">
//             <span className="text-[1rem] font-medium not-italic max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//               Vận chuyển:
//             </span>
//             <span className="text-[0.875rem] font-semibold leading-[1.3125rem] font-Nexa-Medium not-italic max-md:text-[3.2rem] max-md:leading-[5.6rem]">
//               540.000 đ
//             </span>
//           </div>
//           <div className="mb-[0.75rem] flex justify-between">
//             <span className="text-[1rem] font-medium not-italic max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//               Phương thức thanh toán:
//             </span>
//             <span className="text-[0.875rem] leading-[1.3125rem] font-semibold not-italic max-md:text-[3.2rem] max-md:leading-[5.6rem]">
//               {dataGetDetailOrder?.payment_method_title}
//             </span>
//           </div>
//           <hr className="bg-[#E5EAEA]" />
//           <div className="mb-[0.25rem] flex justify-between mt-[1rem]">
//             <span className="text-[1rem] font-medium not-italic max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//               Thành tiền:
//             </span>
//             <span className="text-[0.875rem] leading-[1.3125rem] font-extrabold not-italic max-md:text-[3.2rem] max-md:leading-[5.6rem]">
//               {formatCurrencyVND(dataGetDetailOrder?.total?.toString())}
//             </span>
//           </div>
//         </div>
//         <div className="w-[38%] px-[1.5rem] h-fit py-[1rem] bg-[#F6FDFD] rounded-[0.5rem] mt-[1.5rem] max-md:w-full max-md:py-[3rem] max-md:px-[3rem] max-md:rounded-[4rem]">
//           <h3 className="text-[1rem] not-italic font-bold mb-[0.7rem] max-md:text-[4.26667rem] max-md:font-Nexa-Bold max-md:mb-[2rem]">
//             Địa chỉ nhận hàng
//           </h3>
//           <hr className="bg-[#E5EAEA]" />
//           <h3 className="text-[0.875rem] not-italic font-medium pt-[0.6rem] max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//             {`${dataGetDetailOrder?.shipping?.first_name} ${dataGetDetailOrder?.shipping?.last_name}`}
//           </h3>
//           <h3 className="text-[0.875rem] not-italic font-medium pt-[0.6rem] max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//             {dataGetDetailOrder?.phone}
//           </h3>
//           <h3 className="text-[0.875rem] not-italic font-medium pt-[0.6rem] max-md:text-[3.2rem] max-md:font-Nexa-Bold">
//             {handleConvertAddress()}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewCheckingOrder;
