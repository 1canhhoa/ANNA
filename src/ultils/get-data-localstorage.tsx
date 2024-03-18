const getDataLocalStorage = (keyStorage: string): any => {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem(keyStorage) !== null
  ) {
    const storedData = localStorage.getItem(keyStorage) as string;
    const listDataLocalStorage = JSON.parse(storedData);

    return listDataLocalStorage;
  }

  return null;
};

export { getDataLocalStorage };
