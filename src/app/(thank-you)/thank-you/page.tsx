import React from 'react';
import { fetchDataAuthen } from '@/lib/post-data';
import ThankYou from '@/sections/thank-you-section';

const ThankYouPage = async ({ searchParams, params: { slug, query } }: any) => {
  const bodyGetCheckingOrder: any = {
    url: `wp-json/order/v1/tracking-order?id=${searchParams?.order_id}&email=${searchParams?.email}`,
    method: 'get',
  };

  const dataCheckingOrder = await fetchDataAuthen(bodyGetCheckingOrder);
  return (
    <div>
      <ThankYou
        dataCheckingOrder={dataCheckingOrder}
        name={searchParams?.name}
      />
    </div>
  );
};

export default ThankYouPage;
