import Image from 'next/image';
import React from 'react';

interface IProps {
  dataProductGlasses: any;
  dataDataLenses: any;
  dataProductByAnyCategory: any;
}

function RecommendProduct(props: IProps) {
  const { dataProductGlasses, dataDataLenses, dataProductByAnyCategory } =
    props;

  return (
    <div className="bg-[#EEFBFB]">
      <div className="w-[87.5rem] mx-auto max-lg:mx-[3.25rem] max-md-w-full max-md:mx-0 pb-[6.38rem] max-md:w-full max-md:pl-[2.67rem] max-md:bg-[#EEFBFB] max-md:pb-[9.6rem]">
        <h4 className="pt-[2.06rem] text-[2rem] font-extrabold text-[#4DC0BD] max-md:text-[4.8rem] max-md:pt-[6.4rem] max-md:text-[#313131] text-left">
          GỢI Ý CHO BẠN
        </h4>
        <div className="flex w-full justify-between mt-[2.12rem] overflow-hidden overflow-x-auto hide-scrollbar-global max-md:mt-[4.27rem]">
          <div className="w-[27.5rem] max-md:min-w-[54.43307rem]">
            <Image
              width={300}
              height={300}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem] max-md:h-[48rem]"
              src={
                (dataProductGlasses && dataProductGlasses[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt=""
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem] max-md:text-[3.36rem] max-md:leading-[4.704rem]">
              {dataProductGlasses && dataProductGlasses[0]?.categories[0]}
            </p>
          </div>
          <div className="w-[27.5rem] max-md:min-w-[54.43307rem] max-md:mx-[2.13rem]">
            <Image
              width={300}
              height={300}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem] max-md:h-[48rem]"
              src={
                (dataDataLenses && dataDataLenses[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt=""
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem] max-md:text-[3.36rem] max-md:leading-[4.704rem]">
              {dataDataLenses && dataDataLenses[0]?.categories[0]}
            </p>
          </div>
          <div className="w-[27.5rem] max-md:min-w-[54.43307rem]">
            <Image
              width={300}
              height={300}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem] max-md:h-[48rem]"
              src={
                (dataProductByAnyCategory &&
                  dataProductByAnyCategory[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt="image"
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem] max-md:text-[3.36rem] max-md:leading-[4.704rem]">
              {dataProductByAnyCategory &&
                dataProductByAnyCategory[0]?.categories[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendProduct;
