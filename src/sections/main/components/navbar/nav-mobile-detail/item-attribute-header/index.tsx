'use client';

import React from 'react';
import ICLogo from '@/components/Icons/ICLogo';
import { ICClose } from '@/components/Icons/ICClose';
import ICArrowLeft2 from '@/components/Icons/ICArrowLeft2';

interface IProps {
  handleHideChildrenMenu: any;
  isShowChildrenMenu?: any;
  handleTogleMenu?: any;
}
function LayoutAttributeHeader(props: IProps) {
  const { handleHideChildrenMenu, isShowChildrenMenu, handleTogleMenu } = props;
  return (
    <div className="h-full pt-[9.6rem] bg-[#55D5D2]">
      <div className="px-[3.2rem]">
        <div className="flex justify-between">
          <ICLogo width="18.13333rem" height="16rem" />
          <button
            type="button"
            onClick={() => {
              handleTogleMenu();
              handleHideChildrenMenu();
            }}
          >
            <ICClose width="6.4rem" height="6.4rem" />
          </button>
        </div>
        <div className="flex mt-[5.2rem]">
          <button type="button" onClick={handleHideChildrenMenu}>
            <ICArrowLeft2 />
          </button>
          <span className="ml-[2.67rem] text-white text-[4.8rem] not-italic font-bold leading-[6.24rem]">
            {isShowChildrenMenu?.listProductInCategory?.name}
          </span>
        </div>
        <ul className="mt-[3.27rem] list-disc list-inside grid grid-cols-2">
          {isShowChildrenMenu?.listProductInCategory?.children &&
            isShowChildrenMenu?.listProductInCategory?.children.map(
              (item: any, index: number) => (
                <li
                  key={index}
                  // onClick={() => handleShowChildrenMenu(item)}
                  className="text-[3.73333rem] text-white not-italic font-extrabold leading-[4.85333rem] uppercase py-[2.27rem] mb-[0.93rem]"
                >
                  {item?.name}
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
}

export default LayoutAttributeHeader;
