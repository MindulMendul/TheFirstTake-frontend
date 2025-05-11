import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  const codeResponse = await fetch(process.env.AUTH_KAKAO_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  const tokenData = (await codeResponse.json()).data;

  const res = NextResponse.redirect('http://localhost:3000');
  res.cookies.set('access_token', tokenData.access_token, { maxAge: 3600 });
  res.cookies.set('refresh_token', tokenData.refresh_token, { maxAge: 86400 });

  return res;
}
