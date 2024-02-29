import * as React from 'react';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import map from 'lodash.map';
import { IItemCart } from '@/types/types-general';
import { useDebounce } from '@uidotdev/usehooks';
import { keyLocalStorage } from '@/configs/config';
import { useSession } from 'next-auth/react';
import { ProductCartContext } from '@/context-provider';
import { fetchDataAuthen } from '@/lib/post-data';

interface IProps {
  dataItemCart?: IItemCart;
  setDataInit: Dispatch<SetStateAction<IItemCart[]>>;
  dataInit: IItemCart[];
  handleTotalCart: any;
}
export function InputChangeAmount(props: IProps): React.JSX.Element {
  const { dataItemCart, setDataInit, handleTotalCart, dataInit } = props;
  const { data: session } = useSession();
  const [quantityItem, setQuantityItem] = useState<any>(
    dataItemCart?.quantity ?? 1
  );
  const debouncedSearchTerm = useDebounce(quantityItem, 300);

  const { handleChangeDataCartGlobal } = useContext<any>(ProductCartContext);
  const handleChangeQuantityItem = async (quantityChange: number) => {
    const arrayTmp = map(dataInit, (item) => {
      const newObject = {
        ...item,
        quantity:
          item.product_id === dataItemCart?.product_id
            ? quantityChange
            : item.quantity,
      };
      return newObject;
    });

    setDataInit(arrayTmp);

    if (session === null) {
      localStorage.setItem(
        keyLocalStorage.keyProductsInCart,
        JSON.stringify(arrayTmp)
      );
      handleChangeDataCartGlobal(arrayTmp);
      handleTotalCart(arrayTmp);
      return;
    }

    const newArrayUpdateCart = map(arrayTmp, (item) => {
      const newObject = {
        key: item.key,
        quantity: item.quantity,
      };

      return newObject;
    });

    try {
      await fetchDataAuthen({
        url: 'wp-json/woocart/v1/update-cart',
        method: 'post',
        body: JSON.stringify({ cart_items: newArrayUpdateCart }),
        token: session?.user?.token,
      }).then(() => {
        handleChangeDataCartGlobal(arrayTmp);
        handleTotalCart(arrayTmp);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const subQuantityProduct = (): void => {
    setQuantityItem(quantityItem - 1);
  };

  const addQuantityProduct = (): void => {
    setQuantityItem(quantityItem + 1);
  };

  const handleOnchangeQuantity = (value: any): void => {
    const valueConvert = parseInt(
      value.target.value.replace(/[^0-9]/g, ''),
      10
    );

    let check;

    if (dataItemCart?.stock_quantity) {
      check =
        valueConvert > dataItemCart?.stock_quantity
          ? dataItemCart?.stock_quantity
          : valueConvert;
    } else check = valueConvert;

    setQuantityItem(Number.isNaN(check) ? 1 : check);
  };

  useEffect(() => {
    setQuantityItem(dataItemCart?.quantity);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm !== 1) {
      const debounceChangeQuantityProduct = async () => {
        if (debouncedSearchTerm) {
          handleChangeQuantityItem(quantityItem);
        }
      };
      debounceChangeQuantityProduct();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-[7.3125rem] h-[3rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-md:w-[29.3125rem] max-md:h-[8rem] max-md:rounded-[0rem] max-md:border-[#F2F2F2] max-md:border-[2px]">
      <div
        role="button"
        onClick={quantityItem > 1 ? subQuantityProduct : undefined}
        style={{
          cursor: quantityItem > 1 ? 'pointer' : 'not-allowed',
        }}
        className="pl-[1.2rem] h-full flex items-center justify-center select-none text-[1.25rem] font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pl-[0rem] max-md:border-r-[#F2F2F2] max-md:border-r-[2px]"
      >
        -
      </div>
      <div className="quantity-product flex grow max-md:w-[16rem]">
        <input
          type="text"
          value={quantityItem}
          onChange={(value) => handleOnchangeQuantity(value)}
          // pattern="[0-9]/g*"
          className="w-full focus:outline-none text-center text-[1rem] not-italic font-bold leading-[1.5rem] max-md:text-[3rem] max-md:grow"
        />
      </div>
      <div
        onClick={
          quantityItem < (dataItemCart?.stock_quantity ?? 0)
            ? addQuantityProduct
            : undefined
        }
        role="button"
        style={{ cursor: 'pointer' }}
        className="select-none pr-[1.2rem] py-[0.8rem] text-[1.25rem] h-full flex items-center justify-center font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pr-[0rem] max-md:border-l-[#F2F2F2] max-md:border-l-[2px]"
      >
        +
      </div>
    </div>
  );
}
