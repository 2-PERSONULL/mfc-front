import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import authMiddleware from 'next-auth/middleware'

export { authMiddleware }

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret })

  const { pathname, search } = req.nextUrl

  // 로컬에서 테스트 => NEXT_PUBLIC_API_LOCAL_URL
  // 배포 => NEXT_PUBLIC_API_URL

  // 유저 mypage, chats 페이지 접근 시 로그인이 되어있지 않다면 로그인 페이지로 이동
  if (pathname.endsWith('/user/mypage') && !token) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/signin?callbackUrl=${encodeURIComponent(pathname)}`,
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
