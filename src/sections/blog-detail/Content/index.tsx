import ICSchedule from '@/components/Icons/ICSchedule';
import ICUser from '@/components/Icons/ICUser';
import { formatDateDayAndYear } from '@/ultils/format-date';
import { getMonth } from 'date-fns';
import React from 'react';
import viLocale from 'date-fns/locale/vi';

function ContentBlogDetail({ listBlog }: any) {
  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto py-[6.25rem] md:pb-6">
      <div className="flex items-center">
        <div className=" h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 mr-12 md:mr-6">
          <ICSchedule />
          <div className="text-white text-[3.25rem] md:text-base font-normal pl-6 md:pl-2">
            <span>
              {viLocale?.localize?.month(getMonth(new Date(listBlog?.date)))}{' '}
            </span>
            <span>
              {listBlog && listBlog.date && formatDateDayAndYear(listBlog.date)}
            </span>
          </div>
        </div>
        <div className="flex">
          <ICUser />
          <p className="pl-4 md:pl-2 text-[4.25rem] md:text-[1.25rem] text-[#4D4D4D] font-medium">
            KinhMatAnna
          </p>
        </div>
      </div>
      <h4 className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[2rem] font-semibold">
        {listBlog?.title?.rendered}
      </h4>
      <div
        className="blog-content max-md:text-[3.25rem] font-medium"
        dangerouslySetInnerHTML={{ __html: `${listBlog?.content?.rendered}` }}
      />
    </div>
  );
}

export default ContentBlogDetail;
