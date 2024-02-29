import Cart from '@/sections/cart';
import { postData } from '@/lib/post-data';

const CartPage = async () => {
  const bodyGetListProduct: any = {
    url: `wp-json/custom/v1/products?per_page=6&page=1`,
    method: 'get',
  };

  const dataListProductNew = await postData(bodyGetListProduct);

  return <Cart dataListProductNew={dataListProductNew} />;
};

export default CartPage;
