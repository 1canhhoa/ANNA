const delayMenu = {
  openDelay: 300,
  closeDelay: 300,
};

const keyLocalStorage = {
  keyProductsInCart: 'listMyCart',
  keyProductWishlist: 'wishlistProduct',
  keyFormPayment: 'formPayment',
};

const timeDelayPopup = 8000;

const validatePhoneNumber =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const linkSocial = {
  facebook: 'https://www.facebook.com/annaeyeglasses',
  twitter: '',
  instagram: 'https://www.instagram.com/kinhmatanna/',
  tiktok: 'https://www.tiktok.com/@kinhmatanna',
  youtube: 'https://www.youtube.com/@KinhMatAnna',
  shopee: 'https://shopee.vn/annaeyeglasses',
  website: '',
  email: 'marketing@kinhmatanna.com',
  phone: '19000359',
  tax_code: '0108195925',
};

const paymentOnepay: any = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  SECRET_KEY_HASH: process.env.NEXT_PUBLIC_SECRET_KEY_HASH,
  ONEPAY_HOST: process.env.NEXT_PUBLIC_ONEPAY_HOST,
  ACCESS_CODE: process.env.NEXT_PUBLIC_ACCESS_CODE,
  MERCHANT_ID: process.env.NEXT_PUBLIC_MERCHANT_ID,
  REQUEST_API: process.env.NEXT_PUBLIC_REQUEST,
};

export {
  delayMenu,
  timeDelayPopup,
  validatePhoneNumber,
  linkSocial,
  paymentOnepay,
  keyLocalStorage,
};
