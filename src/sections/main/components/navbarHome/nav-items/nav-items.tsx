'use client';

import ICArrowDown from '@/components/Icons/ICArrowDown';
import ICCart from '@/components/Icons/ICCart';
import ICLogo from '@/components/Icons/ICLogo';
import ICSearch from '@/components/Icons/ICSearch';
import DropdownCartHeader from '@/components/component-ui-custom/dropdown-cart-header';
import DropdownProductHeader from '@/components/component-ui-custom/dropdown-product-header';
import DropdownSearchHeader from '@/components/component-ui-custom/dropdown-search-header';
import DropdownSeeMoreHeader from '@/components/component-ui-custom/dropdown-see-more-header';
import ICLocationComponent from '@/components/component-ui-custom/ic-location-component';
import { HoverCardContent } from '@/components/ui-custom/hover-card-without-animate';
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import { delayMenu } from '@/configs/config';
import { useBoolean } from '@/hooks/use-boolean';
import { IListProductMenuHeader } from '@/types/types-general';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import './style.css';
import { cn } from '@/lib/utils';
import { ProductCartContext } from '@/context-provider';
import ICUser from '@/components/Icons/ICUser';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';

interface IProps {
  dataProps: IListProductMenuHeader[] | [];
  styleNavbar: boolean;
  isHide: boolean;
  avatarUser?: string;
}
function NavItems(props: IProps) {
  const { dataProps, styleNavbar, avatarUser, isHide } = props;
  const { data: session } = useSession();

  const menuMobile = useBoolean();
  const isShowOverlay = useBoolean(false);
  const { listCartGlobal } = useContext(ProductCartContext);

  const [keyTabMenuActive, setKeyTabMenuActive] = useState<string | null>(null);

  const onOpenChangeDropdown = (
    tab: 'product' | 'see-more' | 'cart' | 'search'
  ) => {
    if (keyTabMenuActive === null) {
      setKeyTabMenuActive(tab);
    }
    isShowOverlay.onTrue();
  };

  const onMouseLeaveTabMenu = async () => {
    isShowOverlay.onFalse();

    if (keyTabMenuActive !== null) {
      setKeyTabMenuActive(null);
    }
  };

  // useEffect(() => {
  //   if (
  //     typeof window !== 'undefined' &&
  //     localStorage.getItem(keyProductsInCart) !== null
  //   ) {
  //     const listProduct: any = localStorage.getItem(keyProductsInCart);
  //     const parseListProduct = JSON.parse(listProduct);
  //     if (parseListProduct.length > 0) {
  //       setNumberProductInCart(parseListProduct.length);
  //     }
  //   }
  // }, []);

  return (
    <nav className="container-custom">
      {/* <div */}
      {/*    className={`${isShowOverlay.value ? 'opacity-100  fixed top-0 left-0 h-[100vh] w-full transition duration-300 ease-in-out bg-navbar-main-home -z-10' : 'opacity-0'}`}/> */}
      <div
        className={cn(
          ' fixed top-0 left-0 transition-all duration-2s bg-[#0000004d] -z-10 backdrop-blur-[12.5px]',
          isShowOverlay.value ? 'opacity-100 w-full h-[100vh]' : 'opacity-0'
        )}
      />
      <div
        className={`${
          isHide ? 'h-0' : 'h-[1.84rem]'
        } transition-all duration-200 overflow-hidden top-nav flex items-center justify-between mb-[0.5rem]`}
      >
        <span
          className={` text-[0.875rem] transition-all duration-300 not-italic leading-[1.3125rem] uppercase ${
            keyTabMenuActive !== null || !styleNavbar
              ? 'text-white'
              : 'text-[#828282]'
          } ${keyTabMenuActive !== null ? 'font-semibold' : 'font-bold'} `}
        >
          giảm ngay 15% cho đơn hàng đầu tiên
        </span>
        <div className="flex items-center">
          {/* <span */}
          {/*  className={`${ */}
          {/*    styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1d1d1d75]' */}
          {/*  } text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem]  font-bold rounded-[6.25rem] `} */}
          {/* > */}
          <span
            className={cn(
              `text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem]  font-bold rounded-[6.25rem] `,
              styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1d1d1d75]',
              keyTabMenuActive !== null ? 'border-top-navbar' : ''
            )}
          >
            Chính sách
          </span>
          <Link
            href="/order-checking"
            className={cn(
              `cursor-pointer text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] ml-[0.38rem] font-bold rounded-[6.25rem] `,
              styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1d1d1d75]',
              keyTabMenuActive !== null ? 'border-top-navbar' : ''
            )}
          >
            Tra cứu đơn hàng
          </Link>
          <Link
            href="/list-product-dashboard"
            className={cn(
              `cursor-pointer flex items-center text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] ml-[0.38rem] font-bold rounded-[6.25rem] `,
              styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1d1d1d75]',
              keyTabMenuActive !== null ? 'border-top-navbar' : ''
            )}
          >
            <ICUser height="0.8125rem" width="0.8125rem" />
            {/* <span className="mb-0 pb-0 ml-[0.25rem]">Tài khoản</span> */}
            {session?.user ? (
              <span className="mb-0 pb-0 ml-[0.25rem]">
                {session?.user.firstName}
              </span>
            ) : (
              <span className="mb-0 pb-0 ml-[0.25rem]">Tài khoản</span>
            )}
          </Link>
          {/* <Link */}
          {/*  href="/list-product-dashboard" */}
          {/*  // className="h-full w-auto p-[0.25rem] ml-[0.4rem] flex justify-center items-center rounded-full border-[1px] border-[#1D1D1D42] bg-[#1D1D1D42]" */}
          {/*  className="h-full w-auto ml-[0.4rem] flex justify-center items-center rounded-full border-[1px] border-[#ACACAC]" */}
          {/* > */}
          {/*  <Image */}
          {/*    src={avatarUser ?? '/img/no-avatar.png'} */}
          {/*    height={31} */}
          {/*    width={124} */}
          {/*    className="w-[1.6rem] object-cover h-[1.6rem] rounded-full" */}
          {/*    alt="Logo" */}
          {/*  /> */}
          {/*  /!* <ICUser width="1rem" height="1rem" /> *!/ */}
          {/* </Link> */}
        </div>
      </div>
      <div
        className={`bg-navbar-main-home ${
          keyTabMenuActive !== null ? 'border-navbar' : ''
        } h-[3.75rem] w-full flex items-center rounded-[6.25rem] px-[1.5rem] backdrop-blur-[12.5px]`}
      >
        <Link href="/">
          <ICLogo
            fill={`${styleNavbar ? '#4DC0BD' : '#fff'}`}
            width="2.8125rem"
            height="2.5rem"
          />
        </Link>
        <ul className="h-full grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center ml-[2.12rem]">
          <li className="active has-child nav navbar-product h-full">
            <HoverCard
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
              onOpenChange={(status: any) =>
                status ? onOpenChangeDropdown('product') : onMouseLeaveTabMenu()
              }
            >
              <HoverCardTrigger asChild>
                <Link
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                  href="/cua-hang"
                  className={`${
                    isShowOverlay.value ? 'tab-menu' : 'tab-menu-active'
                  } flex items-center h-full`}
                >
                  <span
                    className={`navbar-product-item mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.6875rem] ${
                      styleNavbar
                        ? `${
                            keyTabMenuActive === 'product'
                              ? 'text-blueAnna'
                              : 'text-[#454545]'
                          }`
                        : `${
                            keyTabMenuActive === 'product'
                              ? 'text-blueAnna'
                              : 'text-[#fff]'
                          }`
                    }`}
                  >
                    Sản phẩm
                  </span>
                  <ICArrowDown
                    stroke={`${
                      styleNavbar
                        ? `${
                            keyTabMenuActive === 'product'
                              ? '#55D5D2'
                              : '#454545'
                          }`
                        : `${
                            keyTabMenuActive === 'product' ? '#55D5D2' : '#fff'
                          }`
                    }`}
                    width="0.7rem"
                    height="0.5rem"
                  />
                </Link>
              </HoverCardTrigger>

              <HoverCardContent
                side="bottom"
                align="start"
                // onMouseLeave={() => onLeave()}
                // onMouseMove={() => onMove('product')}
                className="rounded-[1.5rem] w-[87.5rem] -ml-[6rem] p-0 container-dropdown-menu "
              >
                <DropdownProductHeader listProduct={dataProps} />
                <HoverCardArrow width={24} height={20} className="fill-white" />
              </HoverCardContent>
            </HoverCard>
          </li>
          {/* <li className="has-child navbar-store w-fit"> */}
          {/*  <Link */}
          {/*    href="/he-thong-cua-hang" */}
          {/*    className="tab-menu flex items-center ml-[1.75rem]" */}
          {/*  > */}
          {/*    <HoverCardContent */}
          {/*      side="bottom" */}
          {/*      align="start" */}
          {/*      // onMouseLeave={() => onLeave()} */}
          {/*      // onMouseMove={() => onMove('product')} */}
          {/*      className="rounded-[1.5rem] container-dropdown-menu " */}
          {/*    > */}
          {/*      <DropdownProductHeader listProduct={dataProps} /> */}
          {/*      <HoverCardArrow width={24} height={20} className="fill-white" /> */}
          {/*    </HoverCardContent> */}
          {/*  </Link> */}
          {/* </li> */}
          <li className="has-child navbar-store">
            <Link
              href="/he-thong-cua-hang"
              className="tab-menu flex items-center ml-[1.75rem]"
            >
              <span
                className={`${
                  styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                } cursor-pointer mr-[0.5rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.6875rem] navbar-store-item`}
              >
                Tìm cửa hàng
              </span>
              <ICLocationComponent fill={styleNavbar ? '#454545' : '#fff'} />
            </Link>
          </li>
          <li className="w-[30.4375rem] mx-[1.75rem] has-child h-full">
            {/* <Popover */}
            <HoverCard
              onOpenChange={(status: any) =>
                status ? onOpenChangeDropdown('search') : onMouseLeaveTabMenu()
              }
            >
              {/* <PopoverTrigger asChild> */}
              <HoverCardTrigger>
                <div
                  role="button"
                  className="relative rounded-[6.25rem] flex items-center h-full "
                  onClick={menuMobile.onToggle}
                >
                  <div className="placeholder:font-bold">
                    <Input
                      className="placeholder-[#fff] placeholder:opacity-75 input-search px-[1.5rem] py-[0.75rem] w-full h-[2.75rem] rounded-[6.25rem] bg-white/25 border-[#EEFBFB]/20 focus-visible:outline-0 text-white"
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                    />
                  </div>
                  <div className="absolute top-[50%] -translate-y-1/2 right-[1.5rem]">
                    <ICSearch fill="white" width="1.00006rem" height="1rem" />
                  </div>
                </div>
                {/* </PopoverTrigger> */}
              </HoverCardTrigger>

              <HoverCardContent className="rounded-[1.5rem] w-[30.4375rem]">
                <DropdownSearchHeader />
              </HoverCardContent>

              {/* <PopoverContent className="rounded-[1.5rem] w-[30.4375rem]"> */}
              {/*  <DropdownSearchHeader /> */}
              {/* </PopoverContent> */}
              {/* </Popover> */}
            </HoverCard>
          </li>
          <li className="active has-child navbar-more h-full">
            <HoverCard
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
              onOpenChange={(status: any) =>
                status
                  ? onOpenChangeDropdown('see-more')
                  : onMouseLeaveTabMenu()
              }
            >
              <HoverCardTrigger asChild>
                <div className="tab-menu cursor-pointer flex items-center h-full">
                  <span
                    className={`${
                      styleNavbar
                        ? `${
                            keyTabMenuActive === 'see-more'
                              ? 'text-blueAnna'
                              : 'text-[#454545]'
                          }`
                        : `${
                            keyTabMenuActive === 'see-more'
                              ? 'text-blueAnna'
                              : 'text-[#fff]'
                          }`
                    } navbar-more-item mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.6875rem]`}
                  >
                    Xem Thêm
                  </span>
                  <ICArrowDown
                    stroke={`${
                      styleNavbar
                        ? `${
                            keyTabMenuActive === 'see-more'
                              ? '#55D5D2'
                              : '#454545'
                          }`
                        : `${
                            keyTabMenuActive === 'see-more' ? '#55D5D2' : '#fff'
                          }`
                    }`}
                    width="0.7rem"
                    height="0.5rem"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="end"
                className="rounded-[1.5rem] w-[87.5rem] -mr-[21rem] transition-none p-0 container-dropdown-menu "
              >
                <DropdownSeeMoreHeader
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
                <HoverCardArrow width={24} height={20} className="fill-white" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="tab-menu cursor-pointer has-child flex items-center mx-[1.75rem] navbar-action">
            <Link href="/hanh-trinh-tu-te">
              <span
                className={`${
                  styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                } not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.6875rem] navbar-action-item`}
              >
                Hành trình tử tế
              </span>
            </Link>
          </li>
          <li className="cursor-pointer has-child navbar-card flex items-center h-full">
            <HoverCard
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
              onOpenChange={(status: any) =>
                status ? onOpenChangeDropdown('cart') : onMouseLeaveTabMenu()
              }
            >
              <HoverCardTrigger asChild>
                <div className="tab-menu flex items-center relative h-full">
                  <span
                    className={`${
                      styleNavbar
                        ? 'text-[#454545]'
                        : `${
                            keyTabMenuActive === 'cart'
                              ? 'text-blueAnna'
                              : 'text-[#fff]'
                          }`
                    } ${
                      keyTabMenuActive === 'cart' && 'text-blueAnna'
                    } navbar-card-item mr-[0.5rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.6875rem]`}
                  >
                    Giỏ hàng
                  </span>
                  <ICCart
                    fill={`${
                      styleNavbar
                        ? '#4DC0BD'
                        : `${keyTabMenuActive === 'cart' ? '#55D5D2' : '#fff'}`
                    }`}
                    width="1.47381rem"
                    height="1.44581rem"
                  />
                  <div className="flex items-center justify-center absolute bottom-2.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem] leading-[1.125rem]">
                    {listCartGlobal?.length}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="start"
                className="!w-[414px] mr-dropdown-menu rounded-[1.5rem]"
              >
                <DropdownCartHeader
                  listCartGlobal={listCartGlobal}
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
                <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white" />
              </HoverCardContent>
            </HoverCard>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavItems;
