const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(' not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};

const GET_POSTS = `${process.env.DOMAIN_BACKEND}/wp-json/post/v1/posts`;
const GET_PRODUCTS = `${process.env.DOMAIN_BACKEND}/wp-json/custom/v1/products`;
const GET_CATEGORIES = `${process.env.DOMAIN_BACKEND}/wp-json/custom/v1/categories`;

export default async function sitemap() {
  const posts = await getData(GET_POSTS);
  const products = await getData(GET_PRODUCTS);
  const categories = await getData(GET_CATEGORIES);

  if (!posts || !products || !categories) {
    return [
      {
        url: process.env.DOMAIN,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `${process.env.DOMAIN}/cua-hang`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/kinh-ram`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/decor`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/trong-kinh`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?chat-lieu=kim-loai`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?chat-lieu=nhua`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?hinh-dang=mat-meo`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?hinh-dang=vuong`,
        lastModified: new Date(),
        priority: 0.9,
      },
    ];
  }
  const arrPosts = posts?.data?.item?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });
  const arrProducts = products?.data?.item?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: new Date(),
      priority: 1,
    };
  });
  const arrCategoeis = categories?.data?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: new Date(),
      priority: 1,
    };
  });
  return [
    // CỬA HÀNG (Categories)
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/cua-hang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/kinh-ram`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/decor`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/trong-kinh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?chat-lieu=kim-loai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?chat-lieu=nhua`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?hinh-dang=mat-meo`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/danh-muc-san-pham/gong-kinh?hinh-dang=vuong`,
      lastModified: new Date(),
      priority: 0.9,
    },

    // Tìm CỬA HÀNG
    {
      url: `${process.env.DOMAIN}/he-thong-cua-hang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // XEM THÊM
    {
      url: `${process.env.DOMAIN}/ve-anna`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/product-filter`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/blog/nguyen-tac-chon-mat-kinh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/blog/khoang-cach-dong-tu-pd-chinh-xac-nhat`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/huong-dan-chon-size-mat-kinh-vua-khuon-mat`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // HÀNH TRÌNH TỬ TẾ
    {
      url: `${process.env.DOMAIN}/hanh-trinh-tu-te`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // GIỎ HÀNG
    {
      url: `${process.env.DOMAIN}/gio-hang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // SẢN PHẨM( 12 SẢN PHẢM)
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-nhua-cang-tam-an221397-51-18-145-nau`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-nhua-an221440-52-18-145-hong`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-nhua-cang-tam-an221397-51-18-145-reu`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-thoi-trang-an221527-52-20-145-ghi-nhat`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-gong-nhua-tr2099-54-16-144-trang-vang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-thoi-trang-an221527-52-20-145-den-trang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-gong-thoi-trang-01228-53-19-150`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-gong-titanium-cao-cap-tn2350-2305-52-20-148-den-ghi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-gong-cot-kim-loai-an226832-47-22-147-ghi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-thoi-trang-an2201342-48-23-145-ghi-nhat`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-nhua-an221440-52-18-145-ghi-nhat`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/san-pham/gk-m-gong-cang-kim-loai-an22ys9231-52-19-145-trang-hong`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // CHÍNH SÁCH BẢO HÀNH, CHÍNH SÁCH BẢO HÀNH, CHÍNH SÁCH BẢO HÀNH, CHÍNH SÁCH
    {
      url: `${process.env.DOMAIN}/chinh-sach-bao-hanh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/do-mat-mien-phi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/thu-cu-doi-moi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/ve-sinh-va-bao-quan-kinh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // TRA CỨU ĐƠN HÀNG TRA CỨU ĐƠN HÀNG TRA CỨU ĐƠN HÀNG
    {
      url: `${process.env.DOMAIN}/order-checking`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // TÀI KHOẢN - ĐĂNG KÍ
    {
      url: `${process.env.DOMAIN}/tai-khoan`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/dang-ky`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // FOOTER
    {
      url: `${process.env.DOMAIN}/chinh-sach-thanh-toan`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/chinh-sach-giao-hang`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/chinh-sach-bao-hanh`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...arrPosts,
    ...arrProducts,
    ...arrCategoeis,
  ];
}
