import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IProps {
  img: StaticImageData;
  icon: ReactNode;
  social: string;
  infor: string;
}

function ItemSocial(props: IProps) {
  return (
    <div className="w-full md:w-1/4 relative h-[133.26667rem] md:h-[29.188rem] item-social overflow-hidden">
      <Image
        src={props?.img}
        alt=""
        width={400}
        height={400}
        className="w-full object-cover image-item-slide ease-out duration-300"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <div className="flex justify-center">{props?.icon}</div>
        <h4 className="text-center text-blueAnna text-[54px]">
          {props?.social}
        </h4>
        <div className="text-center text-blueAnna text-lg font-bold">
          {props?.infor}
        </div>
        <div className="flex justify-center pt-3">
          <div className="pl-[5rem] md:pl-5 pr-1 py-1 bg-orange-400 rounded-[100px] justify-start items-center gap-3 inline-flex">
            <div className="text-right text-white text-[3.46667rem] md:text-[1rem]">
              KHÁM PHÁ
            </div>
            <div className="h-[10.5rem] md:h-10 w-[10.5rem] md:w-10 bg-white rounded-[100px] justify-center items-center flex">
              <ICArrowTopRightActive
                width={24}
                height={24}
                stroke="#F58F5D"
                fill="#F58F5D"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSocial;
