import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const middleware = async (request: NextRequest) => {
  const token = await getToken({
    req: request,
    secret: process.env.SECRET,
  });

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/tai-khoan', request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/list-product-dashboard',
};
