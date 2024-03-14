"use client"

import { useEffect, useState } from 'react';
import './style.css';
import { cn } from '@/lib/utils';

import { ICClose } from '@/components/Icons/ICClose';
import { timeDelayPopup } from '@/configs/config';
import { useBoolean } from '@/hooks/use-boolean';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  dataPopup?: any;
  isShowPopupGlobal?: any;
}
function PopupGeneral(props: IProps) {
  const { dataPopup } = props;
  const [detailPopupInit, setDetailPopupInit] = useState<any>(undefined);
  const isShowPopupGlobal = useBoolean(false);

  console.log(dataPopup)
  useEffect(() => {
    setTimeout(() => {
      isShowPopupGlobal.onTrue();
    }, timeDelayPopup);
  }, []);
  useEffect(() => {
    setDetailPopupInit(dataPopup);
  }, [dataPopup]);

  return (
    <div>
      <div className="max-md:hidden">
        {isShowPopupGlobal.value && (
          <div
            role="button"
            onClick={() => isShowPopupGlobal.onFalse()}
            className="bg-[#0000004d] backdrop-blur-[2.5px] w-full h-full absolute left-0 z-10"
          />
        )}

        <div
          className={cn(
            'fixed z-[10001] w-[30rem] h-[40rem] bg-white rounded-[1rem] p-[0.2rem] mx-auto transition-all duration-500 top-1/2 left-1/2 -translate-y-1/2',
            isShowPopupGlobal.value
              ? '-translate-x-1/2 '
              : 'translate-x-[100vw]'
          )}
        >
          <div
            role="button"
            onClick={() => isShowPopupGlobal.onFalse()}
            className="flex justify-end absolute p-[0.2rem] right-[5px] top-[5px] bg-white rounded-[1rem]"
          >
            <ICClose stroke="black" />
          </div>

          <Link href={detailPopupInit?.url?.url || ""}  className="image-popup max-w-full max-h-full">
              <Image src={detailPopupInit?.img?.url} alt={detailPopupInit?.img?.alt} width={500} height={500}/>
          </Link>
        </div>

        {isShowPopupGlobal.value && <div className='bg-[rgba(0,0,0,0.4)] fixed w-[100vw] h-[100vh] top-0 left-0 z-[10000]'></div>}
      </div>

      
    </div>
  );
}

export default PopupGeneral;
