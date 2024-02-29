import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ItemBlog from '@/sections/home/view/Blog/Item';
import SliderMobileBlogHome from '@/sections/home/view/Blog/SlideMobile';
import map from 'lodash.map';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Blog = async () => {
  const listBlog = await fetchDataRest(
    'GET',
    'post/v1/posts?per_page=9&page=1'
  );

  return (
    <div className="max-sm:px-[3.2rem] max-md:pb-[6.4rem] flex max-md:flex-col container-homepage max-lg:pb-6">
      <div className="w-full md:w-1/3 pt-[6.4rem] sm:pt-[4rem] relative">
        <div className="md:sticky md:top-32">
          <h4 className="text-blueAnna text-[4.8rem] text-center md:text-start md:text-[4rem] pb-[3.2rem] md:pb-[2rem] font-black uppercase leading-[4.8rem] md:leading-[1.2]">
            ANNA BLOG
            <br className="hidden md:block" /> & SHARE
          </h4>
          <Link
            href="/blog"
            className="md:w-[252px] hidden md:flex md:h-[52px] pl-12 pr-1 py-1 bg-[#55D5D2] rounded-[100px] flex justify-between items-center gap-3"
          >
            <div className="text-white text-[1.125rem] leading-[1.35rem] md:text-lg font-black uppercase">
              Xem tất cả
            </div>
            <div className="p-1.5 bg-white rounded-[50px] justify-start items-center gap-2.5 flex">
              <ICArrowTopRightActive
                width={31.997}
                height={32}
                stroke="#55D5D2"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-2/3 flex-wrap">
        <div className="w-full md:w-1/2">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {map(listBlog?.item, (blog: any, index: number) => {
            if (index <= 2) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
        <div className="w-full md:w-1/2 pt-0 sm:pt-40">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {map(listBlog?.item, (blog: any, index: number) => {
            if (index > 2 && index <= 5) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
      </div>
      <div className="block md:hidden">
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        <SliderMobileBlogHome dataSliderBlog={listBlog?.item} />
      </div>
      <div className="block md:hidden text-end w-full">
        <Link
          href="/blog"
          className="flex w-full justify-end items-center gap-2.5 -mt-[5.5rem]"
        >
          <div className="w-[4.2666rem] md:w-6 h-[4.2666rem] md:h-6 justify-center items-center flex">
            <ArrowRight className="text-[#F58F5D]" />
          </div>
          <div className="collect-title text-center text-[#F58F5D] text-[3.2rem] md:text-lg font-bold leading-normal">
            Xem tất cả
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
