const isUseBanner = (pathname: string): boolean => {
  if (pathname === '/') {
    return true;
  }

  const listPageUseBanner = [
    '/cua-hang',
    '/danh-muc-san-pham',
    '/ve-anna',
    '/hanh-trinh-tu-te',
    '/gio-hang',
    '/blog',
    '/san-pham',
  ];

  const findPathName = listPageUseBanner.filter((item) =>
    pathname.includes(item)
  );

  return findPathName.length > 0;
};

export { isUseBanner };
