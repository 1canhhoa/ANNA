import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import './style.css';

export function BottomTabCart(): React.JSX.Element {
  return (
    <div className="bottom-tab-cart hidden max-md:flex fixed bottom-0 right-0 z-20  items-center justify-between h-[18rem] w-full bg-white">
      <div className="flex items-center pl-[3rem]">
        <Checkbox
          className="checked-fontsize border-2 border-[#C4C4C4] max-md:w-[5rem] max-md:h-[5rem] checked:text-[4rem]"
          aria-label="Select row"
        />
        <span className="text-[3.8rem] font-semibold ml-[2rem]">Tất cả</span>
      </div>
      <div className="flex h-full">
        <div className="mr-[4rem] flex flex-col justify-center">
          <div>
            <span className="text-[2.8rem] font-semibold">Tổng: </span>
            <span className="text-[4rem] font-bold">50.000đ</span>
          </div>
          <div>
            <span className="text-[2.8rem] font-semibold">
              Phí vận chuyển:{' '}
            </span>
            <span className="text-[4rem] font-bold">50.000đ</span>
          </div>
        </div>
        <button
          type="button"
          className="h-full w-[35rem] bg-[#55D5D2] text-white font-bold text-[4rem]"
        >
          Thanh toán(2)
        </button>
      </div>
    </div>
  );
}
