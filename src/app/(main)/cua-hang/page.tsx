import ListProduct from '@/sections/list-product';
import { postData } from '@/lib/post-data';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const ListProductPage = async ({
  searchParams,
  params: { slug, query },
}: any) => {
  // GET LIST ATTRIBUTE PRODUCT
  const bodyGetlistAttribute: any = {
    url: `wp-json/custom/v1/attributes`,
    method: 'get',
  };
  const dataListAttribute = await fetch(
    `https://anna.okhub-tech.com/${bodyGetlistAttribute.url}`
  ).then((res) => {
    return res.json();
  });

  // GET LIST PRODUCT INIT
  const bodyGetListProduct: any = {
    url: `/wp-json/product/v1/products/filter?per_page=12&page=1`,
    method: 'get',
  };
  const dataListProductInit = await postData(bodyGetListProduct);
  // END GET LIST PRODUCT INIT

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
  console.log('dataListProductInit', dataListProductInit)
  return (
    <ListProduct
      searchParams={searchParams}
      dataListAttribute={dataListAttribute}
      dataListProductInit={dataListProductInit}
      listAttributeNew={listAttribute}
    />
  );
};

export default ListProductPage;
