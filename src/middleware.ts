import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export default async function middleware(req: NextRequest) {
  const session = await auth()
  const reqUrl = new URL(req.url)
  if (!session) {
    return NextResponse.redirect(
      `http://localhost:3000/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
    )
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/user/mypage', '/user/chats'],
}