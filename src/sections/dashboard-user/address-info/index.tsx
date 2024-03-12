'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ICEdit from '@/components/Icons/ICEdit';
import ICDelete from '@/components/Icons/ICDelete';
import Image from 'next/image';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { fetchDataAuthen, postData } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { useSession } from 'next-auth/react';
import { IPostData } from '@/types/next-auth';
import useSWR from 'swr';
import map from 'lodash.map';

function AddressInfo() {
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keySelected, setKeySelected] = useState<any>(undefined);
  const [dataAddressInit, setDataAddessInit] = useState<any>([]);

  const bodyGetListAddress: IPostData = {
    url: `wp-json/shipping/v1/customer-shipping-addresses`,
    method: 'get',
    token: session?.user?.token,
  };
  const dataGetListAddress = useSWR(bodyGetListAddress.url, () =>
    fetchDataAuthen(bodyGetListAddress).then((res) =>
      setDataAddessInit(res.shipping_addresses)
    ),{
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false
    }
  );

  const deleteAddress = async (value: any) => {
    setKeySelected(value);
    setIsLoading(true);

    try {
      await fetchDataAuthen({
        url: 'wp-json/shipping/v1/delete-shipping-address',
        method: 'delete',
        body: JSON.stringify({ address: [{ id: value }] }),
        token: session?.user?.token,
      }).then(() => {
        onSuccess({
          message: 'Xóa sản phẩm yêu thích thành công!',
        });
        setIsLoading(false);
      });
    } catch (error: any) {
      setIsLoading(false);
      onError();
    }
  };

  const handleConvertAddress = (
    address: string,
    district: string,
    city: string,
    country: string
  ): string => {
    const addressConvert = `${address ?? ''}${address ? ',' : ''}`;
    const districtConvert = `${district ?? ''}${district ? ',' : ''}`;
    const cityConvert = `${city ?? ''}${city ? ',' : ''}`;
    const countryConvert = `${country ?? ''}${country ? '.' : ''}`;

    return `${addressConvert} ${districtConvert} ${cityConvert} ${countryConvert}`;
  };

  return (
    <div className="h-full pt-[0.5rem]">
      <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mb-[0.3rem] max-md:text-[4.5rem] max-md:leading-[5rem] max-md:pb-[3rem]">
        Thông tin địa chỉ
      </h3>

      {dataAddressInit.isLoading ? (
        <div>
          <LoadingGlobal stroke="black" />
        </div>
      ) : (
        <div className="overflow-y-auto shadow-inherit">
          {Object.values(dataAddressInit).length > 0 ? (
            dataAddressInit &&
            map(Object.values(dataAddressInit), (item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-[1.2rem] border-b-[1px] border-b-[#F5F5F5] pr-[2rem] max-md:py-[3rem]"
              >
                <div className="max-md:w-4/5">
                  <div className="flex items-center max-md:flex-col max-md:items-start">
                    <h3 className="text-[#414141] font-semibold text-[1rem] font-Nexa-Bold max-md:text-[3.42rem]">
                      {item?.name}
                    </h3>
                    <h3 className="text-[#454545] font-semibold text-[1rem] font-Nexa-Bold ml-[0.5rem] max-md:text-[3.15rem] max-md:ml-[0rem]">
                      {item?.phone}
                    </h3>
                  </div>
                  <span className="text-[#454545] font-medium opacity-70 text-[0.9rem] font-Nexa-Normal max-md:text-[2.88rem]">
                    {handleConvertAddress(
                      item?.address,
                      item?.state,
                      item?.city,
                      item?.country
                    )}
                  </span>
                </div>
                <div className="flex max-md:hidden">
                  <Link
                    href={`/create-address/${index + 1}`}
                    className="text-blueAnna"
                  >
                    <ICEdit fill="#55D5D2" width="1.2rem" height="1.2rem" />
                  </Link>
                  {index === keySelected && isLoading ? (
                    <div className="text-[#E14C5F] ml-[0.7rem] -mr-3 max-md:ml-[0rem]">
                      <LoadingGlobal stroke="red" />
                    </div>
                  ) : (
                    <button
                      role="button"
                      onClick={() => deleteAddress(index + 1)}
                      className="text-[#E14C5F] ml-[0.8rem] max-md:ml-[0rem]"
                    >
                      <ICDelete fill="#E14C5F" width="1.2rem" height="1.2rem" />
                    </button>
                  )}
                </div>
                <div className="hidden max-md:block h-full">
                  <Link
                    href={`/create-address/${index + 1}`}
                    className="text-blueAnna"
                  >
                    <ICEdit fill="#55D5D2" width="6rem" height="6rem" />
                  </Link>
                  <div className="mt-[2rem]">
                    {index === keySelected && isLoading ? (
                      <LoadingGlobal stroke="#55D5D2" />
                    ) : (
                      <button
                        role="button"
                        onClick={() => deleteAddress(index + 1)}
                        className="text-[#E14C5F]"
                      >
                        <ICDelete fill="#E14C5F" width="6rem" height="6rem" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center">
              <Image
                src="/img/no-data.svg"
                alt="banner-aboutus"
                height={300}
                width={300}
              />
            </div>
          )}
        </div>
      )}

      <Link
        href="/create-address"
        className="w-full mt-[2rem] rounded-[2rem] font-bold border-[2px] border-[#55D5D2] text-blueAnna flex justify-center items-center py-[0.3rem] text-[1rem] font-Nexa-Normal max-md:text-[3.42rem] max-md:font-Nexa-Bold max-md:rounded-full max-md:py-[3rem] max-md:mt-[4rem]"
      >
        <span className="mr-[0.3rem] pb-[0.1rem] text-[1.7rem] max-md:text-[4.5rem] max-md:mr-[2rem]">
          +
        </span>
        Thêm
      </Link>
    </div>
  );
}

export default AddressInfo;
