import { ContextProvider } from '@/context-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { postData } from '@/lib/post-data';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Kính mắt Anna',
  description: 'Kính mắt Anna là thương hiệu kính mắt hàng đầu Việt Nam, thương hiệu của sự tử tế, cung cấp những mẫu kính an toàn, chất lượng, hợp thị hiếu',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const fontNexa = localFont({
  src: [
    {
      path: '../assets/fonts/SVN-Nexa-Thin.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-XBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-Nexa',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const listApi = {
    gender: 'wp-json/custom/v1/attribute-gener',
    face: 'wp-json/custom/v1/attribute-face',
    shape: 'wp-json/custom/v1/attribute-shape',
    material: 'wp-json/custom/v1/attribute-material',
  };

  const listFetcher = [
    postData({ url: listApi.gender, method: 'get' }),
    postData({ url: listApi.face, method: 'get' }),
    postData({ url: listApi.shape, method: 'get' }),
    postData({ url: listApi.material, method: 'get' }),
  ];

  const listAttributeChooseGlasses = await Promise.all(listFetcher);

  return (
    <html lang="en">
      <body className={fontNexa.variable}>
        <Toaster />
        <div id="toast-custom" />
        <ContextProvider
          session={session}
          listAttributeChooseGlasses={listAttributeChooseGlasses}
        >
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
