import ICVectorRight from '@/components/Icons/ICVectorRight';
import Image from 'next/image';
import { formatDate } from '@/ultils/format-date';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import Link from 'next/link';
import { ItemBlogType } from '@/types/types-general';
import ICMore from '@/components/Icons/ICMore';
import { ArrowTopRight } from '@/app/icons';

interface IPropBlog {
  dataBlog: ItemBlogType;
}
function ItemBlog({ dataBlog }: IPropBlog) {
  return (
    <div className="blog-item-home p-4 mt-[1rem] md:mt-0">
      <div className="pb-16 md:pb-4 bg-white w-full h-full rounded-[6.4rem] md:rounded-3xl border-2 border-gray-200 flex-col justify-between items-start gap-4 inline-flex">
        <div className="pb-6 w-full flex-col justify-start gap-5 flex">
          <div className="overflow-hidden rounded-[6.4rem] md:rounded-3xl">
            <Image
              src={
                dataBlog?.thumbnail_url ? dataBlog?.thumbnail_url : serviceImg
              }
              width={445}
              height={304}
              alt=""
              className="image-item-blog w-full h-[81.06667rem] md:h-[19rem] rounded-[6.4rem] md:rounded-3xl object-cover"
            />
          </div>
          <Link
            href={`/blog/${dataBlog?.post_slug}`}
            className="item-title-blog transition-opacity px-16 md:px-4 text-[#454545] text-[6rem] md:text-2xl font-extrabold line-clamp-2"
          >
            {dataBlog?.title}
          </Link>
        </div>
        <div className="px-20 md:px-6 justify-between items-center flex w-full">
          <div className="flex">
            <span className="text-zinc-500 text-[4rem] md:text-lg font-bold">
              Blog{' '}
            </span>
            <span className="text-stone-300 text-[4rem] md:text-lg font-bold px-[0.5rem]">
              /
            </span>
            <span className="text-zinc-500 text-[4rem] md:text-lg font-bold">
              {' '}
              Ngày {dataBlog && formatDate(dataBlog?.post_date)}
            </span>
          </div>
          <Link
            href={`/blog/${dataBlog?.post_slug}`}
            className="item-btn-blog rounded-[50px] justify-center items-center gap-2.5 flex"
          >
            <div className="btn-blog-title text-center text-blueAnna text-[4rem] md:text-lg font-bold">
              ĐỌC TIẾP
            </div>
            <div className="line--more">
              <ArrowTopRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemBlog;
