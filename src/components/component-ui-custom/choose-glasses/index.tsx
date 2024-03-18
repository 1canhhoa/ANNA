import './style.css';
import { ICClose } from '@/components/Icons/ICClose';
import React, { useEffect, useState } from 'react';
import map from 'lodash.map';
import Image from 'next/image';
import { undefined } from 'zod';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';

interface IProps {
  isShowPopupChooseGlasses?: any;
  listAttributeChooseGlasses: any;
}

interface IListChooseGlasses {
  title?: string;
  keySlug?: 'gender' | 'face' | 'shape' | 'material';
  typeSelect?: 'radio' | 'checkbox';
  listItem?: {
    name?: string;
    slug?: string;
    image?: any;
  }[];
}

interface IListAttributeSelect {
  listGender: IListChooseGlasses;
  listFace: IListChooseGlasses;
  listStyle: IListChooseGlasses;
  listMaterial: IListChooseGlasses;
}
interface IListChoose {
  gender: string[];
  face: string[];
  shape: string[];
  material: string[];
}
function ChooseGlasses(props: IProps) {
  const { isShowPopupChooseGlasses, listAttributeChooseGlasses } = props;
  const router = useRouter();
  const [currentArraySelect, setCurrentArraySelect] =
    useState<IListChooseGlasses>();
  const [listChooseGlasses, setListChooseGlass] = useState<IListChoose>({
    gender: [],
    face: [],
    shape: [],
    material: [],
  });

  const [listAttributeSelect, setListAttributeSelect] =
    useState<IListAttributeSelect>({
      listGender: {},
      listFace: {},
      listStyle: {},
      listMaterial: {},
    });
  const [listAttributeTmp, setListAttributeTmp] = useState<string[]>([]);

  const handleAddListAttributeTmp = (
    valueAttribute: any,
    typeSelect?: 'radio' | 'checkbox'
  ): void => {
    if (typeSelect === 'radio') {
      setListAttributeTmp([valueAttribute]);
      return;
    }

    const findAttributeAvailabel = listAttributeTmp.find(
      (itemAttribute) => itemAttribute === valueAttribute
    );

    if (!findAttributeAvailabel) {
      setListAttributeTmp([...listAttributeTmp, valueAttribute]);
      return;
    }

    const listNewAttribute = listAttributeTmp.filter(
      (itemAttribute) => itemAttribute !== valueAttribute
    );
    setListAttributeTmp(listNewAttribute);
  };

  const isSelectedAttribute = (keyAttribute: any): boolean => {
    const findIsSelectedAttribute = listAttributeTmp.filter(
      (itemAttributeTmp) => itemAttributeTmp === keyAttribute
    );
    return findIsSelectedAttribute.length > 0;
  };

  const handleClosePopup = (): void => {
    isShowPopupChooseGlasses.onFalse();
    setCurrentArraySelect(listAttributeSelect.listGender);
    setListAttributeTmp([]);
    setListChooseGlass({ gender: [], face: [], shape: [], material: [] });
  };
  const handleNext = (): void => {
    switch (currentArraySelect?.keySlug) {
      case 'gender':
        setCurrentArraySelect(listAttributeSelect.listFace);
        setListChooseGlass({ ...listChooseGlasses, gender: listAttributeTmp });
        break;
      case 'face':
        setCurrentArraySelect(listAttributeSelect.listStyle);
        setListChooseGlass({ ...listChooseGlasses, face: listAttributeTmp });
        break;
      case 'shape':
        setCurrentArraySelect(listAttributeSelect.listMaterial);
        setListChooseGlass({ ...listChooseGlasses, shape: listAttributeTmp });
        break;
      default:
        isShowPopupChooseGlasses.onFalse();
    }

    setListAttributeTmp([]);
  };

  const handlePrev = (): void => {
    switch (currentArraySelect?.keySlug) {
      case 'material':
        setCurrentArraySelect(listAttributeSelect.listStyle);
        break;
      case 'shape':
        setCurrentArraySelect(listAttributeSelect.listFace);
        break;
      case 'face':
        setCurrentArraySelect(listAttributeSelect.listGender);
        break;
      default:
        undefined();
    }
  };

  const handleSeeResult = (): void => {
    setListChooseGlass({
      ...listChooseGlasses,
      material: listAttributeTmp,
    });

    let url = '';
    for (const [key, value] of Object.entries(listChooseGlasses)) {
      url = `${url}&${key}=${value}`;
    }

    router.push(`/product-filter/?${url}`);
    handleClosePopup();
  };

  useEffect(() => {
    const [listGenderRes, listFaceRes, listShapeRes, listMaterialRes] =
      listAttributeChooseGlasses;

    setCurrentArraySelect({
      title: 'Giới tính của bạn là?',
      keySlug: 'gender',
      typeSelect: 'radio',
      listItem: listGenderRes,
    });

    setListAttributeSelect({
      listGender: {
        title: 'Giới tính của bạn là?',
        keySlug: 'gender',
        typeSelect: 'radio',
        listItem: listGenderRes,
      },
      listFace: {
        title: 'Chọn hình dáng khuôn mặt',
        keySlug: 'face',
        typeSelect: 'radio',
        listItem: listFaceRes,
      },
      listStyle: {
        title: 'Kiểu dáng',
        keySlug: 'shape',
        typeSelect: 'checkbox',
        listItem: listShapeRes,
      },
      listMaterial: {
        title: 'Chất liệu',
        keySlug: 'material',
        typeSelect: 'checkbox',
        listItem: listMaterialRes,
      },
    });
  }, []);

  return (
    <>
      {isShowPopupChooseGlasses.value && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-white max-md:padding-horizontal-mobile ">
          <div className="h-fit flex justify-between py-[0.5rem] w-full max-md:py-[2.5rem]">
            <div className="w-[24px]" />
            <div className="text-[1.25rem] text-[#414141] font-extrabold max-md:text-[3.825rem]">
              Chọn kính phù hợp với bạn
            </div>
            <button
              onClick={handleClosePopup}
              type="button"
              className="p-[0.2rem] bg-white rounded-[1rem]"
            >
              <ICClose stroke="black" />
            </button>
          </div>
          <hr />
          <div className="h-[calc(100vh-5rem)] overflow-auto">
            <div className="w-[87.5rem] h-full mx-auto mt-[3rem] max-md:w-full ">
              <div className="text-center text-[2rem] text-[#414141] font-extrabold max-md:text-[3.6rem]">
                {currentArraySelect?.title}
              </div>
              <div className="flex flex-wrap justify-center mt-[1.5rem]">
                {map(currentArraySelect?.listItem, (itemAtttribute, index) => (
                  <div
                    key={index}
                    role="button"
                    onClick={() =>
                      handleAddListAttributeTmp(
                        itemAtttribute.slug,
                        currentArraySelect?.typeSelect
                      )
                    }
                    className="mx-[1rem] flex flex-col items-center mt-[2rem]"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className="w-[15.625rem] h-[15.625rem] object-cover border-[1px] border-[#F3F3F3] max-md:w-[40rem] max-md:h-[40rem]"
                      src={itemAtttribute?.image ?? ''}
                      alt="chọn kính"
                    />
                    <div className="mt-[1rem]">
                      {currentArraySelect?.typeSelect === 'checkbox' ? (
                        <>
                          <Checkbox
                            name="remember"
                            checked={isSelectedAttribute(itemAtttribute.slug)}
                            className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem] mr-[1rem]"
                          />
                          <span className="text-[#414141] font-semibold max-md:text-[2.7rem]">
                            {itemAtttribute?.name}
                          </span>
                        </>
                      ) : (
                        <div className="flex items-center">
                          <input
                            checked={isSelectedAttribute(itemAtttribute.slug)}
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                          <span className="text-[#414141] font-semibold ml-[0.5rem] max-md:text-[2.7rem]">
                            {itemAtttribute?.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-[3rem]">
                {currentArraySelect?.keySlug !== 'gender' && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-[#55D5D2] py-[0.5rem] px-[1.25rem] mr-[1rem] text-white rounded-[0.4rem] font-bold max-md:text-[3.6rem] max-md:py-[1.5rem] max-md:px-[8rem] max-md:rounded-[4rem] max-md:mx-[1.5rem]"
                  >
                    Trở lại
                  </button>
                )}

                {currentArraySelect?.keySlug !== 'material' && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#55D5D2] py-[0.5rem] px-[1.25rem] mr-[1rem] text-white rounded-[0.4rem] font-bold max-md:text-[3.6rem] max-md:py-[1.5rem] max-md:px-[8rem] max-md:rounded-[4rem] max-md:mx-[1.5rem]"
                  >
                    Đi tiếp
                  </button>
                )}

                {currentArraySelect?.keySlug === 'material' && (
                  <button
                    type="button"
                    onClick={handleSeeResult}
                    className="bg-[#55D5D2] py-[0.5rem] px-[1.25rem] text-white rounded-[0.4rem] font-bold max-md:text-[3.6rem] max-md:py-[1.5rem] max-md:px-[8rem] max-md:rounded-[4rem] max-md:mx-[1.5rem]"
                  >
                    Xem kết quả
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChooseGlasses;
