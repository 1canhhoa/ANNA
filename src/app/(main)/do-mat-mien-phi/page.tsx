import Policy from '@/sections/policy';
import React from 'react';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const PolicyEyeExamPage = async () => {
  const paramApi: any = {
    method: 'get',
    urlPolicy: `wp/v2/pages?slug=kham-mat-mien-phi`,
  };
  const dataPolicyRender = await fetchDataRest(
    paramApi.method,
    paramApi.urlPolicy
  );

  return <Policy dataPolicyRender={dataPolicyRender[0]} />;
};

export default PolicyEyeExamPage;
