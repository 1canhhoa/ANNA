import { listInputGlobal } from '@/types/types-general';

export interface INameItemForm {
  name?: string;
  email?: string;
  company?: string;
  address?: string;
  city: string;
  state?: string;
  country?: string;
  phone?: string;
  phuong?: string;
}
export const listInput: listInputGlobal[] = [
  {
    name: 'name',
    require: true,
    type: 'input',
    placeHolder: 'Họ và tên',
  },
  {
    name: 'phone',
    require: true,
    type: 'input',
    placeHolder: 'Số điện thoại',
  },
  {
    name: 'email',
    require: true,
    type: 'input',
    placeHolder: 'Địa chỉ email',
  },
  {
    name: 'company',
    type: 'input',
    placeHolder: 'Tên công ty',
  },
  {
    name: 'country',
    require: true,
    type: 'input',
    placeHolder: 'Quốc gia/Khu vực',
  },
  {
    name: 'city',
    require: true,
    type: 'input',
    placeHolder: 'Tỉnh/Thành phố',
  },
  {
    name: 'state',
    require: true,
    type: 'input',
    placeHolder: 'Quận/Huyện',
  },
  {
    name: 'phuong',
    require: true,
    type: 'input',
    placeHolder: 'Xã/Phường',
  },
];
