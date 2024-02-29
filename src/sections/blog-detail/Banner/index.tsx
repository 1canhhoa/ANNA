import ICDots from '@/components/Icons/ICDots';
import Image from 'next/image';
import Link from 'next/link';
import BannerImg from '@/assets/blogImg/Rectangle146.jpg';

function BannerBlogDetail() {
  return (
    <div className="relative">
      <Image
        src={BannerImg}
        width={1600}
        height={1000}
        alt="background"
        className="min-h-[45rem] md:min-h-[36.25rem] z-[1] object-fill w-full"
      />
      <div className="h-full w-full flex items-end absolute top-0 left-0">
        <div className="container-custom md:px-8">
          <div className="pb-16">
            <div className="text-white text-[5rem] md:text-[3.25rem] font-bold pb-4">
              BLOG
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem]"
              >
                Trang chủ
              </Link>
              <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
              <div className="text-white text-[0.875rem] font-semibold leading-[2.25rem] not-italic max-md:text-[3.2rem] max-md:leading-[4.8rem]">
                Blog
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerBlogDetail;
