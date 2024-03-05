'use client';

import ICSearch from '@/components/Icons/ICSearch';
import ICTabMenu from '@/components/Icons/ICTabMenu';
import { ICClose } from '@/components/Icons/ICClose';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import './style.css';
import ICCartMobile from '@/components/Icons/ICCartMobile';
import { cn } from '@/lib/utils';
import { ProductCartContext } from '@/context-provider';
import { usePathname, useRouter } from 'next/navigation';
import { isUseBanner } from '@/ultils/check-is-banner';
import ICUser from '@/components/Icons/ICUser';
import ICPhone from '@/components/Icons/ICPhone';
import ICEmail from '@/components/Icons/ICEmail';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ICLocationLight from '@/components/Icons/ICLocationLight';
import { useDebounce } from '@uidotdev/usehooks';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { postData } from '@/lib/post-data';
import { useSession } from 'next-auth/react';
import { linkSocial } from '@/configs/config';
import map from 'lodash.map';

interface IProps {
  dataListProductHeader?: any;
}
function NavMobileDetail(props: IProps) {
  const { dataListProductHeader } = props;
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const { inforUserGlobal } = useContext(ProductCartContext);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [styleNavbar, setStyleNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState<any>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quantityProductCart, setQuantityProductCart] = useState(0);


  const { listCartGlobal, isLogin } = useContext<any>(ProductCartContext);

  const handleOnPressDone = (e: any): void => {
    if (e.charCode === 13) {
      router.push(`tim-kiem?search=${searchTerm}`);
    }
  };
  const handleOnChangeSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!isUseBanner(pathname)) {
      setStyleNavbar(true);
      return;
    }

    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if (scrollY > 180) {
        setStyleNavbar(true);
      } else {
        setStyleNavbar(false);
      }
    });
  }, [pathname]);
  const handleTogleMenu = (): void => {
    setIsShowMenu(!isShowMenu);
  };
  useEffect(() => {
    let total = 0;
    map(listCartGlobal, (item) => {
      total += Number(item.quantity);
    });

    setQuantityProductCart(total);
  }, [listCartGlobal]);
  // console.log(listCartGlobal, "listCartGlobal")

  return (
    <div>
      <div
        className={cn(
          'h-[9.93rem] max-md:h-[14.93rem] flex fixed z-30 top-0 max-md:py-[2.67rem] py-[1.67rem] px-[3.2rem]  w-full transition-all duration-300',
          styleNavbar ? 'navbar-mobile-active' : 'navbar-mobile-inactive'
        )}
      >
        <div className="hidden max-md:block">
          <Link
            href="/he-thong-cua-hang"
            className="fixed  bottom-[47rem] right-[4rem] h-[10.6rem] w-[10.6rem] rounded-full bg-[#55D5D2] flex justify-center items-center"
          >
            {/* <span className="animate-ping absolute -z-10 inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" /> */}
            <ICLocationLight />
          </Link>
        </div>
        <div className="rounded-[26.66667rem] relative  max-md:h-[10.67333rem] bg-navbar-mobile-detail flex items-center w-[71.2rem] z-10">
          <div className="absolute top-[50%] -translate-y-1/2 left-[3.5rem]">
            {isLoading ? (
              <LoadingGlobal stroke="red" width="4rem" height="4rem" />
            ) : (
              <button type="button" onClick={handleOnPressDone}>
                <div className="max-md:hidden">
                  <ICSearch fill="#fff" width="3.333rem" height="3.333rem" />
                </div>
                <div className="hidden max-md:block">
                  <ICSearch fill="#fff" width="4.333rem" height="4.333rem" />
                </div>
              </button>
            )}
          </div>
          <Input
            className="max-md:text-[3.36rem] text-[2.36rem] text= text-white font-bold h-full focus:outline-0 not-italic pl-[8.64rem] outline-0 max-md:py-[5rem] py-[1rem] rounded-[13.33333rem] border-[1px] border-opacity-40 border-white placeholder-[#fff] bg-[#7F7F7F4D] focus-visible:outline-0"
            type="text"
            placeholder="Tìm sản phẩm"
            onChange={handleOnChangeSearch}
            onKeyPress={handleOnPressDone}
          />
        </div>
        <Link
          href="/gio-hang"
          // onClick={handleTogleMenu}
          className="mx-[2.93rem] flex items-center"
        >
          <div className="icon-change-color relative w-[4.54293rem] h-[4.54293rem] max-md:w-[7.54293rem] max-md:h-[7.54293rem] ml-[0.8rem]">
            <div className="max-md:hidden">
              <ICCartMobile
                // stroke={styleNavbar ? '#454545' : 'white'}
                stroke="#454545"
                width="4.54293rem"
                height="4.54293rem"
              />
            </div>
            <div className="hidden max-md:block">
              <ICCartMobile
                // stroke={styleNavbar ? '#454545' : 'white'}
                stroke="#454545"
                width="7.54293rem"
                height="7.54293rem"
              />
            </div>
            <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[2.46667rem] h-[2.46667rem] max-md:w-[3.46667rem] max-md:h-[3.46667rem] font-bold not-italic text-[1.8rem] max-md:text-[2.5144rem]">
              {quantityProductCart}
            </div>
          </div>
        </Link>
        <button
          className="icon-change-color"
          type="button"
          onClick={handleTogleMenu}
        >
          <div className="max-md:hidden">
            <ICTabMenu stroke="#454545" width="5rem" height="5rem" />
          </div>
          <div className="hidden max-md:block">
            <ICTabMenu stroke="#454545" />
          </div>
        </button>
      </div>

      {/* navbar mobile */}
      <div
        className={`${
          isShowMenu ? 'opacity-100 z-50' : 'opacity-0 -z-50'
          // isShowMenu ? 'opacity-100 z-20' : 'opacity-100 z-20'
          // isShowMenu ? 'block' : 'hidden'
        } h-screen w-full fixed transition-all duration-500 top-0 left-0 bg-[#55D5D2] pt-[2.93rem] overflow-y-auto`}
      >
        <div className="padding-horizontal-mobile flex justify-between items-center">
          <Link href="/" onClick={handleTogleMenu}>
            <ICLogo width="9.86667rem" height="8.8rem" />
          </Link>
          <div className="flex items-center">
            <Link
              href="/list-product-dashboard"
              onClick={handleTogleMenu}
              className="profile-user-mobile w-fit flex items-center rounded-[26.6667rem] py-[0.8rem] pl-[0.9rem] pr-[3rem] max-md:py-[1.33rem] max-md:pl-[1.33rem] max-md:pr-[4.53rem]"
            >
              {session === null ? (
                <>
                  <div className="h-[5rem] w-[5rem] max-md:h-[6.93333rem] max-md:w-[6.93333rem] rounded-full bg-white flex justify-center items-center">
                    <ICUser
                      height="3.46667rem"
                      width="3.46667rem"
                      fill="#55D5D2"
                    />
                  </div>
                  <span className="text-[3.36rem] text-white not-italic leading-[5.04rem] font-bold ml-[1.6rem]">
                    Tài khoản
                  </span>
                </>
              ) : (
                <>
                  <div className="h-[5rem] w-[5rem] max-md:h-[6.93333rem] max-md:w-[6.93333rem] rounded-full bg-white flex justify-center items-center">
                    <Image
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-full object-cover"
                      src={inforUserGlobal?.avatar_url ?? '/img/no_image.jpg'}
                      alt="chọn kính"
                    />
                  </div>
                  <span className="text-[2.5rem] max-md:text-[3.36rem] text-white not-italic leading-[5.04rem] font-bold ml-[1.6rem]">
                    {session?.user?.firstName}
                  </span>
                </>
              )}
            </Link>
            <button
              className="ml-[2.13rem]"
              type="button"
              onClick={handleTogleMenu}
            >
              <div className="max-md:hidden">
                <ICClose width="4.4rem" height="4.4rem" />
              </div>
              <div className="hidden max-md:block">
                <ICClose width="6.4rem" height="6.4rem" />
              </div>
            </button>
          </div>
        </div>
        <ul className="mt-[4rem] list-disc list-inside">
          {dataListProductHeader &&
            dataListProductHeader.map((item: any, index: number) => (
              <li
                key={index}
                className="padding-horizontal-mobile text-[3.83rem] text-white not-italic font-extrabold leading-[4.9rem] uppercase py-[2.27rem] max-md:py-[4.27rem] border-t-[0.26667rem] border-t-white border-opacity-30"
              >
                <Link
                  href={`/danh-muc-san-pham/${item.slug}`}
                  onClick={handleTogleMenu}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
        </ul>

        <li className="padding-horizontal-mobile text-[3.834rem] text-white not-italic font-extrabold leading-[4.99rem] uppercase py-[4.27rem] border-t-[0.26667rem] border-t-white border-opacity-30">
          <Link href="/hanh-trinh-tu-te" onClick={handleTogleMenu}>
            HÀNH TRÌNH TỬ TẾ
          </Link>
        </li>
        <div className="h-[38.13333rem] grow mt-[0.53rem] mb-[4.8rem] pl-[3.2rem] flex overflow-x-auto hide-scrollbar-global">
          <Link
            href="/hanh-trinh-tu-te"
            onClick={handleTogleMenu}
            className="min-w-[56.8rem] h-[38.13333rem] relative mr-[2.13rem]"
          >
            <Image
              src="/img/httt/bg-about.jpg"
              alt=""
              width={200}
              height={150}
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="absolute bottom-[1.33rem] left-[1.6rem] bg-hanh-trinh-tu-te h-[7.46667rem] w-[53.6rem] rounded-[7.46667rem] flex justify-between items-center py-[1.87rem] pl-[3.2rem] pr-[1.07rem]">
              <span className="text-[2.39rem] text-white not-italic leading-[3.3597rem] uppercase font-bold">
                Túi tử tế
              </span>
              <div className="h-[5.6rem] w-[5.6rem] bg-white rounded-full flex justify-center items-center">
                <div className="rotate-[321deg] icon-arrow-search">
                  <ICArrowRight2 fill="#F58F5E" width="3rem" height="3rem" />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/hanh-trinh-tu-te"
            onClick={handleTogleMenu}
            className="min-w-[56.8rem] h-[38.13333rem] relative mr-[2.13rem]"
          >
            <Image
              src="/img/httt/eye.jpg"
              alt=""
              width={200}
              height={150}
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="absolute bottom-[1.33rem] left-[1.6rem] bg-hanh-trinh-tu-te h-[7.46667rem] w-[53.6rem] rounded-[7.46667rem] flex justify-between items-center py-[1.87rem] pl-[3.2rem] pr-[1.07rem]">
              <span className="text-[2.39rem] text-white not-italic leading-[3.3597rem] uppercase font-bold">
                ĐÔI MẮT MẶT TRỜI
              </span>
              <div className="h-[5.6rem] w-[5.6rem] bg-white rounded-full flex justify-center items-center">
                <div className="rotate-[321deg] icon-arrow-search">
                  <ICArrowRight2 fill="#F58F5E" width="3rem" height="3rem" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="padding-horizontal-mobile">
          <Link href="/ve-anna" onClick={handleTogleMenu}>
            <h3 className="text-[3.3597rem] text-white not-italic font-extrabold leading-[4.85333rem] my-[3.2rem]">
              Về ANNA
            </h3>
          </Link>
          <Link href="/order-checking" onClick={handleTogleMenu}>
            <h3 className="text-[3.3597rem] text-white not-italic font-extrabold leading-[4.85333rem] my-[3.2rem]">
              Tra cứu đơn hàng
            </h3>
          </Link>
          <Link href="/blog" onClick={handleTogleMenu}>
            <h3 className="text-[3.3597rem] text-white not-italic font-extrabold leading-[4.85333rem] my-[3.2rem]">
              Blog
            </h3>
          </Link>
        </div>

        {/* line hortizontal */}
        <div className="w-full h-[0.26667rem] bg-white opacity-30 mt-[1.07rem] mb-[4.27rem]" />

        {/* contact anna */}
        <div className="padding-horizontal-mobile mb-[8.5rem]">
          <div className="flex items-center mb-[2.93rem]">
            <ICEmail />
            <a
              href={`mailto:${linkSocial.email}`}
              className="text-[3.3597rem] text-[#EEFBFB] not-italic leading-[4.85333rem] font-bold ml-[1.87rem]"
            >
              ${linkSocial.email}
            </a>
          </div>
          <div className="flex items-center">
            <ICPhone />
            <a
              href={`tel:${linkSocial.phone}`}
              className="text-[3.3597rem] text-[#EEFBFB] not-italic leading-[4.85333rem] font-bold ml-[1.87rem]"
            >
              ${linkSocial.phone}
            </a>
          </div>
        </div>

        {/* link address */}
        <Link
          href="/he-thong-cua-hang"
          onClick={handleTogleMenu}
          className="mx-[3.2rem] p-[2.7rem] button-link-address-header-mobile rounded-[26.66667rem] border-[0.5px] border-white flex items-center justify-center"
        >
          <div className="text-[3.597rem] text-white not-italic font-extrabold leading-[5.22667rem] mr-[2.13rem]">
            Tìm cửa hàng gần bạn
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M8.5604 4.32098L9.18481 3.69654L8.30174 3.69654L3.11043 3.69654L4.69162 2.1158L11.8842 2.1158L11.8842 9.30854L10.3034 10.8895L10.3034 5.69821L10.3034 4.81518L9.679 5.43954C8.7834 6.33502 5.24944 9.82296 3.74085 11.3113C3.50297 11.546 3.12045 11.5453 2.88324 11.3095L2.69749 11.1248C2.4595 10.8882 2.45746 10.504 2.6928 10.265C4.19445 8.74011 7.71954 5.1619 8.5604 4.32098ZM11.9336 9.25916L11.9334 9.25931C11.9335 9.25926 11.9335 9.2592 11.9336 9.25915L11.9336 9.25916Z"
              fill="white"
              stroke="white"
              strokeWidth="0.731595"
            />
          </svg>
        </Link>

        <div className="flex justify-center mb-[10rem]">
          <div className="w-fit grid grid-cols-4 gap-[4.27rem] mt-[5.6rem]">
            <Link href={linkSocial.facebook}>
              <ICFacebookFooter
                stroke="white"
                width="8.53333rem"
                height="8.53333rem"
              />
            </Link>
            <Link href={linkSocial.instagram}>
              <ICInstagramFooter
                stroke="white"
                width="8.53333rem"
                height="8.53333rem"
              />
            </Link>
            <Link href={linkSocial.tiktok}>
              <ICTiktokFooter
                stroke="white"
                width="8.53333rem"
                height="8.53333rem"
              />
            </Link>
            <Link href={linkSocial.shopee}>
              <ICShopeeFooter
                stroke="white"
                width="8.53333rem"
                height="8.53333rem"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobileDetail;
