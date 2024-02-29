import { IPostData } from '@/types/next-auth';

// const revalidate = 0; // 1h
const revalidate = false;
const postDataCustom = async ({
  url,
  method = 'post',
  body,
  token,
}: IPostData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    method: method,
    body: body,
    // mode: 'cors',
    next: { revalidate },
  });

  if (res.ok) {
    return res.json();
  }
  console.log('url error', url);

  return res.text().then((text) => {
    // return null;
    throw new Error(`${text}-url:${url}-method:${method}`);
  });
};

const fetchDataAuthen = async ({
  url,
  method = 'post',
  body,
  token,
}: IPostData) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (token && token?.length > 0) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    method: method,
    body: body,
    // mode: 'cors',
    headers: headers,
    next: { revalidate },
  });

  if (!res.ok) {
    return res.text().then((text) => {
      // return null;
      throw new Error(text);
    });
  }
  return res.json();
};

export { postDataCustom, fetchDataAuthen };
