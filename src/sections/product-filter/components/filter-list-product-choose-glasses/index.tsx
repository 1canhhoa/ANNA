'use client';

import { Checkbox } from '@/components/ui/checkbox';
import './style.css';
import ItemProduct from '@/components/component-ui-custom/item-product/ItemProduct';
import ItemMobile from '@/components/component-ui-custom/item-product-mobile';
import { IDataPagination, IItemAttributeProduct } from '@/types/types-general';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { postData } from '@/lib/post-data';
import SkeletonItemProduct from '@/sections/list-product/components/skeleton-item-product';
import Image from 'next/image';
import map from 'lodash.map';
import { useQueryStates } from 'next-usequerystate';
import ICFilter from '@/components/Icons/ICFilter';
import ICClear from '@/components/Icons/ICClear';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import PaginationGlobal from '@/components/component-ui-custom/pagination-global';

interface IProps {
  // listAttribute: IItemAttributeProduct[];
  listAttribute: any;
  searchParams?: any;
  listAttributeNew?: any;
  routerSearchCustom: string;
}

interface IListAttributeConvert {
  label: string;
  listAttribute: any;
}

interface IParamsFilter {
  atttribute: string;
  subAtttribute: string[];
}
export default function FilterListProductChooseGlass(props: IProps) {
  const { listAttribute, searchParams, listAttributeNew, routerSearchCustom } =
    props;

  const refListProduct = useRef<any>();
  const isShowModalMobile = useBoolean(false);
  const [dataInit, setDataInit] = useState<any>([]);
  const [keyMapFilter, setKeyMapFilter] = useState<any>({});
  const [paramsFilter, setParamsFilter] = useState<IParamsFilter[]>([]);
  const [paramRouterGetApi, setParamRouterGetApi] = useState<any>(undefined);
  const [queryStateFilter, setQueryStateFilter] = useQueryStates<any>(
    keyMapFilter,
    {
      history: 'push',
    }
  );

  const [dataPagination, setDataPagination] = useState<IDataPagination>({
    total: 12,
    currentPage: 1,
    perpage: 12,
  });

  const listAttributeConvert: IListAttributeConvert[] = [
    {
      label: 'Màu sắc',
      listAttribute: listAttribute?.color,
    },
    {
      label: 'Thương hiệu',
      listAttribute: listAttributeNew[0],
    },
    {
      label: 'Chất liệu',
      listAttribute: listAttributeNew[1],
    },
    {
      label: 'Hình dáng',
      listAttribute: listAttributeNew[2],
    },
    {
      label: 'Tính năng',
      listAttribute: listAttributeNew[3],
    },
  ];

  const bodyGetListProduct: any = {
    url: `wp-json/product/v1/products/filter?per_page=12&page=${dataPagination.currentPage}${routerSearchCustom}&${paramRouterGetApi}`,
    method: 'get',
  };

  const getlistProduct = useSWR(bodyGetListProduct.url, () =>
    postData(bodyGetListProduct).then((res) => {
      setDataInit(res?.item);
      setDataPagination({
        ...dataPagination,
        total: res?.total,
      });
    })
  );

  const handleScrollProduct = (): void => {
    refListProduct.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const convertParamFilterToParamQuery = (
    listParams: IParamsFilter[]
  ): void => {
    map(listParams, (item) => {
      if (item.subAtttribute.length === 0) {
        setQueryStateFilter({});
      } else {
        setQueryStateFilter({
          ...queryStateFilter,
          [item.atttribute]: item.subAtttribute,
        });
      }
    });

    if (listParams.length > 0) {
      let paramTmp = '';
      // eslint-disable-next-line array-callback-return
      listParams.map((itemParams) => {
        if (itemParams.subAtttribute.length > 0) {
          paramTmp = `${paramTmp}&${itemParams.atttribute}=${itemParams.subAtttribute}`;
        }
      });

      setParamRouterGetApi(paramTmp.replace(paramTmp[0], ''));
      getlistProduct.mutate();
    }
  };

  const onChange = (atttribute?: any, slugSubAttribute?: string): void => {
    // check available attributte
    const findItemAdded = paramsFilter.filter(
      (item) => item.atttribute === atttribute
    );

    if (findItemAdded.length === 0) {
      const newObject: IParamsFilter = {
        atttribute: atttribute ?? '',
        subAtttribute: [slugSubAttribute ?? ''],
      };

      setParamsFilter([...paramsFilter, newObject]);

      convertParamFilterToParamQuery([...paramsFilter, newObject]);
      return;
    }

    // if add new subAttribute in attribute
    const newArrayChangeFilter: any = [];
    // eslint-disable-next-line array-callback-return
    paramsFilter.map((item) => {
      if (item.atttribute === atttribute) {
        let arrayItemSubAttributeReset: any = [];

        const fintSubAttributeAvailable = item.subAtttribute.filter(
          (subAtttribute) => subAtttribute === slugSubAttribute
        );

        if (fintSubAttributeAvailable.length === 0) {
          arrayItemSubAttributeReset = item.subAtttribute;
          arrayItemSubAttributeReset.push(slugSubAttribute);
        } else {
          // eslint-disable-next-line array-callback-return
          item.subAtttribute.map((item: any): void => {
            if (item !== slugSubAttribute) {
              arrayItemSubAttributeReset.push(item);
            }
          });
        }

        const objectPushNewArray = {
          atttribute: item.atttribute,
          subAtttribute: arrayItemSubAttributeReset,
        };

        newArrayChangeFilter.push(objectPushNewArray);
      } else {
        newArrayChangeFilter.push(item);
      }

      setParamsFilter(newArrayChangeFilter);
      convertParamFilterToParamQuery(newArrayChangeFilter);
    });
  };

  useEffect(() => {
    handleScrollProduct();
  }, [dataPagination]);

  // useEffect(() => {
  //   if (paramsFilter.length > 0) {
  //     let paramTmp = '';
  //     // eslint-disable-next-line array-callback-return
  //     paramsFilter.map((itemParams) => {
  //       if (itemParams.subAtttribute.length > 0) {
  //         paramTmp = `${paramTmp}&attribute=${itemParams.atttribute}`;
  //
  //         // eslint-disable-next-line array-callback-return
  //         itemParams.subAtttribute.map((itemSubcate) => {
  //           paramTmp = `${paramTmp}&terms[]=${itemSubcate}`;
  //         });
  //       }
  //     });
  //
  //     setParamRouterGetApi(paramTmp.replace(paramTmp[0], ''));
  //     getlistProduct.mutate();
  //   }
  // }, [paramsFilter, getlistProduct.data]);

  // useEffect(() => {
  //   if (searchParams) {
  //     let searchParamsString = '';
  //     for (const [key, value] of Object.entries(searchParams)) {
  //       if (key.length > 0) {
  //         searchParamsString = `${searchParamsString}&attribute=${key}`;
  //
  //         // @ts-ignore
  //         const arrayValue = value.split(',');
  //
  //         // push array param filter to handle group checkbox
  //         const newObject: IParamsFilter = {
  //           atttribute: key ?? '',
  //           subAtttribute: [arrayValue ?? ''],
  //         };
  //         setParamsFilter([...paramsFilter, newObject]);
  //
  //         // eslint-disable-next-line no-loop-func
  //         map(arrayValue, (item) => {
  //           searchParamsString = `${searchParamsString}&terms[]=${item}`;
  //         });
  //       }
  //     }
  //
  //     setParamRouterGetApi(
  //       searchParamsString.replace(searchParamsString[0], '')
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (listAttributeConvert) {
  //     const listKeyRouterTmp: any = {};
  //     // map(
  //     //   listAttributeConvert,
  //     //   (item: any, index: number) =>
  //     //     (listKeyRouterTmp[item.listAttribute[0].taxonomy] = 1)
  //     // );
  //     // setKeyMapFilter(listKeyRouterTmp);
  //   }
  // }, []);

  return (
    <div className="filter-list-product-container">
      {/* modal filter product mobile */}
      <div
        role="button"
        onClick={() => isShowModalMobile.onTrue()}
        className="hidden max-md:flex fixed bottom-[10rem] left-[5rem] z-20 h-[10.6rem] w-[10.6rem] rounded-full bg-[#55D5D2] justify-center items-center"
      >
        <ICFilter stroke="white" width="5.33333rem" height="5.33333rem" />
      </div>
      <div
        className={cn(
          'hidden max-md:block fixed bottom-0 bg-white left-0 z-50 w-full rounded-t-[3.2rem] shadow-modal-mobile transition-all duration-700',
          isShowModalMobile.value ? 'h-[90rem] pt-[3.2rem] pb-[5rem]' : 'h-0'
        )}
      >
        <div
          role="button"
          onClick={() => isShowModalMobile.onFalse()}
          className="flex justify-end padding-horizontal-mobile"
        >
          <ICClear />
        </div>
        <div className="overflow-y-auto w-full h-full px-[3.2rem]">
          {listAttributeConvert.map((item, index) => (
            <div key={index} className="w-full mb-[4rem]">
              <h3 className="text-[4.7rem] text-[#454545] leading-[4.8rem] not-italic font-bold mb-[2rem]">
                {item.label}
              </h3>
              <div className="grid grid-cols-2 gap-[2rem]">
                {item.listAttribute &&
                  item.listAttribute.map(
                    (itemSubAttribute: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center w-full overflow-hidden mb-[0.5rem]"
                      >
                        <Checkbox
                          onCheckedChange={(value: boolean) =>
                            onChange(
                              itemSubAttribute.taxonomy,
                              itemSubAttribute.slug
                            )
                          }
                          id="1"
                          className="border-[#ccc] border-[1px] h-[4rem] w-[4rem]"
                        />
                        <span className="font-medium line-clamp-1 text-nowrap ml-[0.7rem] text-[#454545] text-[4rem] leading-[5.5rem]">
                          {itemSubAttribute.name}
                        </span>
                      </div>
                    )
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between  max-md:hidden pt-[2rem]">
        <div className="min-w-[15rem] overflow-hidden pr-[1rem]">
          {listAttributeConvert.map((item, index) => (
            <div key={index} className="w-full mb-[1rem]">
              <h3 className="title-filter">{item.label}</h3>
              {item.listAttribute &&
                item.listAttribute.map(
                  (itemSubAttribute: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center w-full overflow-hidden mb-[0.5rem]"
                    >
                      <Checkbox
                        disabled={getlistProduct.isLoading}
                        onCheckedChange={(value: boolean) =>
                          onChange(
                            itemSubAttribute.taxonomy,
                            itemSubAttribute.slug
                          )
                        }
                        id="1"
                        className="border-[#ccc] border-[1px]"
                      />
                      <span className="font-medium line-clamp-1 text-nowrap ml-[0.7rem]">
                        {itemSubAttribute.name}
                      </span>
                    </div>
                  )
                )}
            </div>
          ))}
        </div>
        <div className="grow">
          {dataInit && dataInit?.length === 0 && (
            <div className="flex justify-center">
              <Image
                src="/img/no-data.avif"
                alt="banner-aboutus"
                height={300}
                width={300}
              />
            </div>
          )}
          {dataInit && dataInit?.length > 0 && getlistProduct.isLoading ? (
            <SkeletonItemProduct />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {dataInit &&
                dataInit.length > 0 &&
                dataInit?.map((item: any, index: number) => (
                  <div className="rounded-[1rem]" key={index}>
                    <ItemProduct item={item} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-[2rem]">
        <PaginationGlobal
          dataPagination={dataPagination}
          setDataPagination={setDataPagination}
        />
      </div>

      <div className="hidden max-md:block">
        <div className="grid grid-cols-2">
          {map(dataInit, (item: any, index: number) => (
            <div key={index} className="relative mb-[4.27rem]">
              <ItemMobile itemProduct={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
