'use client';

import Image from 'next/image';
import 'swiper/css';
import React from 'react';
import ICPopupMessage from '@/components/Icons/ICPopupMessage';
import { ICClose } from '@/components/Icons/ICClose';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { linkSocial } from '@/configs/config';

function MascotHome() {
  const isShowMascot = useBoolean(false);
  return (
    <div>
      <div className={cn('max-md:hidden fixed bottom-0 right-[4rem] z-40 ')}>
        <div
          className={cn(
            'w-[12rem] h-[9.25rem] overflow-hidden absolute -left-[8.5rem] -top-[4rem] transition-all duration-500 delay-1000',
            isShowMascot.value ? 'opacity-100' : 'opacity-0 -z-50'
          )}
        >
          <div className="relative h-full w-full">
            <div className="absolute left-0 top-0 -z-20 w-full h-full">
              <ICPopupMessage />
            </div>
            <div className="h-full w-full py-[0.5rem] px-[0.5rem]">
              <div className="flex justify-end">
                <button type="button" onClick={() => isShowMascot.onFalse()}>
                  <ICClose stroke="white" height="1.5rem" width="1.5rem" />
                </button>
              </div>
              <div className="w-full text-center">
                <span className="text-[0.75rem] text-white not-italic font-extrabold leading-[0.9rem] uppercase">
                  Kết nối cùng Anna
                </span>
              </div>
              <div className="grid grid-cols-4 gap-[0.75rem] mt-[0.5rem] px-[1rem]">
                <Link target="_blank" href={linkSocial.facebook}>
                  <ICFacebookFooter
                    strokeWidth={3}
                    width="2rem"
                    height="2rem"
                  />
                </Link>
                <Link target="_blank" href={linkSocial.instagram}>
                  <ICInstagramFooter
                    strokeWidth={3}
                    width="2rem"
                    height="2rem"
                  />
                </Link>
                <Link target="_blank" href={linkSocial.tiktok}>
                  <ICTiktokFooter strokeWidth={3} width="2rem" height="2rem" />
                </Link>
                <Link target="_blank" href={linkSocial.youtube}>
                  <ICShopeeFooter strokeWidth={3} width="2rem" height="2rem" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          role="button"
          onClick={() => isShowMascot.onToggle()}
          className={cn(
            'w-[7.9375rem] h-[14.5rem] transition-all duration-1000 delay-500',
            isShowMascot.value ? '' : 'translate-y-[7rem]'
          )}
        >
          <Image
            objectFit="cover"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            src="/img/home/gif-tun-pham-ezgif.com-optimize-1.gif"
            alt="gif tun pham"
          />
        </div>
      </div>
    </div>
  );
}

export default MascotHome;
