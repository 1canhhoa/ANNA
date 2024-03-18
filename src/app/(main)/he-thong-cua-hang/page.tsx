import { fetchDataRest } from '@/lib/fetch-data-rest';
import SystemStore from '@/sections/system-store';
import React from 'react';

const SystemStorePage = async () => {
  const listCity = await fetchDataRest('GET', 'custom/v1/get-cate-location');
  return <SystemStore listCity={listCity} />;
};

export default SystemStorePage;
