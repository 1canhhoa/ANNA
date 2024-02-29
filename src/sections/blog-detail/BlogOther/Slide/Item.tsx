import serviceImg from '@/assets/blogImg/Rectangle719.png';
import Image from 'next/image';
import Link from 'next/link';

function ItemBlog({ dataBlogOther }: any) {
  return (
    <div className="w-full px-6 md:px-2 mt-[6rem] md:mt-4">
      <div className="relative">
        <Image
          src={
            dataBlogOther?.thumbnail_url
              ? dataBlogOther?.thumbnail_url
              : serviceImg
          }
          alt=""
          quality={80}
          width={304}
          height={302}
          className="w-full object-cover h-[80.5rem] md:h-[18.75rem]"
        />
      </div>
      <Link
        href={`/blog/${dataBlogOther?.post_slug}`}
        className="md:h-[3.7rem] text-black text-[4.25rem] md:text-lg font-bold my-12 md:my-4 line-clamp-2 border-b border-b-neutral-700 border-opacity-20"
      >
        {dataBlogOther?.title}
      </Link>
    </div>
  );
}

export default ItemBlog;
