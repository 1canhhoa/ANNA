import { paymentOnepay } from '@/configs/config';

export async function POST(req: any) {
  const body = await req.json();
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const requestOptions: any = {
    method: 'GET',
    headers: headers,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_REST_API}/wp-json/nhanhvn/v1/check-inventory?id=${body?.id}`,
    requestOptions
  );

  const data = await response.text();
  return Response.json(data);
}
