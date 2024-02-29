'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ICCamera from '@/components/Icons/ICCamera';
import FormProvider from '@/components/hook-form';
import { ProductCartContext } from '@/context-provider';
import UploadImage from '@/components/component-ui-custom/upload-image';
import { useSession } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { onSuccess } from '@/ultils/notification';

function UserInfo() {
  const { inforUserGlobal } = useContext(ProductCartContext);
  const { data: session } = useSession();

  const [avatarUser, setAvatarUser] = useState<any>();

  const getAvatarUpload = (file: any): void => {
    setAvatarUser(file.target.files[0]);
  };

  const defaultValues = {
    first_name: inforUserGlobal?.first_name ?? '',
    last_name: inforUserGlobal?.last_name ?? '',
    display_name: inforUserGlobal?.display_name ?? '',
    email: inforUserGlobal?.email ?? '',
    phone: inforUserGlobal?.phone ?? '',
    old_pass: '',
    new_pass: '',
    re_new: '',
  };

  const formSchema = yup.object({
    first_name: yup.string().required('Vui lòng nhập họ!'),
    last_name: yup.string().required('Vui lòng nhập tên!'),
    display_name: yup.string().required('Vui lòng nhập tài khoản!'),
    email: yup
      .string()
      .required('Email is required!')
      .email('Vui lòng nhập email!'),
    phone: yup.string().required('Vui lòng nhập số điện thoại!'),
    old_pass: yup.string().nullable(),
    new_pass: yup.string().nullable(),
    re_new: yup.string().nullable(),
  });

  const methods = useForm<any>({
    resolver: yupResolver(formSchema) as any,
    defaultValues,
  });

  const {
    register,
    reset,
    // formState: { errors },
    setValue,
    handleSubmit,
    formState: { errors },
  }: any = methods;

  const handleSubmitForm = async (value: any) => {
    const formData = new FormData();

    formData.append('image', avatarUser);
    formData.append('first_name', 'value.first_name');
    formData.append('last_name', 'value.last_name');
    formData.append('display_name', 'value.display_name');
    formData.append('email', 'hungnm@gmail.com');
    formData.append('phone', '0379634246');
    formData.append('old_pass', value.old_pass);
    formData.append('new_pass', value.new_pass);
    formData.append('re_new', value.re_new);

    fetch(
      'https://anna.okhub-tech.com/wp-json/custom-woo-api/v1/update-customer',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        onSuccess({
          message: 'Cập nhật thông tin thành công!',
        });
      })
      .catch((error) => console.log('error', error));
  };

  const listInput: any = [
    {
      name: 'last_name',
      require: true,
      type: 'input',
      placeHolder: 'Tên',
    },
    {
      name: 'first_name',
      require: true,
      type: 'input',
      placeHolder: 'Họ',
    },
    {
      name: 'display_name',
      require: true,
      type: 'input',
      placeHolder: 'Tên hiển thị',
    },
    {
      name: 'email',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ email',
    },
    {
      name: 'phone',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
  ];
  const listInputChangePassword = [
    {
      name: 'old_pass',
      type: 'input',
      placeHolder: 'Mật khẩu hiện tại',
    },
    {
      name: 'new_pass',
      type: 'input',
      placeHolder: 'Mật khẩu mới',
    },
    {
      name: 're_new',
      type: 'input',
      placeHolder: 'Nhập lại mật khẩu',
    },
  ];
  return (
    <div>
      <h3 className="text-[1.5rem] font-semibold leading-[1.5rem] mb-[1.5rem] max-md:text-[4.5rem] max-md:pb-[3rem] max-md:leading-[5rem]">
        Thông tin tài khoản
      </h3>

      <FormProvider methods={methods} onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex justify-between max-md:flex-col">
          <div className="hidden max-md:flex mb-[2rem] justify-center">
            <div className="relative w-fit h-fit">
              <Image
                src={inforUserGlobal?.avatar_url ?? '/img/no_image.jpg'}
                height={31}
                width={124}
                className="object-cover w-[10.9375rem] h-[10.9375rem] rounded-full max-md:w-[38rem] max-md:h-[38rem]"
                alt="Logo"
              />
              <button
                type="button"
                className="max-md:hidden absolute bottom-[0.6rem] right-[1.1rem] p-[0.3rem] rounded-full flex justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
              >
                <ICCamera width="0.85rem" height="0.85rem" />
              </button>
              <button
                type="button"
                className="hidden max-md:flex absolute bottom-[0.6rem] right-[1.1rem] p-[2rem] rounded-full justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
              >
                <ICCamera width="5rem" height="5rem" />
              </button>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full">
            {listInput.map((item: any, index: number) => (
              <div key={index}>
                <span className="text-[#414141] font-bold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.33rem]">
                  {item.placeHolder}
                  <span className="text-[red]">*</span>
                </span>
                <div className="relative mt-[0.5rem] mb-[0.88rem] max-md:mb-[3rem]">
                  <input
                    type="text"
                    {...register(item.name, { required: item.require })}
                    name="input"
                    placeholder={item.placeHolder}
                    onChange={(value) =>
                      setValue(item.name, value.target.value)
                    }
                    className="px-[1.2rem] font-medium bg-[#F4F4F4] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[3.6rem] max-md:px-[4rem]"
                  />
                  {errors[item.name] && (
                    <span className="ml-[1rem] mt-[0.5rem] text-[#ff5660] font-bold text-[0.8rem] pb-[0.4rem] max-md:text-[1.8rem]">
                      {errors[item.name].message}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grow ml-[2rem] flex flex-col items-center max-md:ml-[0rem]">
            <div className="mb-[2rem] max-md:hidden">
              <UploadImage imageUpload={getAvatarUpload} />
              {/* <div className="relative w-fit h-fit"> */}
              {/*  <Image */}
              {/*    src={inforUserGlobal?.avatar_url ?? '/img/no_image.jpg'} */}
              {/*    height={31} */}
              {/*    width={124} */}
              {/*    className="object-cover w-[10.9375rem] h-[10.9375rem] rounded-full max-md:w-[38rem] max-md:h-[38rem]" */}
              {/*    alt="Logo" */}
              {/*  /> */}
              {/*  <button */}
              {/*    type="button" */}
              {/*    className="max-md:hidden absolute bottom-[0.6rem] right-[1.1rem] p-[0.3rem] rounded-full flex justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black" */}
              {/*  > */}
              {/*    <ICCamera width="0.85rem" height="0.85rem" /> */}
              {/*  </button> */}
              {/*  <button */}
              {/*    type="button" */}
              {/*    className="hidden max-md:flex absolute bottom-[0.6rem] right-[1.1rem] p-[2rem] rounded-full justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black" */}
              {/*  > */}
              {/*    <ICCamera width="5rem" height="5rem" /> */}
              {/*  </button> */}
              {/* </div> */}
            </div>
            {listInputChangePassword.map((item, index) => (
              <div key={index} className="w-full">
                <span className="text-[#414141] font-bold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.33rem]">
                  {item.placeHolder}
                </span>
                <div className=" relative mt-[0.5rem] mb-[0.8rem] max-md:mb-[3rem]">
                  <input
                    type="text"
                    {...register(item.name)}
                    name="input"
                    placeholder={item.placeHolder}
                    onChange={(value) =>
                      setValue(item.name, value.target.value)
                    }
                    className="px-[1.2rem] bg-[#F4F4F4] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[3.6rem] max-md:px-[4rem]"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                </div>
                {/* {item.require === true && `errors.${item.name}` && ( */}
                {/*  <span>This field is required</span> */}
                {/* )} */}
              </div>
            ))}

            <div className="w-full flex justify-end max-md:hidden">
              <button
                type="button"
                className="border-[1px] font-bold border-[#55D5D2] mr-[0.5rem] text-blueAnna rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="bg-[#55D5D2] font-bold text-white rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
        <div className="w-full hidden justify-end max-md:grid grid-cols-2 gap-[2rem] mt-[3rem]">
          <button
            type="button"
            className="border-[1px] font-bold border-[#55D5D2] mr-[0.5rem] text-blueAnna rounded-full py-[5rem] px-[2.19rem] text-[3.33rem] font-Nexa-Medium leading-[1.7rem] not-italic"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="bg-[#55D5D2] font-bold text-white rounded-full py-[5rem] text-[3.33rem] font-Nexa-Medium leading-[1.7rem] not-italic"
          >
            Lưu thay đổi
          </button>
        </div>
      </FormProvider>
    </div>
  );
}

export default UserInfo;
