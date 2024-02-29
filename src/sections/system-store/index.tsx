'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { baseUrl, fetchDataRest } from '@/lib/fetch-data-rest';
import SectionHome from '@/sections/home/view/SectionHome';
import ItemStore from '@/sections/system-store/ItemStore';
import map from 'lodash.map';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import './style.css';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

interface IPropsSystem {
  listCity: any;
}
const mockData = {
  link1:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0122915661586!2d105.38401327584212!3d21.072171286285084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313460be67e9d923%3A0x931c62b2c0387494!2zVGhpw6puIFPGoW4gU3Xhu5FpIE5nw6AsIFbDom4gSMOyYSwgQmEgVsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1703481018095!5m2!1svi!2s',
  link2:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.804718437435!2d105.73897487584011!3d20.96035599012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134533c20016423%3A0x9973b003daef8451!2sHH2A%20xu%C3%A2n%20mai%20complex!5e0!3m2!1svi!2s!4v1703481268016!5m2!1svi!2s',
};

function SystemStore({ listCity }: IPropsSystem) {
  const [dataSystemStore, setDataSystemStore] = useState([]) as any;
  const [isLoading, setIsLoading] = useState(true);
  const [idDistrict, setIdDistrict] = useState('');
  const [district, setDistrict] = useState([]) as any;
  const [param, setParam] = useState({
    tinh: '',
    huyen: '',
  });
  const [checkLocate, setCheckLocate] = useState({
    index: 0,
    link: '',
  });

  const handleChangeCity = (item: any) => {
    setIdDistrict(item?.id);
    if (item) {
      setParam({
        tinh: item?.slug,
        huyen: '',
      });
    } else {
      setParam({
        tinh: '',
        huyen: '',
      });
    }
    setIsLoading(true);
  };
  const handleChangeDistrict = (item: any) => {
    setIsLoading(true);
    if (item) {
      setParam({
        ...param,
        huyen: item,
      });
    } else {
      setParam({
        ...param,
        huyen: '',
      });
    }
  };

  const getListDist = useSWR(
    `${baseUrl}custom/v1/get-cate-location-child/${idDistrict}`,
    () =>
      fetchDataRest(
        'get',
        `custom/v1/get-cate-location-child/${idDistrict}`
      ).then((res: any) => {
        setDistrict(res?.children);
        setIsLoading(false);
      })
  );

  const getListSystemStore = useSWR(
    `${baseUrl}custom/v1/get-location?tinh=${encodeURIComponent(
      param?.tinh
    )}&huyen=${encodeURIComponent(param?.huyen)}`,
    () =>
      fetchDataRest(
        'get',
        `custom/v1/get-location?tinh=${encodeURIComponent(
          param?.tinh
        )}&huyen=${encodeURIComponent(param?.huyen)}`
      ).then((res: any) => {
        setDataSystemStore(res);
        setCheckLocate({
          ...checkLocate,
          link: res[0]?.emble[0],
        });

        setIsLoading(false);
      })
  );

  useEffect(() => {
    getListSystemStore.mutate();
    getListDist.mutate();
  }, [param, idDistrict]);
  return (
    <div className="md:mt-[4rem] max-sm:pt-[13rem]">
      <div className="md:max-w-[83.75rem] py-24 md:py-12 px-[5rem] md:px-0 m-auto">
        <h4 className="text-black pt-[3rem] md:pt-4 pb-[3rem] md:pb-4 text-[5rem] md:text-[2.25rem] font-bold md:font-semibold">
          DANH SÁCH ĐẠI LÝ KÍNH MẮT ANNA
        </h4>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="flex justify-between md:flex-nowrap gap-12 md:gap-3 p-8 md:p-4 bg-[#fdcc0c] h-[13.375rem] md:h-[4.375rem]">
              <div className="w-full select-system">
                <Select
                  onValueChange={(value) => handleChangeCity(value)}
                  // defaultValue={'blueberry'}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Thành phố" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-[400px] overflow-y-scroll text-[3rem]">
                    <SelectGroup defaultValue="Toàn quốc">
                      <SelectItem
                        value={null as any}
                        className="text-[4rem] md:text-base"
                      >
                        Toàn Quốc
                      </SelectItem>
                      {map(listCity, (item) => (
                        <SelectItem
                          value={item}
                          className="text-[4rem] md:text-base"
                        >
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full select-system">
                <Select onValueChange={(value) => handleChangeDistrict(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Quận/Huyện" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-[400px] overflow-y-scroll text-[3rem]">
                    <SelectGroup defaultValue="Quận/Huyện">
                      <SelectItem
                        value={null as any}
                        className="text-[4rem] md:text-base"
                      >
                        Quận/Huyện
                      </SelectItem>
                      {map(district, (item) => (
                        <SelectItem
                          value={item?.slug}
                          className="text-[4rem] md:text-base"
                        >
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="max-h-[80rem] md:max-h-[33rem] min-h-[5rem] overflow-x-auto	style-scroll">
              {isLoading ? (
                <div className="flex justify-center loading py-24 md:py-12 mb-12">
                  {' '}
                  <LoadingGlobal stroke="#55D5D2" />
                </div>
              ) : (
                map(dataSystemStore, (dataSystem: any, index: number) => (
                  <ItemStore
                    dataSystem={dataSystem}
                    setCheckLocate={setCheckLocate}
                    checkLocate={checkLocate}
                    index={index}
                  />
                ))
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3">
            {checkLocate?.link && (
              // eslint-disable-next-line jsx-a11y/iframe-has-title
              <div
                className="map-locate w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `${
                    checkLocate?.link !== '' ? checkLocate?.link : ''
                  }`,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  );
}

export default SystemStore;
