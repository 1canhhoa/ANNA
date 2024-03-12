'use client';

import { useForm } from 'react-hook-form';
import { listInputGlobal } from '@/types/types-general';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
// eslint-disable-next-line import/no-cycle
import ListProductInCart from '@/sections/payment/components/list-product-in-cart';
import GroupInputGlobal from '@/components/component-ui-custom/group-input-global';
import { IItemProvinceConvert } from '@/app/(main)/thanh-toan/page';
import { useContext, useEffect, useState } from 'react';
import map from 'lodash.map';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  getAllDistrictByProvince,
  getAllProvince,
  getAllWardByDistrict,
} from '@/ultils/handle-get-area';
import { ProductCartContext } from '@/context-provider';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { useBoolean } from '@/hooks/use-boolean';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  keyLocalStorage,
  paymentOnepay,
  validatePhoneNumber,
} from '@/configs/config';
import { generateParamsPayment } from '@/sections/payment/handle-payment-onepay';
import CryptoJS from 'crypto-js';
import { generateRandom4DigitNumber } from '@/ultils/utils';
import { setItemLocalstorage } from '@/ultils/set-item-localstorage';

interface IProps {
  voucher: any;
  shippingData: any,
  priceDiscount:any,
  setPriceDiscount: any
}

interface IParamItemDistrict {
  label: string;
  value: string;
}

