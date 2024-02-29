import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import Image from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
  img: string;
  icon: ReactNode;
  social: string;
  infor: string;
  linkSocial?: string;
}

function ItemSocial(props: IProps) {
  return (
    <div className="w-full relative h-[133.26667rem] md:h-[31.9rem] lg:h-full item-social overflow-hidden max-md:hidden">
      <Image
        src={props?.img}
        alt="image social"
        width={400}
        height={400}
        className="w-full object-cover image-item-slide ease-out duration-300 h-full"
      />
      <div className="absolute top-1/2 background-item-social-slide left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <div className="flex justify-center">{props?.icon}</div>
        <h4 className="text-center text-white text-[3.375rem] font-extrabold leading-[1.29] lg:mt-[1rem]">
          {props?.social}
        </h4>
        <div className="text-center text-white text-lg font-bold leading-[1.77]">
          {props?.infor}
        </div>
        <div className="flex justify-center pt-3 lg:pt-[0.56rem]">
          <Link
            target="_blank"
            href={props.linkSocial ?? ''}
            className="py-[0.25rem] pr-[0.25rem] pl-[1.25rem] bg-[#F58F5D] rounded-full justify-start items-center inline-flex"
          >
            <div className="text-right text-white text-[0.8125rem] not-italic leading-[0.8125rem] font-extrabold mr-[0.75rem]">
              KHÁM PHÁ
            </div>
            <div className="h-[2.49994rem] w-[2.49994rem] bg-white rounded-[100px] justify-center items-center flex">
              <ICArrowTopRightActive
                width="1rem"
                height="1rem"
                stroke="#F58F5D"
                fill="#F58F5D"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemSocial;
