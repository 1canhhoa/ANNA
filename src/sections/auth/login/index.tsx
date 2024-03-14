'use client';

import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import '../style.css';
import ICFacebook from '@/components/Icons/ICFacebook';
import ICGoogle from '@/components/Icons/ICGoogle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SectionHome from '@/sections/home/view/SectionHome';
import { keyLocalStorage } from '@/configs/config';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { onErrorContact } from '@/ultils/notification';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { ProductCartContext } from '@/context-provider';
// interface IProps {
//   children: ReactNode;
// }

const defaultValues = {
  username: '',
  password: '',
};

const formSchema = yup.object({
  username: yup.string().required('Tài khoản là bắt buộc!'),
  password: yup.string().required('Mật khẩu là bắt buộc!'),
});

export function Login() {
  const [checkRemember, setCheckRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { clearDataCartProductContext } = useContext(ProductCartContext);

  const methods = useForm<any>({
    resolver: yupResolver(formSchema) as any,
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const { ok, error }: any = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      if (ok) {
        clearDataCartProductContext();
        router.push('/list-product-dashboard');
        localStorage.removeItem(keyLocalStorage.keyProductsInCart);
      } else {
        onErrorContact({
          message: 'Đăng nhập thất bại ! Vui lòng thử lại',
        });
      }
      setIsLoading(false);
    } catch (error) {

      console.log(error)
      onErrorContact({
        message: 'Đăng nhập thất bại ! Vui lòng thử lại',
      });
    }
  };
  const handleCheckRemember = (value: boolean) => {
    setCheckRemember(value);
  };

  const handleFacebookLogin = () => {
    signIn('facebook');
  };

  const handleGoogleLogin = async () => {
     await signIn('google');
  };

  return (
    <div className="mt-[3rem]">
      <div className="container-custom flex flex-wrap m-auto items-center justify-center py-36 md:py-32">
        <div className="hidden md:block w-full md:w-1/2 px-6">
          <Image
            src="/img/login/img-login.jpg"
            alt=""
            quality={80}
            width={614}
            height={496}
            className="w-full object-cover h-[80.5rem] md:h-[30.625rem] rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-20 md:px-6 md:pr-16 max-sm:pt-[12rem]">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <span className="text-black text-[4.95rem] md:text-2xl font-bold">
                Đăng nhập
              </span>
              <p className="text-[3.15rem] md:text-base font-semibold">
                Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn
              </p>
            </div>

            <div className="grid gap-12 md:gap-4 py-12 md:py-4">
              <div className="flex flex-col gap-2">
                <span className="text-black text-[3.6rem] md:text-lg uppercase font-bold">
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
              <div>
                <Checkbox
                  onCheckedChange={(value: boolean) =>
                    handleCheckRemember(value)
                  }
                  name="remember"
                  className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem]"
                />
                <span className="ml-8 md:ml-4 text-[3.15rem] md:text-[1.25rem] font-semibold">
                  Lưu tài khoản
                </span>
              </div>
            </div>
            <div className="bg-[#55D5D2] hover:bg-[#f58f5d] p-12 md:p-3 text-[3.15rem] md:text-base rounded-3xl md:rounded-xl">
              <button
                type="submit"
                className="w-full text-white flex justify-center items-center font-semibold"
                disabled={isLoading}
              >
                Đăng nhập
                {isLoading && (
                  <div>
                    <div className="px-[3rem] md:px-[1rem] max-md:hidden">
                      <LoadingGlobal stroke="white" />
                    </div>
                    <div className="px-[2rem] md:px-[1rem] hidden max-md:block">
                      <LoadingGlobal stroke="white" width={3} height={3} />
                    </div>
                  </div>
                )}
              </button>
            </div>
            <div className="text-[3.15rem] md:text-[1.25rem] hover:text-orange-400 mt-6 md:mt-2 font-semibold">
              <Link href="#">Quên mật khẩu ?</Link>
            </div>
            <div className="bg-[#1877F2] p-12 md:p-3 text-[3.15rem] md:text-base rounded-3xl md:rounded-xl mt-6 md:mt-2">
              <button
                type="button"
                className="w-full text-white flex items-center"
                onClick={handleFacebookLogin}
              >
                <ICFacebook width={35} height={35} />
                <p className="text-center w-full font-semibold">
                  Đăng nhập bằng
                  <b> Facebook</b>
                </p>
              </button>
            </div>
            {/* <a */}
            {/*  href="https://anna.okhub-tech.com/wp-login.php?loginSocial=facebook" */}
            {/*  data-plugin="nsl" */}
            {/*  data-action="connect" */}
            {/*  data-redirect="current" */}
            {/*  data-provider="facebook" */}
            {/*  data-popupwidth="600" */}
            {/*  data-popupheight="679" */}
            {/* > */}
            {/*  Click here to login or register */}
            {/* </a> */}
            <div className="p-12 md:p-3 text-[3.15rem] md:text-base rounded-3xl md:rounded-xl mt-12 md:mt-3 btn-login-gg">
              <button type="button" className="w-full flex items-center" onClick={handleGoogleLogin}>
                <ICGoogle width={35} height={35} />
                <p className="text-center w-full font-semibold">
                  Đăng nhập bằng
                  <b> Google</b>
                </p>
              </button>
            </div>
          </FormProvider>
          <p className="text-center mt-16 md:mt-4 text-[3.15rem] md:text-base font-semibold">
            Bạn chưa có tài khoản Anna ?
          </p>
          <div className="text-center mt-6 md:mt-2 text-[#81c8c2] text-[3.15rem] md:text-base">
            <Link href="/dang-ky" className="underline font-semibold">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  );
}
