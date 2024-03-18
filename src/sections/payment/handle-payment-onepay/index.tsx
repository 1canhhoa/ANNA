import { paymentOnepay } from '@/configs/config';
import pickBy from 'lodash.pickby';
import { convertStr2URL } from '@/ultils/utils';

const generateParamsPayment = (
  dataOrder: any,
  pickVpc = false,
  ip: string,
  idOrder: number,
  amount: any,
  isLoggin:any,
) => {
  const reqParam = {
    AgainLink: paymentOnepay.BASE_URL,
    Title: 'Kinh mat Anna',
    vpc_AccessCode: paymentOnepay.ACCESS_CODE,
    vpc_Amount: amount + "00",
    vpc_CardList: 'INTERNATIONAL',
    vpc_Command: 'pay',
    vpc_Currency: 'VND',
    vpc_Locale: 'en',
    vpc_MerchTxnRef: Math.floor(Date.now() / 1000) + '_hgtour',
    vpc_Merchant: paymentOnepay.MERCHANT_ID,
    vpc_OrderInfo: dataOrder?.name,
    vpc_ReturnURL:
      paymentOnepay.BASE_URL +
      `/payment-successfull/${idOrder}-${dataOrder?.email}/?token=${isLoggin}`,
    vpc_TicketNo: ip,
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

export { generateParamsPayment };