export default function FormPayment(props: IProps) {
  const { voucher, shippingData, priceDiscount, setPriceDiscount } = props;
  const router = useRouter();
  const { data: session } = useSession();

  const [ip, setIp] = useState('');

  const isLoadingSubmit = useBoolean();
  const [listDistrict, setListDistrict] = useState<IParamItemDistrict[]>([
    {
      label: '',
      value: '',
    },
  ]);
  const [listWards, setListWards] = useState<IParamItemDistrict[]>([
    {
      label: '',
      value: '',
    },
  ]);
  const [dataSubmit, setDataSubmit] = useState({});
  const [totalPriceInCart, setTotalPriceInCart] = useState<number>(0);

  const [paymentMethodSubmit, setPaymentMethodSubmit] = useState({
    payment_method: 'cod',
    payment_method_title: 'Thanh toán khi nhận hàng',
  });

  const { listCartGlobal, clearDataCartProductContext } =
    useContext(ProductCartContext);
    useEffect(() => {
      let total = 0;
      listCartGlobal?.map(
        // eslint-disable-next-line no-return-assign
        (item: any) =>
          (total +=
            (item?.quantity ?? 0) * parseInt(item?.product_price ?? '0', 10))
      );

      const shippingTotal = shippingData && shippingData[0].cost && shippingData[0].cost !== "" ? shippingData[0].cost: 0;
      setTotalPriceInCart(total + Number(shippingTotal) - Number(priceDiscount.value));
    }, [listCartGlobal, priceDiscount]);

    // console.log("totalPriceInCart", totalPriceInCart)

  const formSchema = yup.object({
    first_name: yup.string().required('Họ và tên là bắt buộc!'),
    phone: yup
      .string()
      .required('Số điện thoại là bắt buộc!')
      .matches(validatePhoneNumber, 'Số điện thoại không đúng định dạng!'),
    email: yup
      .string()
      .required('Email là bắt buộc!')
      .email('Email không đúng định dạng!'),
    city: yup.string().required('Thành phố là bắt buộc!'),
    state: yup.string().required('Gmail là bắt buộc!'),
    address_1: yup.string().required('Địa chỉ là bắt buộc!'),
    address_2: yup.string().required('Địa chỉ là bắt buộc!'),
  });

  const methods = useForm<any>({
    resolver: yupResolver(formSchema) as any,
  });

  const {
    register,
    reset,
    // formState: { errors },
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleFindLabelByValue = (value: string, data: any) => {
    const findObject = data.filter((item: any) => item.value === value);

    return findObject[0].label;
  };

  const onSubmit = async (data: any) => {
    const arrayProduct: any = [];

    map(listCartGlobal, (item) =>
      arrayProduct.push({
        variation_id: item.variant_id,
        product_id: item.product_id,
        quantity: item.quantity,
        cart_key:item.key,
      })
    );

    // convert data hook form
    const newData = {
      ...data,
      city: handleFindLabelByValue(data.city, getAllProvince()),
      state: handleFindLabelByValue(data.state, listDistrict),
      address_1: handleFindLabelByValue(data.address_1, listWards),
    };

    // payment method
    const paymentMethod = {
      payment_method: paymentMethodSubmit.payment_method,
      payment_method_title: paymentMethodSubmit.payment_method_title,
      coupon_lines: voucher,
    };

    const newShippingData = shippingData.map((item: any)=>{
      return {
        ...item,
        total: item.cost
      }
    })

    // merge object
    const dataSubmitTmp = Object.assign(newData, dataSubmit, paymentMethod, {
      products: arrayProduct,
    }, {
      shipping_lines: newShippingData
    });
    isLoadingSubmit.onTrue();
    // list product

    if (paymentMethodSubmit.payment_method === 'onepay') {
    const randomIDOrder = generateRandom4DigitNumber();
      // REDIRECT ONEPAY 
      const isLoggin = !!session?.user?.token
      const params = generateParamsPayment(
        dataSubmitTmp,
        true,
        ip,
        randomIDOrder,
        totalPriceInCart,
        isLoggin
      );
      const secretWordArray = CryptoJS.enc.Hex.parse(
        paymentOnepay.SECRET_KEY_HASH
      );
      const hash = CryptoJS.HmacSHA256(params, secretWordArray);
      // eslint-disable-next-line camelcase
      const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase();


      // console.log(isLoggin)
      router.push(
        `${paymentOnepay.ONEPAY_HOST}?${generateParamsPayment(
          dataSubmitTmp,
          false,
          ip,
          randomIDOrder,
          totalPriceInCart,
          isLoggin
          // eslint-disable-next-line camelcase
        )}&vpc_SecureHash=${vpc_SecureHash}`
      );
      setItemLocalstorage(keyLocalStorage.keyFormPayment, {
        dataSubmitTmp: dataSubmitTmp,
        product: listCartGlobal,
      });
      // END;

      return;
    }else{

      try {
        await fetchDataAuthen({
          url: 'wp-json/custom/v1/create-order',
          method: 'post',
          body: JSON.stringify(dataSubmitTmp),
          token: session?.user?.token,
        })
          .then((res: any) => {
            console.log(res)
            onSuccess({
              message: 'Đặt hàng thành công!',
            });
            localStorage.removeItem(keyLocalStorage.keyProductsInCart);
  
            clearDataCartProductContext();
            router.push(
              `/thank-you?email=${data?.email}&name=${data?.first_name}&order_id=${res?.order_id}`
            );
            reset();
          })
          .catch(() => {});
      } catch (error: any) {
        onError();
      }

    }

    

    isLoadingSubmit.onFalse();
  };
  const handleOnChangeArea = (key: string, parrentCode: string): void => {
    if (key === 'city') {
      setListDistrict(getAllDistrictByProvince(parrentCode));
    }
    if (key === 'state') {
      setListWards(getAllWardByDistrict(parrentCode));
    }
  };

  const getIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      if (data) {
        setIp(data.ip);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIp();
  }, []);

  const listInput: listInputGlobal[] = [
    {
      name: 'first_name',
      require: true,
      type: 'input',
      placeHolder: 'Họ và tên',
    },
    {
      name: 'phone',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
    {
      name: 'email',
      require: true,
      type: 'input',
      placeHolder: 'Gmail',
    },
    {
      name: 'city',
      require: true,
      placeHolder: 'Tỉnh/Thành phố',
      type: 'select-option',
      width: '40rem',
      listOption: getAllProvince(),
    },
    {
      name: 'state',
      require: true,
      placeHolder: 'Quận/huyện',
      type: 'select-option',
      width: '40rem',
      listOption: listDistrict,
    },
    {
      name: 'address_1',
      require: true,
      placeHolder: 'Xã/Phường',
      type: 'select-option',
      width: '40rem',
      listOption: listWards,
    },
    {
      name: 'address_2',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ chi tiết',
    },
    {
      name: 'description',
      type: 'text-area',
      placeHolder: 'Thông tin bổ sung',
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <GroupInputGlobal
          register={register}
          listInputGlobal={listInput}
          setValueInput={setValue}
          errors={errors}
          handleOnChangeArea={handleOnChangeArea}
        />
        <div className="grow hidden max-md:block mt-[6rem]">
          <ListProductInCart shippingData={shippingData} priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount}/>
        </div>
        <h3 className="text-[1.5rem] font-bold mb-[0.8rem] max-md:text-[6.4rem] max-md:mt-[6rem]">
          Phương thức thanh toán
        </h3>
        <RadioGroup
          name="payment_method"
          defaultValue="cod"
          onChange={(value: any) => {
            setDataSubmit({
              ...dataSubmit,
              payment_method_title: value?.target.value,
            });
            setPaymentMethodSubmit({
              payment_method: value?.target.value,
              payment_method_title:
                value?.target.value === 'cod'
                  ? 'Thanh toán khi nhận hàng'
                  : 'Thanh toán Onepay',
            });
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cod" id="option-one" />
            <Label
              htmlFor="option-one"
              className="text-[#00225D] font-medium text-[1rem] max-md:text-[3.733rem] pointer-events-auto"
            >
              Thanh toán khi nhận hàng
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="onepay" id="option-two" />
            <Label
              htmlFor="option-two"
              className="text-[#00225D] font-medium text-[1rem] max-md:text-[3.733rem] pointer-events-auto"
            >
              Thanh toán Onepay
            </Label>
          </div>
        </RadioGroup>
        <p className="mt-[0.8rem] font-medium max-md:text-[3.733rem] max-md:my-[3rem]">
          Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng và cho các
          mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng
          tôi.
        </p>
        <Button
          disabled={isLoadingSubmit.value}
          type="submit"
          className="mt-[1.2rem] w-[20rem] bg-[#55D5D2] text-[1rem] not-italic font-bold leading-[1.5rem] max-md:h-[10rem] max-md:w-full max-md:text-[3.733rem]"
        >
          {isLoadingSubmit.value && (
            <div>
              <div className="max-md:hidden">
                <LoadingGlobal />
              </div>
              <div className="hidden max-md:block mb-[0.1rem] mr-[1rem]">
                <LoadingGlobal width={3} height={3} />
              </div>
            </div>
          )}
          Đặt hàng
        </Button>
      </form>
    </div>
  );
}
