'use client';

import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import ICLogo from '@/components/Icons/ICLogo';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';
import './style.css';
import ICArrowDown from '@/components/Icons/ICArrowDown';
import DropdownProductHeader from '@/components/component-ui-custom/dropdown-product-header';
import DropdownSeeMoreHeader from '@/components/component-ui-custom/dropdown-see-more-header';
import ICCart from '@/components/Icons/ICCart';
import DropdownCartHeader from '@/components/component-ui-custom/dropdown-cart-header';
import Link from 'next/link';
import DropdownSearchHeader from '@/components/component-ui-custom/dropdown-search-header';
import React, { useContext, useEffect, useState } from 'react';
import { IListProductMenuHeader } from '@/types/types-general';
import { cn } from '@/lib/utils';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { delayMenu } from '@/configs/config';
import { HoverCardContent } from '@/components/ui-custom/hover-card-without-animate';
import ICLocationComponent from '@/components/component-ui-custom/ic-location-component';
import { useBoolean } from '@/hooks/use-boolean';
import { ProductCartContext } from '@/context-provider';
import ICUser from '@/components/Icons/ICUser';
import { useDebounce } from '@uidotdev/usehooks';
import { fetchDataAuthen, postData } from '@/lib/post-data';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import map from 'lodash.map';

