const setItemLocalstorage = (keyStorage: string, data: any): void => {
  localStorage.setItem(keyStorage, JSON.stringify(data));
};

export { setItemLocalstorage };
