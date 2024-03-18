import Image from 'next/image';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ICSchedule from '@/components/Icons/ICSchedule';
import { ItemBlogType } from '@/types/types-general';
import { getMonth } from 'date-fns';
import { formatDateDayAndYear } from '@/ultils/format-date';
import viLocale from 'date-fns/locale/vi';
import Link from 'next/link';
import ICArrowBlog from '@/components/Icons/ICArrowBlog';

interface IPropBlog {
  blogItemFirst: ItemBlogType;
}
function ServiceBlog({ blogItemFirst }: IPropBlog) {
  return (
    <Link href={`/blog/${blogItemFirst?.post_slug}`}>
      <div className="py-[6.25rem] px-8 md:px-4 pb-8 md:pb-0">
        <h4 className="text-black text-[4.7rem] md:text-[2.25rem] font-semibold">
          GÓC TƯ VẤN CHỌN KÍNH ĐẸP
        </h4>
        <div className="py-0 md:py-[2.5rem] flex flex-wrap">
          <div className="w-full md:w-3/5">
            <Image
              src={
                blogItemFirst?.thumbnail_url
                  ? blogItemFirst?.thumbnail_url
                  : serviceImg
              }
              alt=""
              quality={80}
              width={746}
              height={505}
              className="w-full object-cover"
            />
          </div>
          <div className="flex items-center w-full md:w-2/5 bg-[#F3F3F3] ">
            <div className="px-[6rem] md:px-[2rem] py-[5rem] md:py-[2rem]">
              <div className="w-[45rem] md:w-[12rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2">
                <ICSchedule />
                <div className="text-white text-[2.7rem] md:text-sm font-medium  pl-6 md:pl-2">
                  <span>
                    {viLocale?.localize?.month(
                      getMonth(new Date(blogItemFirst?.post_date))
                    )}{' '}
                  </span>
                  <span>
                    {blogItemFirst &&
                      blogItemFirst.post_date &&
                      formatDateDayAndYear(blogItemFirst.post_date)}
                  </span>
                </div>
              </div>
              <h5 className="text-[4.5rem] md:text-[1.75rem] font-semibold pb-32 md:pb-16 pt-10 md:pt-4">
                {blogItemFirst?.title}
              </h5>
              <div className="see-more-blog text-[3.6rem] md:text-sm font-normal flex items-center cursor-pointer">
                <span className="pr-[0.5rem] font-bold">ĐỌC NGAY</span>
                <ICArrowBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ServiceBlog;
