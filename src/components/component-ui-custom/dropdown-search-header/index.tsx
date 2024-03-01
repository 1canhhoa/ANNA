'use client';

import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import './style.css';
import { useContext } from 'react';
import { DataHeaderDetailContext } from '@/sections/main/components/navbar/navbar';
import map from 'lodash.map';
import Link from 'next/link';

interface IProps {
  listDataSearchByKey?: any;
  onMouseLeaveTabMenu?: any;
}
function DropdownSearchHeader(props: IProps) {
  const { listDataSearchByKey, onMouseLeaveTabMenu } = props;
  const { dataHistorySearch } = useContext(DataHeaderDetailContext);

  const listTextOutstanding = [
    {
      id: 1,
      title: 'Essilor',
    },
    {
      id: 1,
      title: 'Elements',
    },
    {
      id: 1,
      title: 'Chemi',
    },
    {
      id: 1,
      title: 'Kodak',
    },
    {
      id: 1,
      title: 'Essilor',
    },
  ];

  return (
    <div className="grow border-none rounded-[1.5rem] container p-0">
      <div className="py-[0.75rem] px-[0.75rem] w-full bg-white rounded-[1.5rem]">
        {listDataSearchByKey && listDataSearchByKey.length > 0 && (
          <ul className="mb-[1.5rem] max-h-[21rem] overflow-x-hidden overflow-y-hidden">
            {map(listDataSearchByKey, (item, index) => (
              <li key={index}>
                <Link
                  href={`/san-pham/${item.slug}`}
                  onClick={onMouseLeaveTabMenu}
                  className="item-history-search-header flex items-center justify-between pb-[1.2rem] last:border-b-0 border-b-2 border-b-[#ECECEC] mb-[1.2rem] "
                >
                  <span className="cursor-pointer text-[1rem] not-italic font-bold leading-[1.5rem]">
                    {item.name}
                  </span>
                  <div className="rotate-[321deg] icon-arrow-search">
                    <ICArrowRight2
                      fill="#F58F5E"
                      width="1.1rem"
                      height="1.1rem"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <span className="uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
          LỊCH SỬ TÌM KIẾM
        </span>
        <ul className="mt-[1.5rem]">
          {map(dataHistorySearch, (item, index) => (
            <li key={index}>
              {parseInt(index, 10) < 4 && (
              <Link
              href={`/tim-kiem?search=${item.search_value}`}
              onClick={onMouseLeaveTabMenu}
              className="item-history-search-header flex items-center justify-between pb-[1.2rem] last:border-b-0 border-b-2 border-b-[#ECECEC] mb-[1.2rem] "
              >
 <span className="cursor-pointer text-[#444] hover:text-[#F58F5E] text-[1rem] not-italic font-bold leading-[1.5rem]">
                    {item.search_value}
                  </span>
                  <div className="rotate-[321deg] icon-arrow-search">
                    <ICArrowRight2
                      fill="#F58F5E"
                      width="1.1rem"
                      height="1.1rem"
                    />
                  </div>
              </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="w-[30.4375rem] h-[1.375rem] bg-[#ECECEC] opacity-30 -ml-[1.75rem]" />
        <div className="pt-[1.8rem]">
          <span className="uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
            TỪ KHÓA NỔI BẬT
          </span>
          <ul className="mt-[1.5rem] flex flex-wrap ">
            {listTextOutstanding.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer mb-[0.5rem] mr-[0.38rem] w-fit h-fit py-[0.3125rem] px-[1rem] rounded-[6.25rem] bg-[#55D5D2] text-[0.875rem] text-white not-italic leading-[1.3125rem] font-bold "
              >
                <Link href={`/tim-kiem?search=${item.title.toLowerCase()}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownSearchHeader;
