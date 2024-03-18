// const revalidate = 0; // 1h 1
const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600;
export const baseUrlAcf = process.env.NEXT_PUBLIC_ACF_API;
export const baseUrl = process.env.NEXT_PUBLIC_V2_API;
// export const baseUrlBlog = 'https://woo-api.okhub.tech/wp-json/post/v1/posts';
export const fetchDataRest = async (
  method: string,
  url: string,
  variables = {}
) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   variables,
    // }),
    next: { revalidate },
    // cache: 'no-store'
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // return null;

    throw new Error(`-url:${url}-method:${method}`);
  }
  return res.json();
};

export const postDataBase = async ({
  url,
  body,
  token,
  method = 'post',
}: {
  url: string;
  body: FormData | any;
  token?: string;
  method?: 'post' | 'put' | 'get' | 'delete';
}) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    body: body,
    method: method,
    mode: 'cors',
    headers: new Headers(
      token
        ? {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
          }
    ),
  });

  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(text);
    // return null;
  });
};
