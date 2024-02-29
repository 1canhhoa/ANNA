import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface IPropsItem {
  dataSystem: any;
  index: number;
  checkLocate: { index: number; link: string };
  setCheckLocate: Dispatch<SetStateAction<{ index: number; link: string }>>;
}
function ItemStore({
  dataSystem,
  index,
  setCheckLocate,
  checkLocate,
}: IPropsItem) {
  const handleChangeMap = () => {
    setCheckLocate({
      index: index,
      link: dataSystem?.emble[0],
    });
  };
  return (
    <div
      role="button"
      className={`${
        index === checkLocate?.index ? 'bg-[#f5f5f5]' : ''
      } p-12 md:p-[10px]`}
      onClick={handleChangeMap}
    >
      <h4 className="text-black text-[1.063rem] max-md:text-[3.467rem] font-semibold mb-[0.625rem] max-md:mb-[2.667rem]">
        {dataSystem?.title}
      </h4>
      <ul>
        <li className="text-[0.875rem] max-md:text-[3.2rem] font-medium mb-[0.5rem] max-md:mb-[2.133rem]">
          {dataSystem?.address[0]}
        </li>
        <li className="text-[0.875rem] max-md:text-[3.2rem] font-medium mb-[0.5rem] max-md:mb-[2.133rem]">
          {dataSystem?.phone}
        </li>
        <li className="text-[0.875rem] max-md:text-[3.2rem] font-medium mb-[0.5rem] max-md:mb-[2.133rem]">
          09:00 - 21:00
        </li>
        <li className="text-[0.875rem] max-md:text-[3.2rem] font-medium">
          <Link href={`tel:${dataSystem?.phone}`} className="text-[#007bff]">
            Gọi điện
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ItemStore;
