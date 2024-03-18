'use client';

import Image from 'next/image';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import ICUser from '@/components/Icons/ICUser';
import ICComment from '@/components/Icons/ICComment';
import ICSchedule from '@/components/Icons/ICSchedule';
import { formatDateDayAndYear } from '@/ultils/format-date';
import Link from 'next/link';
import viLocale from 'date-fns/locale/vi';
import { getMonth } from 'date-fns';
import { ItemBlogType } from '@/types/types-general';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import PaginationGlobal from '@/components/component-ui-custom/pagination-global';

interface IPropBlog {
  listBlog: ItemBlogType[];
  setPage: any;
  page: number;
  totalBlog: number;
}
function ListBlog({ listBlog, setPage, page, totalBlog }: IPropBlog) {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <div className="py-[6.25rem] md:py-0 flex w-full justify-center flex-wrap md:pb-12 pt-[1rem]">
      {listBlog &&
        listBlog.length > 0 &&
        listBlog?.map((dataBlog: any, index: number) => {
          if (index !== 0) {
            return (
              <div
                className="w-full md:w-1/3 lg:w-1/4 px-8 md:px-4 mt-[6rem] md:mt-4"
                key={index}
              >
                <div className="relative">
                  <Image
                    src={
                      dataBlog?.thumbnail_url
                        ? dataBlog?.thumbnail_url
                        : serviceImg
                    }
                    alt=""
                    quality={80}
                    width={304}
                    height={302}
                    className="w-full object-cover h-[80.5rem] md:h-[18.75rem]"
                  />
                  <div className="h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 absolute top-12 md:top-4 left-12 md:left-4">
                    <ICSchedule />
                    <div className=" text-white text-[2.925rem] md:text-sm font-medium pl-6 md:pl-2">
                      <span>
                        {viLocale?.localize?.month(
                          getMonth(new Date(dataBlog?.post_date))
                        )}{' '}
                      </span>
                      <span>
                        {dataBlog &&
                          dataBlog.post_date &&
                          formatDateDayAndYear(dataBlog.post_date)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${dataBlog?.post_slug}`}
                  className="md:h-[3.5rem] text-black text-[4.25rem] md:text-lg font-bold my-8 md:my-4 line-clamp-2"
                >
                  {dataBlog?.title}
                </Link>
                <div className="border-t border-t-neutral-700 border-opacity-20 py-[4rem] md:py-4 flex justify-between md:block">
                  <div className="flex mb-1 items-center">
                    <ICUser fill="#CCCCCC" />
                    <p className="pl-4 md:pl-2 text-[3.825rem] md:text-base font-medium text-[#4D4D4D] pb-0 mb-0">
                      KinhMatAnna
                    </p>
                  </div>
                  <div className="flex mt-1 items-center">
                    <ICComment />
                    <p className="pl-4 md:pl-2 text-[3.825rem] md:text-base font-medium text-[#4D4D4D] pb-0 mb-0 pt-[0.2rem]">
                      {dataBlog?.comment_status || 'No Comments'}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      <div className="w-fit flex items-center pagigation-global-container max-md:hidden mt-[2.5rem]">
        {/* <div onClick={handlePrevPage}>
          <ICArrowLeft stroke="#55D5D2" />
        </div> */}
        {/* {} */}
        {/* <button
          type="button"
          className="active h-[2rem] w-[2rem] mr-[0.62rem] rounded-full text-[0.875rem] leading-[1.3125rem] not-italic"
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          type="button"
          className="inactive h-[2rem] w-[2rem] rounded-full text-[0.875rem] leading-[1.3125rem] not-italic"
          onClick={() => setPage(2)}
        >
          2
        </button>
        <div onClick={handleNextPage}>
          <ICArrowRight stroke="#55D5D2" />
        </div> */}
        {/* <PaginationGlobal */}
        {/*  total={totalBlog / 8} */}
        {/*  setCurrentPage={setPage} */}
        {/*  currentPage={page} */}
        {/* /> */}
      </div>
    </div>
  );
}

export default ListBlog;
