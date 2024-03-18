import Image from 'next/image';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Link from 'next/link';
import './style.css';
import { useContext } from 'react';
import { ProductCartContext } from '@/context-provider';

interface IProps {
  onMouseLeaveTabMenu: () => void;
}

function DropdownSeeMoreHeader(props: IProps) {
  const { onMouseLeaveTabMenu } = props;
  const { isShowPopupChooseGlasses } = useContext(ProductCartContext);

  const listSeemore = [
    {
      id: 1,
      title: 'Về chúng tôi',
      router: '/ve-anna',
    },
    {
      id: 1,
      title: 'blog',
      router: '/blog',
    },
  ];

  const handleOpenPopupChooseGlass = (): void => {
    onMouseLeaveTabMenu();
    isShowPopupChooseGlasses.onTrue();
  };

  return (
    <div className="dropdown-see-more-header-container custom-container-dropdown-header border-none p-0 rounded-[1.5rem] -mt-[0.34rem]">
      <div className="w-full flex justify-between bg-white rounded-[1.5rem] overflow-hidden">
        <div className="py-[2rem] px-[2.88rem] w-[24.5rem] border-r-2 border-[#55D5D2] bg-[#4DC0BD]">
          <ul className="w-full">
            <li className="mb-[3rem]">
              <button
                type="button"
                onClick={handleOpenPopupChooseGlass}
                className="cursor-pointer text-[#CAF2F1] hover:text-white text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase"
              >
                Chọn kính theo gương mặt
              </button>
            </li>
            {listSeemore.map((item, index) => (
              <li key={index} className="mb-[3rem]">
                <Link
                  href={item.router}
                  onClick={onMouseLeaveTabMenu ?? undefined}
                  className="cursor-pointer text-[#CAF2F1] hover:text-white text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow items-center justify-between p-[2rem]">
          <div className="item-cart-seemore w-1/3 p-2 h-[19.3125rem] relative flex justify-center">
            <div className="w-full h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image1.png"
                alt=""
              />
            </div>
            <Link
              href="/blog/nguyen-tac-chon-mat-kinh"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#55D5D2] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#55D5D2"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="item-cart-seemore w-1/3 p-2 h-[19.3125rem] relative flex justify-center">
            <div className="w-full h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image2.png"
                alt=""
              />
            </div>
            <Link
              href="/blog/khoang-cach-dong-tu-pd-chinh-xac-nhat"
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#55D5D2] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CÁCH ĐO KHUNG KÍNH
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#55D5D2"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="item-cart-seemore w-1/3 p-2 h-[19.3125rem] relative flex justify-center">
            <div className="w-full h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image3.png"
                alt=""
              />
            </div>
            <Link
              href="/blog/huong-dan-chon-size-mat-kinh-vua-khuon-mat"
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#55D5D2] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CÁCH ĐO ỐNG KÍNH
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#55D5D2"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownSeeMoreHeader;
