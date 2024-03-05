'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import './nav-items/style.css';
import { useEffect, useState } from 'react';
import { IListProductMenuHeader } from '@/types/types-general';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';
import './style.css';
import NavMobileDetail from '@/sections/main/components/navbar/nav-mobile-detail';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
  dataListCart?: any;
  avatarUser?: string;
}

function NavbarHome(props: IProps) {
  const { dataListProductHeader, dataListCart, avatarUser } = props;
  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);

  const [styleNavbar, setStyleNavbar] = useState(false);
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      setCurrentPositionScrollY(scrollY);
      if (scrollY > currentPositionScrollY && window.scrollY >= 300) {
        setStyleNavbar(true);
      } else if (scrollY < currentPositionScrollY && window.scrollY >= 300) {
        setIsHide(true);
        setStyleNavbar(false);
      } else if (scrollY < currentPositionScrollY && window.scrollY < 300) {
        setIsHide(false);
        setStyleNavbar(false);
      } else {
        setStyleNavbar(false);
        setIsHide(false);
      }
    });
  }, []);


  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          `flex justify-between w-full py-[0.63rem] fixed top-0 z-50 max-md:hidden navbar-home transition-all duration-500 ${
            styleNavbar ? '-translate-y-[110%]' : ''
          } ${isHide ? 'lg:pt-[0.75rem]' : 'lg:pt-[1.5rem]'}`
        )}
      >
        <NavItems
          avatarUser=""
          styleNavbar={false}
          dataProps={dataListProductHeader ?? []}
          isHide={isHide}
        />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-md:block">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </div>
  );
}

export default NavbarHome;
