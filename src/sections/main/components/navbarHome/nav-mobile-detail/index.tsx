'use client';

import ICCart from '@/components/Icons/ICCart';
import ICLocation2 from '@/components/Icons/ICLocation2';
import ICTabMenu from '@/components/Icons/ICTabMenu';
import MenuPopupMobile from '@/sections/main/components/navbarHome/nav-mobile-detail/mobile-popup-menu';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {
  dataListProductHeader?: any;
}
function NavMobileDetail({ dataListProductHeader }: IProps) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const handleTogleMenu = (): void => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className="py-[2.66667rem] px-[2.13333rem] bg-[#7f7f7f4d] rounded-[13.33333rem]">
      <button type="button" onClick={handleTogleMenu} className="pb-[2.67rem]">
        <ICTabMenu />
      </button>
      <Link href="">
        <div className="mb-[2.67rem]">
          <ICLocation2 stroke="white" width="6.4rem" height="6.4rem" />
        </div>
      </Link>
      <Link href="/">
        <div className="mb-[2.67rem] relative w-[6.4rem] h-[6.4rem] ml-[0.8rem]">
          <ICCart fill="white" width="5rem" height="5rem" />
          <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[3.46667rem] h-[3.46667rem] font-bold not-italic text-[2.13333rem]">
            3
          </div>
        </div>
      </Link>
      <MenuPopupMobile
        isShowMenu={isShowMenu}
        handleTogleMenu={handleTogleMenu}
        dataListProductHeader={dataListProductHeader}
      />
    </div>
  );
}

export default NavMobileDetail;
