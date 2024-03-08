import { postData } from '@/lib/post-data';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import map from 'lodash.map';
import ListProductCategory from '@/sections/list-product-category';

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const listCategory = await fetchDataRest('GET', 'custom/v1/categories');

//   return map(listCategory, (item: any, index: number) => ({
//     slug: item?.slug || undefined,
//   }));
// }

const ListProductPage = async ({ params: { slug } }: any) => {
  // GET LIST COLOR PRODUCT
  const bodyGetlistAttribute: any = {
    url: `wp-json/custom/v1/attributes`,
    method: 'get',
  };
  const dataListAttribute = await fetch(
    `${process.env.NEXT_PUBLIC_REST_API}/${bodyGetlistAttribute.url}`
  ).then((res) => {
    return res.json();
  });
  // end format
  // END GET LIST COLOR PRODUCT

  // Get List Attribute
  const listBrand = fetchDataRest('GET', 'custom/v1/attribute-brand');
  const listMaterial = fetchDataRest('GET', 'custom/v1/attribute-material');
  const listShape = fetchDataRest('GET', 'custom/v1/attribute-shape');
  const listFeature = fetchDataRest('GET', 'custom/v1/attribute-feature');

  const listAttribute = await Promise.all([
    listBrand,
    listMaterial,
    listShape,
    listFeature,
  ]);

  // GET LIST PRODUCT INIT
  const bodyGetListProductByCate: any = {
    url: `wp-json/custom/v1/products-by-category?category=${slug}&per_page=12&page=1`,
    method: 'get',
  };
  const dataListProductInit = await postData(bodyGetListProductByCate);
  // END GET LIST PRODUCT INIT

  return (
    <ListProductCategory
      slug={slug}
      dataListProductInit={dataListProductInit}
      dataListAttribute={dataListAttribute}
      listAttributeNew={listAttribute}
    />
  );
};

export default ListProductPage;