interface IProps {
  dataProps: IListProductMenuHeader[] | [];
  // avatarUser?: string;
}
function NavItems(props: IProps) {
  const { dataProps } = props;
  const [quantityProductCart, setQuantityProductCart] = useState(0);

  // package next
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // state coding
  const { listCartGlobal } = useContext(ProductCartContext);

  const { data: session } = useSession();

  const isHomepage = useBoolean(false);
  const isShowOverlay = useBoolean(false);
  const [keyTabMenuActive, setKeyTabMenuActive] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listDataSearchByKey, setListDataSearchByKey] = useState([]);
  const [searchTerm, setSearchTerm] = useState<any>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  const fetchDataBySearch = async () => {
    // GET SEARCH BY KEYWORD
    const bodySearchKeyword: any = {
      url: `wp-json/custom/v1/search/?keyword=${searchTerm}`,
      method: 'get',
    };

    await postData(bodySearchKeyword)
      .then((res) => {
        setListDataSearchByKey(res?.data);
        setIsLoading(false);
      })
      .catch((res) => {
        setIsLoading(false);
      });
    try {
      await fetchDataAuthen({
        url: 'wp-json/customer-search/v1/create-search',
        method: 'post',
        body: JSON.stringify({ search_value: searchTerm }),
      }).then((res) => {
        console.log('res', res);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

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
    // setListDataSearchByKey([]);
    // setSearchTerm('');

    if (keyTabMenuActive !== null) {
      setKeyTabMenuActive(null);
    }
  };

  const handleOnChangeSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleOnKeyEnterSearch = (e: any): void => {
    if (e.keyCode === 13) {
      router.push(`/tim-kiem?search=${searchTerm}`);
      onMouseLeaveTabMenu();
    }
  };

  useEffect(() => {
    const searchHN = async () => {
      if (debouncedSearchTerm) {
        // getDetailProductByColor.mutate();
        setIsLoading(true);

        fetchDataBySearch();
      }
    };

    searchHN();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (pathname === '/tim-kiem') {
      setSearchTerm(searchParams.get('search'));
    } else setSearchTerm('');

    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (pathname === '/') {
        if (scrollY > 1000) {
          isHomepage.onTrue();
        } else isHomepage.onFalse();

        return;
      }

      isHomepage.onTrue();
    });
  }, [pathname]);

  useEffect(() => {
    let total = 0;
    map(listCartGlobal, (item) => {
      total += Number(item.quantity);
    });

    setQuantityProductCart(total);
  }, [listCartGlobal]);

  return (
    <nav className={` w-full py-[0.63rem]`}>
      <div className="navbar-container w-[87.5rem] mx-auto">
        {/* <PromotionSlider /> */}
        <div
          role="button"
          onClick={onMouseLeaveTabMenu}
          className={cn(
            ' absolute top-0 left-0 transition-all duration-2s bg-[#0000004d] -z-10 backdrop-blur-[12.5px]',
            keyTabMenuActive !== null
              ? 'opacity-100 w-full h-[150vh]'
              : 'opacity-0'
          )}
        />

        <div
          className={cn(
            'transition-all duration-200 overflow-hidden top-nav flex items-center justify-between mb-[0.5rem] h-[1.9rem]'
          )}
        >
          <span
            className={cn(
              'text-[0.875rem] transition-all duration-300 not-italic leading-[1.3125rem] uppercase',
              keyTabMenuActive !== null || !isHomepage.value
                ? 'text-white'
                : 'text-title-level-black',
              keyTabMenuActive !== null ? 'font-semibold' : 'font-bold'
            )}
          >
            giảm ngay 15% cho đơn hàng đầu tiên
          </span>
          <div className="flex items-center">
            <Link
              href="/chinh-sach-bao-hanh"
              className={cn(
                'text-white text-[0.875rem] cursor-pointer  border-[#ffffff69] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] bg-[#1d1d1d57] backdrop-blur-[12.5px] font-bold rounded-[6.25rem]',
                keyTabMenuActive !== null ? 'border-x-[0.5px]' : 'border-0'
              )}
            >
              Chính sách
            </Link>
            <Link
              href="/order-checking"
              className={cn(
                'cursor-pointer text-white text-[0.875rem] border-[#ffffff69]  not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] ml-[0.38rem] bg-[#1d1d1d57] backdrop-blur-[12.5px] font-bold rounded-[6.25rem]',
                keyTabMenuActive !== null ? 'border-x-[0.5px]' : 'border-0'
              )}
            >
              Tra cứu đơn hàng
            </Link>
            <Link
              href="/list-product-dashboard"
              // className="h-full w-auto p-[0.25rem] ml-[0.4rem] flex justify-center items-center rounded-full border-[1px] border-[#1D1D1D42] bg-[#1D1D1D42]"
              className={cn(
                'h-full w-auto ml-[0.4rem] text-white text-[0.875rem]  not-italic leading-[1.3125rem] font-bold flex justify-center items-center rounded-full border-[#ACACAC] bg-[#1d1d1d57] backdrop-blur-[12.5px] px-[0.88rem] py-[0.25rem]',
                keyTabMenuActive !== null ? 'border-x-[0.5px]' : 'border-0'
              )}
            >
              <ICUser height="0.8125rem" width="0.8125rem" />
              {session?.user ? (
                <span className="mb-0 pb-0 ml-[0.25rem]">
                  {session?.user.firstName}
                </span>
              ) : (
                <span className="mb-0 pb-0 ml-[0.25rem]">Tài khoản</span>
              )}

              {/* <Image */}
              {/*  src={avatarUser ?? '/img/no-avatar.png'} */}
              {/*  height={31} */}
              {/*  width={124} */}
              {/*  className="w-[1.6rem] object-cover h-[1.6rem] rounded-full" */}
              {/*  alt="Logo" */}
              {/* /> */}
              {/* <ICUser width="1rem" height="1rem" /> */}
            </Link>
          </div>
        </div>
        <div className="h-[3.75rem] hover:border-x-[0.5px] hover:border-b-[0.5px] transition-all duration-500 border-[#ffffff69] bg-[#1d1d1d57] backdrop-blur-[12.5px] w-full flex items-center rounded-[6.25rem] px-[1.25rem]">
          <Link href="/">
            <ICLogo fill="white" width="2.8125rem" height="2.5rem" />
          </Link>
          <ul className="h-full grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center ml-[2.12rem]">
            <li className="active has-child h-full group">
              <HoverCard
                open={keyTabMenuActive === 'product'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
                onOpenChange={(status: any) =>
                  status
                    ? onOpenChangeDropdown('product')
                    : onMouseLeaveTabMenu()
                }
              >
                <HoverCardTrigger asChild>
                  <Link
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                    }}
                    href="/cua-hang"
                    onClick={onMouseLeaveTabMenu}
                    className={cn(
                      `flex items-center h-full`,
                      keyTabMenuActive !== 'product'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Sản phẩm
                    </span>
                    <ICArrowDown
                      stroke="white"
                      width="0.7rem"
                      height="0.5rem"
                    />
                  </Link>
                </HoverCardTrigger>

                <HoverCardContent
                  side="bottom"
                  align="start"
                  className="w-[87.5rem] -ml-[6rem] rounded-[1.5rem] p-0 custom-container-dropdown-header"
                >
                  <DropdownProductHeader
                    listProduct={dataProps}
                    onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-[#4DC0BD]" />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="has-child tab-menu flex items-center ml-[1.75rem]">
              <Link href="/he-thong-cua-hang" className="flex items-center">
                <span className=" cursor-pointer mr-[0.5rem] capitalize not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                  Tìm cửa hàng
                </span>
                {/* <ICLocation fill="white" width="1.25rem" height="1.51338rem" /> */}
                <div className="max-lg:hidden">
                  <ICLocationComponent />
                </div>
                {/* <div className="max-lg:block hidden"> */}
                {/*  <ICLocationComponent height={15} width={20} /> */}
                {/* </div> */}
              </Link>
            </li>
            <li className="w-[30.4375rem] max-lg:w-[28rem] has-child mx-[1.75rem] h-full">
              <HoverCard
                open={keyTabMenuActive === 'search'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
                // onOpenChange={(status: any) =>
                //     // onOpenChangeDropdown('search')
                //   status
                //     ? onOpenChangeDropdown('search')
                //     : onMouseLeaveTabMenu()
                // }
              >
                <HoverCardTrigger>
                  <div
                    role="button"
                    onClick={() => onOpenChangeDropdown('search')}
                    className="relative rounded-[1.25rem] flex items-center h-full"
                  >
                    <Input
                      className={cn(
                        'input-search custom-placeholder-input px-[1.5rem] py-[0.75rem] placeholder:font-bold text-white placeholder:text-white placeholder:opacity-75 border-0 outline-0 rounded-[6.25rem] bg-white bg-opacity-25 focus-visible:outline-0'
                        // keyTabMenuActive !== null
                        //   ? 'placeholder-[#7B7B7B]'
                        //   : 'placeholder-[#F4F4F4]'
                      )}
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                      value={searchTerm}
                      autoFocus={keyTabMenuActive !== null}
                      onChange={handleOnChangeSearch}
                      onKeyDown={handleOnKeyEnterSearch}
                      onFocus={() => onOpenChangeDropdown('search')}
                    />
                    <div className="absolute top-[50%] -translate-y-1/2 right-[1.5rem]">
                      {isLoading ? (
                        <LoadingGlobal />
                      ) : (
                        <button type="button" onClick={handleOnKeyEnterSearch}>
                          <ICSearch
                            fill="white"
                            width="1.00006rem"
                            height="1rem"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="start"
                  asChild={false}
                  // sideOffset={6}
                  // onMouseLeave={() => onLeave()}
                  // onMouseMove={() => onMove('search')}
                  className="w-[30.4375rem] rounded-[1.5rem]"
                >
                  <DropdownSearchHeader
                    listDataSearchByKey={listDataSearchByKey}
                    onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="active has-child h-full">
              <HoverCard
                open={keyTabMenuActive === 'see-more'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
                onOpenChange={(status: any) =>
                  status
                    ? onOpenChangeDropdown('see-more')
                    : onMouseLeaveTabMenu()
                }
              >
                <HoverCardTrigger asChild>
                  <div
                    className={cn(
                      `cursor-pointer px-[6px] py-[4px] flex items-center h-full`,
                      keyTabMenuActive !== 'see-more'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] capitalize not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Xem Thêm
                    </span>
                    <ICArrowDown
                      stroke="white"
                      width="0.7rem"
                      height="0.5rem"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="end"
                  // onMouseLeave={() => onLeave()}
                  // onMouseMove={() => onMove('see-more')}
                  className="dropdown-seemore w-[87.5rem] -mr-[21rem] rounded-[1.5rem] relative mt-[12px] p-0 custom-container-dropdown-header"
                >
                  <DropdownSeeMoreHeader
                    onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white left-[61.5rem]" />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="tab-menu cursor-pointer has-child flex items-center mx-[1.75rem]">
              <Link href="/hanh-trinh-tu-te">
                <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                  Hành trình tử tế
                </span>
              </Link>
            </li>
            <li className="cursor-pointer has-child flex items-center h-full">
              <HoverCard
                // open
                open={keyTabMenuActive === 'cart'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
                onOpenChange={(status: any) =>
                  status ? onOpenChangeDropdown('cart') : onMouseLeaveTabMenu()
                }
              >
                <HoverCardTrigger asChild>
                  <Link
                    href="/gio-hang"
                    onClick={onMouseLeaveTabMenu}
                    className={cn(
                      `flex items-center h-full`,
                      keyTabMenuActive !== 'cart'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Giỏ hàng
                    </span>
                    <div className="relative mb-[0.5rem]">
                      <ICCart
                        fill="white"
                        width="1.47381rem"
                        height="1.44581rem"
                      />
                      <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem] leading-[1.125rem]">
                        {quantityProductCart}
                      </div>
                    </div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="end"
                  className="w-[25.875rem] -mr-[1.5rem] relative rounded-[1.5rem]"
                >
                  <DropdownCartHeader
                    onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                    listCartGlobal={listCartGlobal}
                    quantityProductCart={quantityProductCart}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white" />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavItems;
