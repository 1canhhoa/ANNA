'use client';

import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import ViewCheckingOrder from '@/sections/checking-order/view-checking-order';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import Link from 'next/link';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import { keyLocalStorage, paymentOnepay } from '@/configs/config';
import { convertStr2URL } from '@/ultils/utils';
import pickBy from 'lodash.pickby';
import CryptoJS from 'crypto-js';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError } from '@/ultils/notification';
import { useSession } from 'next-auth/react';
import { ProductCartContext } from '@/context-provider';
import { useBoolean } from '@/hooks/use-boolean';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { useRouter } from 'next/navigation';

interface IProps {
  slug: string;
  searchParams: any;
  dataCheckingOrder?: any;
  name?: string;
  idOrder: any;
}

function PaymentSuccess(props: IProps) {
  const { slug, searchParams, dataCheckingOrder, idOrder } = props;
  const { data: session } = useSession();
  const router = useRouter();

  const { clearDataCartProductContext } = useContext(ProductCartContext);
  const isLoading = useBoolean(true);
  const [dataBill, setDataBill] = useState<any>({
    date_created: '',
    payment_method_title: '',
    total: '',
    product: [
      {
        image: '',
        price: '',
        category: '',
        quantity: '',
        slug: '',
      },
    ],
    id: ""
  });

  const generateParams = (pickVpc = false) => {
    const reqParam = {
      vpc_AccessCode: paymentOnepay.ACCESS_CODE,
      vpc_Command: 'queryDR',
      vpc_MerchTxnRef: searchParams?.vpc_MerchTxnRef,
      vpc_Merchant: paymentOnepay.MERCHANT_ID,
      vpc_Password: 'op123456',
      vpc_User: 'op01',
      vpc_Version: '2',
    };
    if (pickVpc) {
      const pickParams = pickBy(
        reqParam,
        (_, key) => key.startsWith('vpc_') || key.startsWith('user_')
      );
      return convertStr2URL(pickParams);
    }
    return convertStr2URL(reqParam);
  };
  const handleSecureHash = () => {
    const paramsGenerate = generateParams(true);
    const secretWordArray = CryptoJS.enc.Hex.parse(
      paymentOnepay.SECRET_KEY_HASH
    );
    const hash = CryptoJS.HmacSHA256(paramsGenerate, secretWordArray);
    const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase();
    return vpc_SecureHash;
  };

  let token = searchParams.token ? session?.user?.token: undefined;
  useEffect(() => {
    console.log("Running");
    console.log(localStorage.getItem('success'));
      if(searchParams.token === "true" && !token)return;
      if(localStorage.getItem('success')) return;
      if (
        typeof window !== 'undefined' &&
        localStorage.getItem(keyLocalStorage.keyFormPayment) !== null &&
        localStorage.getItem(keyLocalStorage.keyFormPayment) !== undefined
      ) {
        const dataF = localStorage.getItem(keyLocalStorage.keyFormPayment);
  
        if (!dataF) {
          return;
        }
  
        const parseDataF = JSON.parse(dataF);
        const fetcher = async () => {
  
          const res = await fetch('/api/check-payment-onepay', {
            method: 'POST',
            body: JSON.stringify({
              vpc_AccessCode: paymentOnepay.ACCESS_CODE,
              vpc_MerchTxnRef: searchParams?.vpc_MerchTxnRef,
              vpc_Merchant: paymentOnepay.MERCHANT_ID,
              vpc_Password: 'op123456',
              vpc_User: 'op01',
              vpc_Version: '2',
              vpc_SecureHash: handleSecureHash(),
            }),
          });
  
          const data = res.json();
          return data;
        };
  
        fetcher()
          .then((res) => {
            const createOrder = async () => {
              console.log("create")
            
              try {
                await fetchDataAuthen({
                  url: 'wp-json/custom/v1/create-order',
                  method: 'post',
                  body: JSON.stringify(parseDataF.dataSubmitTmp),
                  token: token,
                })
                  .then((res: any) => {
                    const currentDate = new Date();
                    const parseDataF = JSON.parse(dataF);
  
                    const productRes = parseDataF.product;
                    const newProductRes = productRes.map((item: any, index:any)=>{
                        return{
                         ...item,
                         image:item.product_image,
                         name: res?.item?.product? res?.item?.product[index]?.productName:item.product_name,
                         total: res?.item?.product? res?.item?.product[index]?.total:0,
                         slug: res?.item?.product? res?.item?.product[index]?.productSlug:""
                        }
                    })
                    const dataOrderd = Object.assign(
                      res.item,
                      { date_created: currentDate },
                      { product: newProductRes},
                      {id: res.order_id}
                    );

                    setDataBill(dataOrderd);
                    clearDataCartProductContext();
                    localStorage.setItem("success",'true');
                    isLoading.onFalse();

                    console.log("Finish")
                  })
                  .catch(() => {});
              } catch (error: any) {
                onError();
                isLoading.onFalse();
              }
            };
            createOrder();
  
          })
          .catch((res) => console.log('error'));
      }

  }, [token]);

  useEffect(()=>{
    return()=>{
      localStorage.removeItem("success")
    }
  },[])

  return (
    <div className="">
      <div className="h-screen  max-md:h-fit max-md:mb-[5rem]">
        {isLoading.value ? (
          <div className="flex justify-center items-center h-full">
            <LoadingGlobal stroke="black" height={4} width={4} />
          </div>
        ) : (
          <div className="flex max-md:flex-col h-full">
            <div className="max-md:hidden w-[38.5275rem] h-[40.1875rem] absolute bottom-0 left-0 -z-20">
              <Image
                src="/img/thank-you/vector.png"
                width={1600}
                height={1000}
                alt="banner cart"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex w-[40%] items-center justify-center max-md:pt-[15rem] max-md:h-[90rem] max-md:w-full">
              <div className="w-[31rem] flex flex-col items-center max-md:w-full max-md:px-[5rem]">
                <div className="max-md:hidden">
                  <ICLogo fill="#55D5D2" width="6.8125rem" height="6.125rem" />
                </div>
                <div className="hidden max-md:block">
                  <ICLogo fill="#55D5D2" width="20rem" height="20rem" />
                </div>
                <p className="mt-[1.5rem] text-[1.25rem] text-[#828282] not-italic leading-[1.625rem] font-normal  max-md:text-[4.25rem] max-md:leading-[4.625rem] max-md:font-medium">
                  Thân <span className="uppercase">{dataBill?.customer?.first_name}</span>,
                </p>
                <p className="text-blueAnna text-[2.583rem] not-italic font-black leading-[3.35794rem] max-md:text-[7.583rem] max-md:leading-[8rem] max-md:font-extrabold max-md:mt-[2rem]">
                  CẢM ƠN BẠN
                </p>
                <div className="flex items-center max-md:mb-[1.3rem]">
                  <p className="text-blueAnna text-[2.583rem] not-italic font-black leading-[3.35794rem] mr-[0.62rem] max-md:text-[7.583rem] max-md:leading-[8rem] max-md:font-extrabold max-md:mr-[2rem]">
                    VÌ ĐÃ MUA HÀNG
                  </p>
                  <div className="h-[2rem] w-[2rem] max-md:h-[6rem] max-md:w-[6rem]">
                    <Image
                      src="/img/thank-you/icon-heart.jpg"
                      width={1600}
                      height={1000}
                      alt="banner cart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-[0.75rem] text-blackAnna font-bold not-italic leading-[0.975rem] text-center mt-[0.56rem] mb-[1.56rem] max-md:text-[3.8rem] max-md:leading-[3.8rem] max-md:mt-[1.56rem] max-md:mb-[2.56rem]">
                  Chúng tôi sẽ liên hệ lại sớm để xác nhận đơn hàng. Bạn có thể
                  kiểm tra tình trạng đơn hàng
                  <Link
                    className="underline text-blueAnna ml-[0.3rem] max-md:ml-[1rem]"
                    href="/order-checking"
                  >
                    tại đây
                  </Link>
                </div>
                <Link
                  href="/cua-hang"
                  className="button-shopping rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem]  flex justify-between items-center max-md:py-[1rem] max-md:px-[3rem] max-md:w-[41rem] max-md:h-[9rem]"
                >
                  <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem] max-md:text-[3rem] max-md:leading-[3rem]">
                    TIẾP TỤC MUA SẮM
                  </span>
                  <div className=" bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                    <div className="icon-rotate max-md:hidden">
                      <ICArrowRight2
                        fill="#55D5D2"
                        width="1.1rem"
                        height="1.1rem"
                      />
                    </div>
                    <div className="icon-rotate hidden max-md:block">
                      <ICArrowRight2
                        fill="#55D5D2"
                        width="3rem"
                        height="3rem"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-blueAnna px-[3rem] grow h-full overflow-y-auto flex items-center justify-center max-md:items-start max-md:py-[3rem]">
              <div className="h-fit w-fit bg-white p-[2rem] rounded-[1rem] max-md:w-full">
                <ViewCheckingOrder dataGetDetailOrder={dataBill} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentSuccess;
