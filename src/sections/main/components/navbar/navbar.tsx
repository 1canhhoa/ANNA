'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import { IListProductMenuHeader } from '@/types/types-general';
import { createContext, useEffect, useState } from 'react';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
  // dataListCart?: any;
  // avatarUser?: string;
  dataHistorySearch?: any;
}

export const DataHeaderDetailContext = createContext<any>({});

function Navbar(props: IProps) {
  const {
    dataListProductHeader,
    // dataListCart,
    // avatarUser,
    dataHistorySearch,
  } = props;

  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);

  const [styleNavbar, setStyleNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      setCurrentPositionScrollY(scrollY);
      if (scrollY > currentPositionScrollY && window.scrollY >= 300) {
        setStyleNavbar(true);
      } else {
        setStyleNavbar(false);
      }
    });
  }, [currentPositionScrollY]);

  return (
    <DataHeaderDetailContext.Provider
      value={{ dataListProductHeader, dataHistorySearch }}
    >
      {/* <Logo /> */}
      <div
        className={cn(
          'flex justify-between w-full fixed top-[0px] z-40 transition-all duration-500 max-lg:hidden ',
          styleNavbar ? '-translate-y-[110%]' : ''
        )}
      >
        <NavItems
          // avatarUser={avatarUser}
          dataProps={dataListProductHeader ?? []}
        />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-lg:block">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </DataHeaderDetailContext.Provider>
  );
}

export default Navbar;
