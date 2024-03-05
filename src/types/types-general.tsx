export interface IDetailProductRes {
  id?: number;
  name?: string;
  slug?: string;
  sku?: string;
  categories?: string[];
  featuredImage?: string;
  stoc_quantity?: number;
  galleryImgs?: string[];
  description: string;
  shortDescription: string;
  price: string;
  max_qty?: any;
  regular_price: string;
  sale_price: string;
  total_sales: number;
  manage_stock: boolean;
  stock_quantity: any;
  stock_status: string;
  backorders: string;
  low_stock_amount: string;
  sold_individually: false;
  weight: string;
  length: string;
  width: string;
  height: string;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  reviews_allowed: boolean;
  purchase_note: string;
  attributes: string[];
  default_attributes: [];
  menu_order: number;
  post_password: string;
  virtual: false;
  downloadable: boolean;
  category_ids: number[];
  tag_ids: number[];
  shipping_class_id: number;
  downloads: string[];
  image_id: string;
  gallery_image_ids: number[];
  download_limit: number;
  download_expiry: number;
  rating_counts: number[] | string[];
  average_rating: string;
  review_count: number;
  meta_data: string[];
  variations?: {
    attributes: {
      attribute_color: string;
    };
    image: {
      url: string;
    };
  }[];
}

export interface IItemProduct {
  id?: number;
  name?: string;
  price?: number;
  ratings?: number;
  salePrice?: number;
  regular_price: number;
  seller?: string;
  sku?: string;
  slug?: string;
  featuredImage?: string;
  categories?: string[];
  variations?: {
    attributes?: {
      attribute_color?: string;
      variation_id?: number;
    };
  }[];
}

export interface IProductVariantItem {
  attributes?: {
    color: string;
  };
  id?: number;
}

export interface IItemInputGlobal {
  name: string;
  type: string;
  placeHolder: string;
}

export interface IItemInputSelectGlobal {
  name: string;
  width?: string;
  placeHolder: string;
  listOption: {
    value: string;
    label: string;
  }[];
}

export interface listInputGlobal {
  name: string;
  require?: boolean;
  type: 'input' | 'select-option' | 'text-area';
  placeHolder?: string;
  width?: string;
  listOption?: {
    value: string | number;
    label: string;
  }[];
}

export interface IItemProductMenuHeader {
  id?: number;
  name?: string;
  slug?: string;
  link?: string;
}

export interface IListProductMenuHeader {
  id?: number;
  name?: string;
  slug?: string;
  link?: string;
  children?: IItemProductMenuHeader[];
}

export interface ItemBlogType {
  post_id: number | string;
  title: string;
  post_date: string;
  post_slug: string;
  post_type: string;
  content: string;
  thumbnail_url: any;
}

export interface IItemAttributeProduct {
  lable?: string;
  color?: any;
  name?: any;
  attribute?: {
    term_id?: number;
    name?: string;
    slug?: string;
    term_group?: number;
    term_taxonomy_id?: number;
    taxonomy?: string;
    description?: string;
    parent?: number;
    count?: number;
    filter?: string;
  }[];
}

export interface IItemCart {
  key?: string;
  product_id?: number;
  product_image?: string;
  product_name?: string;
  product_price?: string;
  quantity?: number;
  stock_quantity?: number;
  variant_value?:string,
  variant_id?:string
}

export interface IDataPagination {
  total: number;
  currentPage: number;
  perpage: number;
}
