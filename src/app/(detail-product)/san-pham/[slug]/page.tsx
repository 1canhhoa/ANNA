import ProductDetail from '@/sections/product/detail-view/detail';
import { postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';
import map from 'lodash.map';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { postDataCustom } from '@/lib/post-data-custom';

// export async function generateStaticParams() {
//   const listProduct = await fetchDataRest(
//     'GET',
//     'custom/v1/products?per_page=99&page=1'
//   );

//   return map(listProduct?.item, (product: any) => ({
//     slug: product?.slug || undefined,
//   }));
// }

const DetaiPage = async ({ params: { slug } }: any) => {
  // GET DETAIL PRODUCT
  const bodyGetDetailProduct: any = {
    url: `wp-json/custom/v1/products-by-slug/${slug}`,
    method: 'get',
  };

  const listColorProduct: any = {
    url: `wp-json/custom/v1/code-color-products-by-slug/${slug}`,
    method: 'get',

  }
  // // END

  // // GET LIST glasses
  const bodyApiGetGlasses: IPostData = {
    url: `wp-json/custom/v1/categories/trong-kinh`,
    method: 'get',
  };
  //
  // // GET THE similar GLASSES
  const bodyApiGetSimilarGlasses: IPostData = {
    url: `wp-json/custom/v1/related-products-slug/${slug}`,
    method: 'get',
  };
  //
  // // GET PRODUCT BY CATEGORY
  const getProductGlasses: IPostData = {
    url: `wp-json/custom/v1/categories/gong-kinh`,
    method: 'get',
  };
  
  const getLenses: IPostData = {
    url: `wp-json/custom/v1/categories/trong-kinh`,
    method: 'get',
  };
  
  const getProductByAnyCategory: IPostData = {
    url: `wp-json/custom/v1/categories/kinh-ram`,
    method: 'get',
  };

  const getTransport: IPostData = {
    url: `wp-json/wp/v2/pages?slug=van-chuyen`,
    method: 'get',
  };

  const getChange: IPostData = {
    url: `wp-json/wp/v2/pages?slug=doi-tra`,
    method: 'get',
  };

  const arrayPromiseDetail = [
    postDataCustom(bodyGetDetailProduct),
    postData(bodyApiGetGlasses),
    postData(bodyApiGetSimilarGlasses),
    postData(getProductGlasses),
    postData(getLenses),
    postData(getProductByAnyCategory),
    postData(getTransport),
    postData(getChange),
    postData(listColorProduct)
  ];

  const [
    dataDetailProductRes,
    dataGlassesRes,
    dataListSimilarGlassesRes,
    dataProductGlassesRes,
    dataDataLensesRes,
    dataProductByAnyCategoryRes,
    dataTransportRes,
    dataChangeRes,
    dataListColor
  ] = await Promise.all(arrayPromiseDetail);

  return (
    <ProductDetail
      slug={slug}
      dataInitDetail={dataDetailProductRes}
      dataGlasses={dataGlassesRes}
      dataListSimilarGlasses={dataListSimilarGlassesRes}
      dataProductGlasses={dataProductGlassesRes}
      dataDataLenses={dataDataLensesRes}
      dataProductByAnyCategory={dataProductByAnyCategoryRes}
      dataTransportRes={dataTransportRes}
      dataChangeRes={dataChangeRes}
      dataListColor={dataListColor}
    />
  );
};

export default DetaiPage;
