import SectionHome from '@/sections/home/view/SectionHome';
import NewCollection from '@/sections/home/view/CollectNew';
import Feature from '@/sections/home/view/Feature';
import FlashSale from '@/sections/home/view/FlashSale';
import './style.css';
// import AboutHome from '@/sections/home/view/About';
import Social from '@/sections/home/view/Social';
import ListSocial from '@/sections/home/view/Social/List';
import Blog from '@/sections/home/view/Blog';
import ActionHome from '@/sections/home/view/Action';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import BannerHome from '@/sections/home/view/Banner';
import SlideMobileSocial from './Social/SlideMobile';
import AboutHome from '@/sections/home/view/About';
import React from 'react';
import MascotHome from '@/sections/home/view/Mascot';
import PopupGeneral from '@/components/component-ui-custom/popup-general';

const Home = async () => {
  const dataHomeFetch = fetchDataRest('GET', 'acf/v3/posts/334');
  const dataProductSaleFetch = fetchDataRest('GET', 'custom/v1/product-sales');
  const dataSellingProductFetch = fetchDataRest(
    'GET',
    'custom/v1/best-selling-products?order=asc&limit=12'
  );
  const dataProductGKFetch = fetchDataRest(
    'GET',
    'custom/v1/products-by-category?category=gong-kinh'
  );
  const dataProductTKFetch = fetchDataRest(
    'GET',
    'custom/v1/products-by-category?category=trong-kinh'
  );
  const dataProductKRFetch = fetchDataRest(
    'GET',
    'custom/v1/products-by-category?category=kinh-ram'
  );
  const dataProductKATFetch = fetchDataRest(
    'GET',
    'custom/v1/products-by-category?category=kinh-ap-trong'
  );

  const [
    dataHome,
    dataProductSale,
    dataSellingProduct,
    dataProductGK,
    dataProductTK,
    dataProductKR,
    dataProductKAT,
  ] = await Promise.all([
    dataHomeFetch,
    dataProductSaleFetch,
    dataSellingProductFetch,
    dataProductGKFetch,
    dataProductTKFetch,
    dataProductKRFetch,
    dataProductKATFetch,
  ]);

  return (
    <div className="min-h-full flex flex-col">
      <MascotHome />

      <div className="banner">
        <BannerHome dataBanner={dataHome?.acf?.banner} />
      </div>
      <FlashSale
        smallBanner1={dataHome?.acf?.small_banner_1}
        smallBanner2={dataHome?.acf?.small_banner_2}
        dataProductSale={dataProductSale}
        dataSellingProduct={dataSellingProduct}
      />
      <NewCollection
        dataProductGK={dataProductGK}
        dataProductTK={dataProductTK}
        dataProductKR={dataProductKR}
        dataProductKAT={dataProductKAT}
      />
      <div className="hidden md:block">
        <SectionHome />
      </div>
      <Feature dataFeature={dataHome?.acf?.for_you[0]} />
      <AboutHome dataAbout={dataHome?.acf?.about[0]} />
      <Social />
      <SlideMobileSocial />
      <div className="hidden md:block">
        <ListSocial />
        {/* <SlideSocial /> */}
      </div>
      <div className="max-sm:bg-[#F8F8F8] md:py-[5.75rem]">
        <Blog />
      </div>
      <ActionHome dataTrip={dataHome?.acf?.trip[0]} />
      <PopupGeneral
      dataPopup={dataHome?.acf?.popup} 
      /> 
    </div>
  );
};

export default Home;
