import Search from '@/sections/search';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { postData } from '@/lib/post-data';

const SearchPage = async ({ params: { slug }, searchParams }: any) => {
  // Get List Attribute
  const listColor = fetchDataRest('GET', 'custom/v1/attributes');
  const listBrand = fetchDataRest('GET', 'custom/v1/attribute-brand');
  const listMaterial = fetchDataRest('GET', 'custom/v1/attribute-material');
  const listShape = fetchDataRest('GET', 'custom/v1/attribute-shape');
  const listFeature = fetchDataRest('GET', 'custom/v1/attribute-feature');

  // GET DATA SEARCH
  const dataListSearch = await postData({
    url: `wp-json/custom/v1/search/?keyword=${searchParams.search}`,
    method: 'get',
  });

  const listRes = await Promise.all([
    listColor,
    listBrand,
    listMaterial,
    listShape,
    listFeature,
  ]);

  return (
    <Search
      searchParams={searchParams}
      listRes={listRes}
      listSearchSwiper={dataListSearch}
    />
  );
};

export default SearchPage;
