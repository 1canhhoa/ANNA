import React from 'react';
import PaymentSuccess from '@/sections/payment-success';
import { fetchDataAuthen } from '@/lib/post-data';

const PaymentSuccessFull = async ({
  searchParams,
  params: { slug, query },
}: any) => {
  const indexSubString = slug.indexOf('-');

  const idOrder = slug.substring(0, indexSubString);
  const email = slug.substring(indexSubString + 1, slug.length);

  const convertEmail = email.replace('%40', '@');

  const bodyGetCheckingOrder: any = {
    url: `wp-json/order/v1/tracking-order?id=${idOrder}&email=${convertEmail}`,
    method: 'get',
  };

  const dataCheckingOrder = await fetchDataAuthen(bodyGetCheckingOrder);
  return (
    <PaymentSuccess
      idOrder={idOrder}
      slug={slug}
      searchParams={searchParams}
      dataCheckingOrder={dataCheckingOrder}
    />
  );

};

export default PaymentSuccessFull;
