import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import { formatDate } from '@/ultils/format-date';

interface IPropItem {
  blog: any;
  index: number;
}
function ItemMobileBlogHome({ blog, index }: IPropItem) {
  return (
    <Link
      key={index}
      href={`/blog/${blog?.post_slug}`}
      className="flex lg:hidden rounded-[3.2rem] bg-white mb-8 h-[27.2rem]"
    >
      <div className="w-2/5  rounded-[3.2rem]">
        <Image
          alt=""
          height={102}
          width={135}
          className="image-item-slide ease-out duration-300  rounded-[3.2rem] h-full w-full object-cover bg-slate-500 "
          src={blog?.thumbnail_url ? blog?.thumbnail_url : serviceImg}
        />
      </div>
      <div className="p-[2.3rem] w-3/5 flex flex-col justify-between">
        <p className="font-extrabold md:font-bold text-[3.36rem] line-clamp-3 text-[#454545] leading-[1.4]">
          {blog?.title}
        </p>
        <div className="text-[2.4rem] text-[#A9A9A9] font-bold leading-normal">
          <span>Blog / </span>
          <span>{blog && formatDate(blog.post_date).replaceAll('/', '.')}</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemMobileBlogHome;
