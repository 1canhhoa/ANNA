import {
  listDistrictMock,
  listProvinceMock,
  listWardsMock,
} from '@/ultils/mock-data-district';

interface IItemArea {
  label: string;
  value: string;
}

const handlePushArrayArea = (listArray: IItemArea[], itemPush: any): void => {
  listArray.push({
    label: itemPush.name,
    value: itemPush.code,
  });
};

// GET ALL PROVINCE
const getAllProvince = (): IItemArea[] => {
  const listProvince: IItemArea[] = listProvinceMock.map((item) => {
    return {
      label: item.name,
      value: item.code,
    };
  });
  return listProvince;
};

// GET ALL DISTRICT BY parent_code PROVINCE
const getAllDistrictByProvince = (parentCode: string): IItemArea[] => {
  const lengthArray = listDistrictMock.length;
  const listDistrict: IItemArea[] = [];

  for (let i = 0; i < lengthArray / 2; i++) {
    if (listDistrictMock[i].parent_code === parentCode) {
      handlePushArrayArea(listDistrict, listDistrictMock[i]);
    }

    if (listDistrictMock[lengthArray - 1 - i].parent_code === parentCode) {
      handlePushArrayArea(listDistrict, listDistrictMock[lengthArray - i]);
    }
  }

  if (lengthArray % 2 === 1) {
    const idItemCenter = Math.floor(lengthArray / 2) + 1;

    if (listDistrictMock[idItemCenter].parent_code === parentCode) {
      handlePushArrayArea(listDistrict, listDistrictMock[idItemCenter]);
    }
  }

  return listDistrict;
};

// GET ALL WARD BY parent_code DISTRICT
const getAllWardByDistrict = (parentCode: string): IItemArea[] => {
  const lengthArray = listWardsMock.length;
  const listWard: IItemArea[] = [];

  for (let i = 0; i < lengthArray / 2; i++) {
    if (listWardsMock[i].parent_code === parentCode) {
      handlePushArrayArea(listWard, listWardsMock[i]);
    }

    if (listWardsMock[lengthArray - 1 - i].parent_code === parentCode) {
      handlePushArrayArea(listWard, listWardsMock[lengthArray - i]);
    }
  }

  if (lengthArray % 2 === 1) {
    const idItemCenter = Math.floor(lengthArray / 2) + 1;

    if (listWardsMock[idItemCenter].parent_code === parentCode) {
      handlePushArrayArea(listWard, listWardsMock[idItemCenter]);
    }
  }

  return listWard;
};

export { getAllProvince, getAllDistrictByProvince, getAllWardByDistrict };
