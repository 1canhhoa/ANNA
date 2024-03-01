import ProductFilter from '@/sections/product-filter';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const ProductFilterPage = async ({ searchParams, params: { query } }: any) => {
  // FORMAT PARAMS
  let routerSearchCustom = '';
  for (const [keyAttribute, valueAttribute] of Object.entries(searchParams)) {
    routerSearchCustom = `${routerSearchCustom}&${keyAttribute}=${valueAttribute}`;
  }

  console.log(searchParams)

  const bodyGetlistAttribute: any = {
    url: `wp-json/custom/v1/attributes`,
    method: 'get',
  };
  const dataListAttribute = await fetch(
    `${process.env.NEXT_PUBLIC_REST_API}/${bodyGetlistAttribute.url}`
  ).then((res) => {
    return res.json();
  });

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

  return (
    <ProductFilter
      routerSearchCustom={routerSearchCustom}
      listAttributeNew={listAttribute}
      dataListAttribute={dataListAttribute}
    />
    // <div>ssss</div>
  );
};

export default ProductFilterPage;
