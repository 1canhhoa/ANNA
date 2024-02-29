// eslint-disable-next-line import/no-cycle
import Payment from '@/sections/payment';

export interface IItemProvinceConvert {
  value: string;
  label: string;
}
const PaymentPage = async () => {
  return <Payment />;
};

export default PaymentPage;
