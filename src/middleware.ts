import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import authMiddleware from 'next-auth/middleware'

export { authMiddleware }

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret })
  const { pathname, search } = req.nextUrl

  // 로그인 시 유저의 role에 따라 페이지 이동
  // 로그인 시 role 정보가 오지 않으니 해당 코드 수정 필요
  if (pathname.startsWith('/signin') && token?.role === 'PARTNER') {
    return NextResponse.redirect(new URL('/partner', req.url))
  }
  if (pathname.startsWith('/signin') && token?.role === 'USER') {
    return NextResponse.redirect(new URL('/user', req.url))
  }

  // 유저 mypage, chats 페이지 접근 시 로그인이 되어있지 않다면 로그인 페이지로 이동
  if (pathname.endsWith('/user/mypage') && !token) {
    return NextResponse.redirect(
      `http://localhost:3000/signin?callbackUrl=${encodeURIComponent(pathname)}`,
    )
  }
  if (pathname.endsWith('/user/chats') && !token) {
    return NextResponse.redirect(
      `http://localhost:3000/signin?callbackUrl=${encodeURIComponent(pathname)}`,
    )
  }

  // 로그인 후 쿼리스트링이 있는 경우 해당 페이지로 이동
  if (search && token) {
    return NextResponse.redirect(`http://localhost:3000/${pathname}`)
  }

  // 파트너 페이지 접근 시 로그인이 되어있지 않다면 로그인 페이지로 이동
  if (pathname.startsWith('/partner') && !token) {
    return NextResponse.redirect(
      `http://localhost:3000/signin?callbackUrl=${encodeURIComponent(pathname)}`,
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/signin:path*', '/user/mypage', '/user/chats', '/partner/:path*'],
}
