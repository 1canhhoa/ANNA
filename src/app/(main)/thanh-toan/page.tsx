// eslint-disable-next-line import/no-cycle
import { fetchDataRest } from '@/lib/fetch-data-rest';
import Payment from '@/sections/payment';

export interface IItemProvinceConvert {
  value: string;
  label: string;
}
const PaymentPage = async () => {

  const shippingMethod = await fetchDataRest(
    'GET',
    'custom/v1/shipping-methods'
  );
  return <Payment shippingData = {shippingMethod}/>;
};

export default PaymentPage;
