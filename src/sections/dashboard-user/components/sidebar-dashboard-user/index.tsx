'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { ICHome } from '@/components/Icons/ICHome';
import { ICProduct } from '@/components/Icons/ICProduct';
import { ICLogout } from '@/components/Icons/ICLogout';
import { ICUser2 } from '@/components/Icons/ICUser2';
import './style.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { keyLocalStorage } from '@/configs/config';
import { ProductCartContext } from '@/context-provider';
import useSWR from 'swr';
import { fetchDataAuthen } from '@/lib/post-data';

function SidebarDashboardUser() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [infoUser, setInfoUser] = useState<any>();

  const { clearDataCartProductContext } = useContext(ProductCartContext);

  const bodyGetInfoUser: any = {
    url: `wp-json/custom-woo-api/v1/customer`,
    method: 'get',
    token: session?.user?.token,
  };

  const dataUserInfo = useSWR(bodyGetInfoUser.url, () =>
    session !== null
      ? fetchDataAuthen(bodyGetInfoUser).then((res) => setInfoUser(res))
      : undefined, 
      {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false
      }
  );

  const listTab = [
    {
      icon: <ICProduct width="1.25rem" height="1.25rem" fill="#414141" />,
      title: 'Danh sách sản phẩm',
      route: '/list-product-dashboard',
    },
    {
      icon: <ICUser2 width="1.25rem" height="1.25rem" stroke="#414141" />,
      title: 'Thông tin tài khoản',
      route: '/user-info',
    },
    {
      icon: <ICHome width="1.25rem" height="1.25rem" stroke="#414141" />,
      title: 'Thông tin địa chỉ',
      route: '/address-info',
    },
    // {
    //   icon: <ICLogout width="1.25rem" height="1.25rem" stroke="#414141" />,
    //   title: 'Đăng xuất',
    //   route: '/tai-khoan',
    // },
  ];

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false }); // Sign out without redirecting immediately
      localStorage.removeItem(keyLocalStorage.keyProductsInCart);
      clearDataCartProductContext();
      router.push('/tai-khoan'); // Redirect to the home page after successful sign-out
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle sign-out error if needed
    }
  };
  return (
    <div className="side-bar-dashboard-user h-full bg-white w-full flex flex-col items-center py-[3rem] px-[1rem] rounded-[1rem] max-md:w-full max-md:mb-[5.5rem] max-md:px-[5.8rem]">
      <Image
        src={infoUser?.avatar_url ?? '/img/no-avatar.png'}
        height={31}
        width={124}
        className="w-[7.9375rem] object-cover h-[7.9375rem] rounded-full max-md:w-[34.133rem] max-md:h-[34.133rem]"
        alt="Logo"
      />
      <h3 className="font-Nexa-Bold font-semibold text-[1.875rem] not-italic my-[0.5rem] max-md:text-[8rem]">
        {infoUser?.first_name} {infoUser?.last_name}
      </h3>
      <p className="font-medium text-[1rem] max-md:text-[4.267rem]">
        {infoUser?.email}
      </p>
      <div className="h-[1px] my-[1.5rem] bg-[#00000026] w-3/4 mx-[4rem] max-md:w-full max-md:my-[6rem]" />
      <div className="w-[57%] h-[15rem] max-md:w-full max-md:h-auto">
        {listTab.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className={`${
              pathname === item.route
                ? 'sidebar-dashboard-hover'
                : 'item-memu-sidebar'
            } cursor-pointer mb-[0.2rem] flex items-center py-[0.3rem] rounded-[0.4rem] transition-all duration-150 max-md:mb-[4rem]`}
          >
            <div className="w-[1.2rem] max-md:w-[10.667rem] max-md:h-[10.667rem] max-md:flex max-md:justify-center max-md:items-center max-md:bg-[#55D5D2]">
              {item.icon}
            </div>
            <span className="font-Nexa-Normal font-medium ml-[0.5rem] mt-[0.2rem] max-md:text-[3.733rem] max-md:ml-[3rem]">
              {item.title}
            </span>
          </Link>
        ))}
        <div
          role="button"
          className="item-memu-sidebar cursor-pointer mb-[0.2rem] flex items-center py-[0.3rem] rounded-[0.4rem] transition-all duration-150 max-md:mb-[4rem]"
          onClick={handleSignOut}
        >
          <div className="w-[1.2rem] max-md:w-[10.667rem] max-md:h-[10.667rem] max-md:flex max-md:justify-center max-md:items-center max-md:bg-[#55D5D2]">
            <ICLogout width="1.25rem" height="1.25rem" stroke="#414141" />
          </div>
          <span className="font-Nexa-Normal font-medium ml-[0.5rem] mt-[0.2rem] max-md:text-[3.733rem] max-md:ml-[3rem]">
            Đăng xuất
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarDashboardUser;
