'use client';

import loginImg from '@/assets/images/img-register.jpg';
import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import '../style.css';
import ICFacebook from '@/components/Icons/ICFacebook';
import ICGoogle from '@/components/Icons/ICGoogle';
import { postDataBase } from '@/lib/fetch-data-rest';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { onErrorContact } from '@/ultils/notification';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SectionHome from '@/sections/home/view/SectionHome';
import { useBoolean } from '@/hooks/use-boolean';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

const defaultValues = {
  email: '',
  username: '',
  password: '',
};

const formSchema = yup.object({
  email: yup.string().required('Email là bắt buộc!').email('Email chưa hợp lệ'),
  username: yup.string().required('Tài khoản là bắt buộc!'),
  password: yup.string().required('Mật khẩu là bắt buộc!'),
});

export function Register() {
  const router = useRouter();
  const isLoading = useBoolean(false);

  const methods = useForm<any>({
    resolver: yupResolver(formSchema) as any,
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (values: any) => {
    isLoading.onTrue();
    try {
      const res = await postDataBase({
        url: 'custom/v1/register',
        body: JSON.stringify(values),
      });

    //  if(res.status === "success"){
    //   router.push('/tai-khoan');
    //  }
      const { ok, error }: any = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      isLoading.onFalse();
      if (ok) {
        router.push('/list-product-dashboard');
      } else {
        onErrorContact({
          message: 'Đăng ký thất bại ! Vui lòng thử lại',
        });
      }
    } catch (error: any) {
      isLoading.onFalse();
      if (error?.message) {
        console.log("msg", error?.message)
        setError('password', {
          message: JSON.parse(error?.message)?.message,
        });
        return;
      }
      onErrorContact({
        message: 'Đăng ký thất bại ! Vui lòng thử lại',
      });
    }
  };

  const handleLoginByFaceBook = () => {
    router.push('https://anna.okhub-tech.com/?wooslg=facebook');
  };

  return (
    <div className="md:mt-[3rem] max-sm:pt-[12rem]">
      <div className="container-custom flex flex-wrap m-auto items-center justify-center py-36 md:py-32">
        <div className="hidden md:block w-full md:w-1/2 px-6">
          <Image
            src={loginImg}
            alt=""
            quality={80}
            width={614}
            height={496}
            className="w-full object-cover h-[80.5rem] md:h-[30.625rem] rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-20 md:px-6 md:pr-24">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <span className="text-black text-[4.95rem] md:text-2xl font-bold">
                Đăng ký email
              </span>
              <p className="text-[3.15rem] md:text-base font-semibold">
                Hãy đăng ký để được hưởng nhiều đặc quyền riêng dành cho bạn
              </p>
            </div>
            <div className="grid gap-12 md:gap-4 py-12 md:py-4">
              <div className="flex flex-col gap-2">
                <span className="text-black text-[3.6rem] md:text-lg  uppercase font-bold">
                  Tài khoản<em className="text-red-500">*</em>
                </span>
                <RHFInput
                  name="username"
                  inputStyle="input-underline"
                  placeholder="Nhập tài khoản"
                  className="w-full border border-[#55D5D2] font-medium p-8 md:p-3 text-[3.6rem] md:text-base rounded-3xl md:rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-black text-[3.6rem] md:text-lg uppercase font-bold">
                  Email<em className="text-red-500">*</em>
                </span>
                <RHFInput
                  name="email"
                  inputStyle="input-underline"
                  placeholder="Nhập email"
                  className="w-full border border-[#55D5D2] font-medium p-8 md:p-3 text-[3.6rem] md:text-base rounded-3xl md:rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-black text-[3.6rem] md:text-lg uppercase font-bold">
                  Mật khẩu<em className="text-red-500">*</em>
                </span>
                <RHFInput
                  type="password"
                  name="password"
                  inputStyle="input-underline"
                  placeholder="Nhập mật khẩu"
                  className="w-full border border-[#55D5D2] font-medium p-8 md:p-3 text-[3.6rem] md:text-base rounded-3xl md:rounded-xl"
                />
              </div>
              <div className="text-[3.15rem] md:text-base font-semibold">
                Thông tin của bạn sẽ được bảo mật theo{' '}
                <span>
                  <Link href="#" className="text-amber-700 font-semibold">
                    chính sách riêng tư
                  </Link>
                </span>{' '}
                của chúng tôi
              </div>
            </div>
            <div className="bg-[#55D5D2] hover:bg-[#f58f5d] p-12 md:p-3 text-[3.15rem] md:text-lg rounded-3xl md:rounded-xl">
              <button
                disabled={isLoading.value}
                type="submit"
                className="w-full text-white font-bold flex justify-center items-center"
              >
                <div className="flex items-center">
                  Đăng ký ngay
                  {isLoading.value && (
                    <div>
                      <div className="px-[3rem] md:px-[1rem] max-md:hidden">
                        <LoadingGlobal stroke="white" />
                      </div>
                      <div className="px-[2rem] md:px-[1rem] hidden max-md:block">
                        <LoadingGlobal stroke="white" width={3} height={3} />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            </div>
            <div className="text-[3.15rem] md:text-[1.25rem] text-center py-12 md:py-4 font-semibold">
              Hoặc
            </div>
          </FormProvider>
          <div className="bg-[#1877F2] p-12 md:p-3 text-[3.15rem] md:text-base rounded-3xl md:rounded-xl mt-6 md:mt-2">
            <button
              type="button"
              className="w-full text-white flex items-center"
              onClick={handleLoginByFaceBook}
            >
              <ICFacebook width={35} height={35} />
              <p className="text-center w-full font-semibold">
                Đăng nhập bằng
                <b> Facebook</b>
              </p>
            </button>
          </div>
          <div className="p-12 md:p-3 text-[3.15rem] md:text-base rounded-3xl md:rounded-xl mt-12 md:mt-3 btn-login-gg">
            <button type="button" className="w-full flex items-center">
              <ICGoogle width={35} height={35} />
              <p className="text-center w-full font-semibold">
                Đăng nhập bằng
                <b> Google</b>
              </p>
            </button>
          </div>
          <p className="text-center mt-16 md:mt-4 text-[3.15rem] md:text-base font-semibold">
            Bạn chưa có tài khoản Anna ?
          </p>
          <div className="text-center mt-6 md:mt-2 text-[#81c8c2] text-[3.15rem] md:text-base">
            <Link href="/tai-khoan" className="underline font-semibold">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  );
}
