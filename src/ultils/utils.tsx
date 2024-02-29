import keys from 'lodash.keys';

const convertStr2URL = (pickParams: any) => {
  let str = '';
  keys(pickParams).forEach((key) => {
    str += `${key}=${pickParams[key]}&`;
  });
  str = str.slice(0, -1);
  return str;
};

function generateRandom4DigitNumber() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
}

export { convertStr2URL, generateRandom4DigitNumber };
