'use client';

import { RHFInput } from '@/components/hook-form';
import { baseUrl, fetchDataRest, postDataBase } from '@/lib/fetch-data-rest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import loginImg from '@/assets/images/contact.png';

import useSWR from 'swr';
import { z } from 'zod';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import { TextareaUnderline } from '@/components/ui/textarea-underline';
import { onErrorContact, onSuccess } from '@/ultils/notification';
import SectionHome from '@/sections/home/view/SectionHome';

const defaultValues = {
  title: '',
  username: '',
  phone: '',
  content: '',
  email: '',
};

const formSchema = z.object({
  title: z.string(),
  username: z.string(),
  phone: z.string(),
  content: z.string(),
  email: z.string(),
});
function Contact() {
  const [dataContact, setDataContact] = useState(null) as any;
  const [message, setMessage] = useState('');

  const paramApi: any = {
    method: 'get',
    urlContact: 'acf/v3/posts/379?_fields=acf',
  };
  const getListContact = useSWR(`${baseUrl}${paramApi.urlContact}`, () =>
    fetchDataRest(paramApi.method, paramApi.urlContact).then((res: any) =>
      setDataContact(res)
    )
  );

  useEffect(() => {
    getListContact.mutate();
  }, []);

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const param = {
      name: values?.username,
      email: values?.email,
      tel: values?.phone,
      subject: values?.title,
      message: message,
    };
    try {
      await postDataBase({
        url: 'custom-feedback/v1/submit',
        body: JSON.stringify(param),
      });
      onSuccess({
        message: 'Gửi thông tin thành công!',
      });
    } catch (error: any) {
      if (error?.message) {
        onErrorContact({
          message:
            'Gửi thông tin thất bại! Kiểm tra lại email và các thông tin khác',
        });
        return;
      }
      onErrorContact({
        message:
          'Gửi thông tin thất bại! Kiểm tra lại email và các thông tin khác',
      });
    }
  };

  const handleMessage = (e: any) => {
    setMessage(e?.target?.value);
  };
  return (
    <div className="bg-[#fcfbf9]">
      <div className="container-custom flex flex-wrap-reverse pt-[18rem] md:pt-[12rem] pb-24 md:pb-12 px-[5rem] md:px-0">
        <div className="md:relative w-full md:w-2/5 p-[3.75rem] bg-[#127daf] max-sm:rounded-br-[3.625rem] rounded-bl-[3.625rem] md:rounded-bl-[0.625rem] md:rounded-tl-[0.625rem]">
          <h4 className="text-white font-bold text-[4.5rem] md:text-[2.25rem] max-sm:pt-20">
            Liên hệ
          </h4>
          <p className="py-[1.375rem] text-[3.25rem] md:text-base text-white max-sm:pt-20">
            Quý khách sẽ trở thành Khách hàng thân thiết của Anna ngay sau khi
            mua sản phẩm bất kỳ
          </p>
          <ul className="max-sm:pt-20">
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Chat
              </p>
              <Link
                href="#"
                className="w-2/3 text-[#AEC1C8] text-[3.5rem] line-clamp-1 md:text-base"
              >
                {dataContact?.acf?.chat}
              </Link>
            </li>
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Email
              </p>
              <p className="w-2/3 text-[#AEC1C8] text-[3.5rem] line-clamp-1 md:text-base">
                {dataContact?.acf?.email}
              </p>
            </li>
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Hotline
              </p>
              <p className="w-2/3 text-[#AEC1C8] text-[3.5rem] line-clamp-1 md:text-base">
                {dataContact?.acf?.hotline} (miễn phí cước gọi)
              </p>
            </li>
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Fanpage
              </p>
              <Link
                href="#"
                className="w-2/3 text-[#AEC1C8] text-[3.5rem] line-clamp-1 md:text-base"
              >
                {dataContact?.acf?.fanpage}
              </Link>
            </li>
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Website
              </p>
              <Link
                href="#"
                className="w-2/3 text-[#AEC1C8] text-[3.5rem] line-clamp-1 md:text-base"
              >
                {dataContact?.acf?.website}
              </Link>
            </li>
            <li className="flex flex-wrap py-2">
              <p className="w-full md:w-1/3 text-white font-medium text-[3.5rem] md:text-base">
                Giờ làm việc
              </p>
              <p className="w-2/3 text-[#AEC1C8] text-[3.5rem] md:text-base">
                {dataContact?.acf?.time}
              </p>
            </li>
          </ul>
          <div className="hidden md:block absolute w-full md:w-1/2 left-0 bottom-0">
            <Image
              src={loginImg}
              alt=""
              quality={80}
              width={614}
              height={496}
              className="w-full object-cover h-[16.625rem]"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 p-[4.75rem] bg-white">
          <h4 className="text-[#252425] font-bold text-[4.5rem] md:text-[2.25rem]">
            Thông tin hỗ trợ
          </h4>
          <div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-12 md:gap-4 py-12 md:py-4">
                <div className="flex flex-col gap-2">
                  <span className="text-black-[.08] text-[4rem] md:text-base text-[10px]">
                    Tên của bạn<em className="text-red-500">*</em>
                  </span>
                  <RHFInput
                    name="username"
                    inputStyle="input-underline"
                    placeholder="Tên của bạn"
                    className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-[6rem] md:rounded-[1.75rem]"
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                  <div className="w-full md:w-[45%]">
                    <span className="text-black-[.08] text-[4rem] md:text-base text-[10px]">
                      Email<em className="text-red-500">*</em>
                    </span>
                    <RHFInput
                      name="email"
                      inputStyle="input-underline"
                      placeholder="Email"
                      className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-[6rem] md:rounded-[1.75rem]"
                    />
                  </div>
                  <div className="w-full md:w-[45%]">
                    <span className="text-black-[.08] text-[4rem] md:text-base text-[10px]">
                      Số điện thoại<em className="text-red-500">*</em>
                    </span>
                    <RHFInput
                      name="phone"
                      inputStyle="input-underline"
                      placeholder="Số điện thoại"
                      className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-[6rem] md:rounded-[1.75rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-black-[.08] text-[4rem] md:text-base text-[10px]">
                    Tiêu đề<em className="text-red-500">*</em>
                  </span>
                  <RHFInput
                    name="title"
                    inputStyle="input-underline"
                    placeholder="Tiêu đề"
                    className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-[6rem] md:rounded-[1.75rem]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-black-[.08] text-[4rem] md:text-base text-[10px]">
                    Nội dung<em className="text-red-500">*</em>
                  </span>
                  <TextareaUnderline
                    name="message"
                    onChange={(e) => handleMessage(e)}
                    placeholder="Nội dung"
                    className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-[6rem] md:rounded-[1.75rem] h-[25rem] md:h-[12rem]"
                  />
                </div>
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="w-[134px] bg-[#55D5D2] hover:bg-[#f58f5d] text-white uppercase p-12 md:p-3 text-[3.5rem] md:text-base rounded-[6rem] md:rounded-[1.75rem]"
                >
                  Gửi ngay
                </button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  );
}

export default Contact;
