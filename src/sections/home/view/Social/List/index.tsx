'use client';

import 'swiper/css';
import ItemSocial from '@/sections/home/view/Social/List/Item';
import ICYoutube from '@/components/Icons/ICYoutube';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ItemV2 from './ItemV2';
import { useRef } from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ICTikTok from '@/components/Icons/ICTikTok';
import ICFaceSocial from '@/components/Icons/ICFaceSocial';
import { linkSocial } from '@/configs/config';

function ListSocial() {
  const swiperRef = useRef<any>(null);
  const boxRef = useRef<any>(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, Observer);
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: boxRef.current,
  //       start: 'bottom bottom',
  //       end: 'top top',
  //       scrub: true,
  //       onEnter: () => {
  //         ScrollTrigger.observe({
  //           target: window, // can be any element (selector text is fine)
  //           type: 'wheel,touch', // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
  //           onUp: () => {
  //             if (swiperRef.current.rtlTranslate) {
  //               swiperRef.current.changeLanguageDirection('ltr');
  //               swiperRef.current.update();
  //               swiperRef.current.autoplay.start();
  //             }
  //           },
  //           onDown: () => {
  //             if (!swiperRef.current.rtlTranslate) {
  //               swiperRef.current.changeLanguageDirection('rtl');
  //               swiperRef.current.update();
  //               swiperRef.current.autoplay.start();
  //             }
  //           },
  //         });
  //       },
  //     });
  //   }, boxRef);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

  return (
    <div className="relative overflow-hidden h-[31.9rem]">
      <div ref={boxRef} className="w-full h-full">
        <Swiper
          slidesPerView="auto"
          centeredSlides
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          // onBeforeInit={(swiper: any) => {
          //   swiperRef.current = swiper;
          // }}
          spaceBetween={0}
          loop
          // freeMode
          // grabCursor
          // onMouseLeave={() => {
          //   swiperRef.current.autoplay.start();
          // }}
          // onTouchEnd={(swiper) => {
          //   const touchEndX = swiper.touches.currentX;
          //   const touchStartX = swiper.touches.startX;

          //   if (touchEndX > touchStartX) {
          //     // Người dùng vuốt sang phải
          //     if (!swiper.rtlTranslate) {
          //       swiper.changeLanguageDirection('rtl');
          //     }
          //   } else if (touchEndX < touchStartX) {
          //     // Người dùng vuốt sang trái
          //     if (swiper.rtlTranslate) {
          //       swiper.changeLanguageDirection('ltr');
          //     }
          //   }
          //   swiper.update();
          //   swiper.autoplay.start();
          // }}
          modules={[Autoplay, FreeMode]}
          id="swiper_social"
          className="w-full h-full"
          // dir="rtl"
        >
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.facebook}
                img="/img/home/facebook.png"
                icon={<ICFaceSocial width={53} height={100} />}
                social="Facebook"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.instagram}
                img="/img/home/facebook.png"
                icon={<ICInstagramFooter width={100} height={100} />}
                social="Instagram"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.youtube}
                img="/img/home/facebook.png"
                icon={<ICYoutube fill="white" />}
                social="Youtube"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.tiktok}
                img="/img/home/tiktok.png"
                icon={<ICTikTok width={82} height={104} />}
                social="TikTok"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.instagram}
                img="/img/home/facebook.png"
                icon={<ICInstagramFooter width={100} height={100} />}
                social="Instagram"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full !w-[47.6rem] !flex">
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemSocial
                linkSocial={linkSocial.youtube}
                img="/img/home/facebook.png"
                icon={<ICYoutube fill="white" />}
                social="Youtube"
                infor="@kinhmatanna"
              />
            </div>
            <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
              <ItemV2
                title="HÀNH TRÌNH TỬ TẾ"
                description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ListSocial;
