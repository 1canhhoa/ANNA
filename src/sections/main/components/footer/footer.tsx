'use client';

import { Input } from '@/components/ui/input';
import ICArrowTopLeft from '@/components/Icons/ICArrowTopLeft';
import './style.css';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICLogo from '@/components/Icons/ICLogo';
import ICEmail from '@/components/Icons/ICEmail';
import ICPhone from '@/components/Icons/ICPhone';
import Image from 'next/image';
import Notice from '@/assets/images/notice.png';
import ICSvgFooter from '@/components/Icons/ICSvgFooter';
import Link from 'next/link';
import { useState } from 'react';
import { onError, onSuccess } from '@/ultils/notification';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import map from 'lodash.map';
import { useBoolean } from '@/hooks/use-boolean';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { linkSocial } from '@/configs/config';

interface IProps {
  dataListProduct?: any;
}
function Footer(props: IProps) {
  const { dataListProduct } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const isLoading = useBoolean(false);

  const listIcon = [
    {
      icon: <ICFacebookFooter />,
      link: linkSocial.facebook,
    },
    {
      icon: <ICInstagramFooter />,
      link: linkSocial.instagram,
    },
    {
      icon: <ICTiktokFooter />,
      link: linkSocial.tiktok,
    },
    {
      icon: <ICShopeeFooter />,
      link: linkSocial.shopee,
    },
  ];
  const listIconMobile = [
    {
      icon: <ICFacebookFooter width="8.53333rem" height="8.53333rem" />,
      link: linkSocial.facebook,
    },
    {
      icon: <ICInstagramFooter width="8.53333rem" height="8.53333rem" />,
      link: linkSocial.instagram,
    },
    {
      icon: <ICTiktokFooter width="8.53333rem" height="8.53333rem" />,
      link: linkSocial.tiktok,
    },
    {
      icon: <ICShopeeFooter width="8.53333rem" height="8.53333rem" />,
      link: linkSocial.shopee,
    },
  ];

  const listProduct = [
    {
      title: 'Gọng kính',
    },
    {
      title: 'Tròng kính',
    },
    {
      title: 'Kính râm',
    },
    {
      title: 'Phụ kiện',
    },
  ];

  const listContact = [
    {
      title: linkSocial.phone,
      toHref: `tel:${linkSocial.phone}`,
    },
    // {
    //   title: 'kinhmatanna.com',
    //   toHref: 'https://kinhmatanna.com/',
    // },
    {
      title: linkSocial.email,
      toHref: `mailto:${linkSocial.email}`,
    },
  ];
  const listPolicy = [
    {
      title: 'Hình thức thanh toán',
      href: '/chinh-sach-thanh-toan',
    },
    {
      title: 'Chính sách giao hàng',
      href: '/chinh-sach-giao-hang',
    },
    {
      title: 'Chính sách bảo hành',
      href: '/chinh-sach-bao-hanh',
    },
  ];
  const listContactMobile = [
    // {
    //   icon: <ICEmail />,
    //   title: 'marketing@kinhmatanna.com',
    //   toHref: 'mailto:marketing@kinhmatanna.com',
    // },
    {
      icon: <ICPhone />,
      title: linkSocial.phone,
      toHref: `tel:${linkSocial.phone}`,
    },
    {
      icon: '',
      title: `MST: ${linkSocial.tax_code}`,
    },
  ];
  const listPolicyMobile = [
    {
      title: 'Thanh toán',
    },
    {
      title: 'Giao hàng',
    },
    {
      title: 'Bảo hành',
    },
    {
      title: 'Tìm cửa hàng',
    },
  ];

  const formSchema = yup.object({
    email: yup
      .string().matches(/^[a-zA-Z0-9._@-]*$/, 'Vui lòng không điền các kí tự đặc biệt')
      .required('Email là bắt buộc!')
      .email('Email không đúng định dạng!'),
  });

  const methods = useForm<any>({
    resolver: yupResolver(formSchema) as any,
  });

  const {
    register,
    reset,
    // formState: { errors },
    handleSubmit,
    formState: { errors },
  } = methods;

  const fetchSendEmail = (value: any) => {
    isLoading.onTrue();
    const formData = new FormData();
    formData.append('your-email', value.email);
    formData.append('_wpcf7_unit_tag', 'ssss');

    fetch(
      'https://anna.okhub-tech.com/wp-json/contact-form-7/v1/contact-forms/1158/feedback',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        isLoading.onFalse();
        if (result.status === 'mail_sent') {
          onSuccess({ message: 'Gửi mail thành công!' });
        } else onError({ message: 'Gửi mail thất bại!' });
        reset();
      })
      .catch((error) => isLoading.onFalse());
  };

  return (
    <div className="footer-layout-main relative border-0 w-full overflow-hidden">
      <div className="max-md:hidden absolute right-0 bottom-0">
        <ICSvgFooter height="21.1875rem" width="30rem" />
      </div>
      <div className="hidden max-md:block absolute -right-[15rem] bottom-0">
        <ICSvgFooter height="61.1875rem" width="90rem" />
      </div>
      <div className="footer-layout-container">
        <div className="footer-layout">
          <div className="footer-left">
            <h3 className="title-anna max-md:hidden">ANNA</h3>
            <h4 className="description-anna lg:!w-[18.875rem] leading-normal max-md:hidden">
              THƯƠNG HIỆU KÍNH MẮT CỦA SỰ TỬ TẾ
            </h4>
            <div className="hidden max-md:block">
              <ICLogo width="23.46667rem" height="21.33333rem" />
            </div>
            <div className="hidden max-md:flex items-center mt-[5.33rem]">
              {listIconMobile.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="mr-[2rem] max-md:mr-[4.27rem] max-md:last:mr-0 max-md:w-[8.53333rem] max-md:h-[8.53333rem] flex items-center justify-center"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className="hidden max-md:block w-full my-[4.8rem] h-[0.26667rem] bg-white bg-opacity-30" />
            <div className="hidden max-md:flex flex-col items-center">
              <p
                style={{
                  marginTop: 0,
                  color: '#CAF2F1',
                  fontSize: '3.2rem',
                  fontWeight: '700',
                }}
                className=" not-italic leading-[4.48rem] font-bold max-md:text-[2.88rem]"
              >
                THÔNG TIN LIÊN HỆ
              </p>
              <div>
                <Link
                  href={`tel:${linkSocial.phone}`}
                  className="text-[3.84rem] text-white leading-[5.97333rem] font-bold not-italic mt-[3.2rem] mb-[2.6rem]"
                >
                  {linkSocial.phone}
                </Link>
              </div>
              <div>
                <Link
                  href={`mailto:${linkSocial.email}`}
                  className="text-[3.84rem] text-white leading-[5.97333rem] font-bold not-italic"
                >
                  {linkSocial.email}
                </Link>
              </div>
            </div>
            <div className="hidden max-md:block w-full my-[4.8rem] h-[0.26667rem] bg-white bg-opacity-30" />
            <div className="hidden max-md:flex flex-col items-center">
              <h2 className="font-bold not-italic leading-[5.376rem] text-white text-[3.84rem] mb-[3.2rem]">
                MST: {linkSocial.tax_code}
              </h2>
              <Image
                width={196}
                height={74}
                className="my-[0.75rem] max-md:w-[52.4504rem] max-md:h-[19.84213rem] object-contain"
                src={Notice}
                alt=""
              />
              <Image
                width={132}
                height={26}
                className="max-md:w-[35.29173rem] max-md:h-[7rem] object-contain"
                src="/img/footer/protected.png"
                alt=""
              />
            </div>
            <div className="hidden max-md:block w-full my-[4.8rem] h-[0.26667rem] bg-white bg-opacity-30" />
            <p className="max-md:hidden">Đăng kí để nhận tin mới nhất</p>
            <form
              onSubmit={handleSubmit(fetchSendEmail)}
              className="relative input-search"
            >
              <Input
                className="input-email outline-0 placeholder:!pl-0 lg:pl-[1.25rem] text-[1rem] font-bold leading-normal text-blueAnna max-md:!text-[3.2rem]"
                type="text"
                placeholder="Để lại email của bạn"
                {...register('email', { required: true })}
              />
              <button
                type="submit"
                className="icon-arrow-input flex items-center justify-center"
              >
                {isLoading.value ? (
                  <div className="-mr-3">
                    <LoadingGlobal stroke="#F58F5D" width={2} height={2} />
                  </div>
                ) : (
                  <ICArrowTopLeft height="2rem" width="1.99981rem" />
                )}
              </button>
              <button type="submit" className="icon-arrow-input-mobile">
                {isLoading.value ? (
                  <div className="-mr-3">
                    <LoadingGlobal stroke="#F58F5D" width={4} height={4} />
                  </div>
                ) : (
                  <ICArrowTopLeft height="4.73333rem" width="4.73333rem" />
                )}
              </button>
            </form>
            <div className="list-icon-footer-left">
              {listIcon.map((item, index) => (
                <Link
                  href={item.link}
                  target="_blank"
                  key={index}
                  className="mr-[2rem]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-info-row">
              <div className="footer-info-row-left">
                <p className="title !font-bold">SẢN PHẨM</p>
                <ul>
                  {map(dataListProduct, (itemProduct: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6 cursor-pointer"
                    >
                      <Link href={`/danh-muc-san-pham/${itemProduct.slug}`}>
                        {itemProduct.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-info-row-right">
                <p className="title !font-bold">THÔNG TIN LIÊN HỆ</p>
                <ul>
                  {listContact.map((item: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6 cursor-pointer"
                    >
                      <Link href={item?.toHref ?? ''}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-info-row mt-[2.62rem]">
              <div className="footer-info-row-left">
                <p className="title !font-bold">CHÍNH SÁCH MUA HÀNG</p>
                <ul>
                  {listPolicy.map((item: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6 cursor-pointer"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-info-row-right">
                <h2 className="font-extrabold not-italic leading-4 text-[#CAF2F1] text-[1.125rem]">
                  MST: {linkSocial.tax_code}
                </h2>
                <Image
                  width={196}
                  height={74}
                  className="my-[0.75rem] w-[12.29306rem] h-[4.6505rem] max-md:w-[52.4504rem] max-md:h-[19.84213rem]"
                  src={Notice}
                  alt=""
                />
                <Image
                  width={132}
                  height={26}
                  className="w-[8.2715rem] h-[1.64063rem] max-md:w-[52.4504rem] max-md:h-[19.84213rem]"
                  src="/img/footer/protected.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="list-product-mobile max-md:hidden">
            <h3>SẢN PHẨM</h3>
            <ul>
              {listProduct.map((item: any, index: number) => (
                <li key={index} className="cursor-pointer">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="list-policy-mobile">
            <div className="item-left">
              <h3>CHÍNH SÁCH MUA HÀNG</h3>
              <ul>
                {listPolicyMobile.map((item: any, index: number) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-[2.5rem]" />
        <div className="text-author !font-medium">
          <span>Anna © 2018 - 2023. Design by OKHUB Viet Nam</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
