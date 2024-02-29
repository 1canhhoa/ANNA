import { ICClose } from '@/components/Icons/ICClose';
import ICHeart from '@/components/Icons/ICHeart';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import SlideVideoMobile from '@/sections/httt/components/SlideVideoMobile';
import SlideAction from '@/sections/httt/components/action/popup/slide';
import StatisticsAction from '@/sections/httt/components/action/popup/statistics';
import Image from 'next/image';

interface IPropPopup {
  handleClose: any;
  isShow: boolean;
}
function PopupAction({ handleClose, isShow }: IPropPopup) {
  return (
    <div
      className={cn(
        'transition duration-500 ease-in-out',
        isShow
          ? 'fixed h-[100vh] w-full bg-white top-0 left-0 overflow-y-auto z-20'
          : 'z-[-1] opacity-0'
      )}
    >
      <div
        className={cn(
          'max-sm:pt-[22rem]',
          isShow ? 'relative z-40 block' : 'z-[-1] hidden'
        )}
      >
        <div
          className={cn(
            'fixed right-[3rem] z-30 top-[12rem] md:top-[6rem] cursor-pointer',
            isShow ? 'block' : 'hidden'
          )}
          onClick={handleClose}
        >
          <ICClose stroke="#444" height={60} width={60} />
        </div>
        <StatisticsAction />
        <div className="relative pb-[5rem] max-sm:h-[220rem]">
          <AspectRatio ratio={3 / 2}>
            <Image
              className="w-full h-full object-cover z-[5] absolute top-0 left-0 opacity-35"
              src="/img/httt/bg-action.png"
              alt="background hanh trinh tu te"
              width={1600}
              height={900}
            />
          </AspectRatio>
          <div className="absolute z-[5] top-[9.36rem] left-0 w-full">
            <div className="card-title-popup">
              <div className="relative md:max-w-[60.4375rem] m-auto text-center">
                <h3 className="text-[#7BD7D6] font-bold text-[5.33333rem] md:text-[3.5rem]">
                  Các trường hợp được phẫu thuật
                </h3>
                <h4 className="text-[6rem] md:text-[2.5rem] font-semibold text-[#444]">
                  Lorem ipsum dolor sit amet consectetur. Feugiat varius a
                  aenean egestas sed faucibus lorem iaculis lacus.
                </h4>
                <div className="absolute right-0 md:right-[-95px] top-[-20px] md:top-[-80px] icon-heart">
                  <ICHeart />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[87.5rem] mx-auto mt-[6.25rem] card-content-popup">
              <div className="w-1/2 pr-[1.57rem] md:pr-[1rem] md:w-1/4">
                <SlideAction isReverse={false} />
              </div>
              <div className="w-1/2 max-sm:pl-[1.57rem] md:pr-[1rem] md:w-1/4">
                <SlideAction isReverse />
              </div>
              <div className="w-1/4 pr-[1rem] hidden md:block">
                <SlideAction isReverse={false} />
              </div>
              <div className="w-1/4 pr-[1rem] hidden md:block">
                <SlideAction isReverse />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[31.31rem]">
          <SlideVideoMobile />
        </div>
        <div className="w-[87.5rem] mx-auto md:mt-[19.31rem] flex justify-between flex-wrap border-t border-[#828282] py-[4rem] md:py-[1.69rem]">
          <div className="text-[3.66667rem] md:text-base">
            Hành trình tử tế © 2018 - 2023. Thiết kế bởi OkHub Việt Nam{' '}
          </div>
          <div className="flex">
            <p className="text-[3.66667rem] md:text-base pr-[3rem]">
              Kết nối yêu thương
            </p>
            <p className="text-[3.66667rem] md:text-base pr-[3rem]">
              Những câu chuyện tử tế
            </p>
            <p className="text-[3.66667rem] md:text-base hidden md:block">
              Túi tử tế
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupAction;
