import { useEffect, useState } from 'react';
import './style.css';
import { cn } from '@/lib/utils';

import { ICClose } from '@/components/Icons/ICClose';
import { timeDelayPopup } from '@/configs/config';

interface IProps {
  detailPopupById?: any;
  isShowPopupGlobal?: any;
}
function PopupGeneral(props: IProps) {
  const { detailPopupById, isShowPopupGlobal } = props;
  const [detailPopupInit, setDetailPopupInit] = useState<any>(undefined);

  useEffect(() => {
    setTimeout(() => {
      isShowPopupGlobal.onTrue();
    }, timeDelayPopup);
  }, []);
  useEffect(() => {
    setDetailPopupInit(detailPopupById && detailPopupById[0]);
  }, [detailPopupById]);

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
            'fixed z-10 w-[30rem] h-[40rem] bg-white rounded-[1rem] p-[0.2rem] mx-auto transition-all duration-500 top-1/2 left-1/2 -translate-y-1/2',
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
          <p
            className="image-popup"
            dangerouslySetInnerHTML={{
              __html:
                detailPopupInit && detailPopupInit?.popub_info[0]?.post_content,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PopupGeneral;
