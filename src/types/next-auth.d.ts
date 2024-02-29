declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      username: string;
      firstName: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: boolean;
      token: string;
    };
  }
}

export interface IPostData {
  url: string;
  method: 'post' | 'put' | 'get' | 'delete';
  body?: FormData | any;
  token?: string;
}

export interface IFetchData {
  url: string;
  method: 'post' | 'put' | 'get' | 'delete' | 'patch';
  body?: FormData | any;
  token?: string;
}

export interface IGetArea {
  valueFiler: string | null;
  key: 'district' | 'wards';
}
