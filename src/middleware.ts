import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export const config = {
  matcher: ['/user/mypage', '/user/chats'],
}

export default async function middleware(req: NextRequest) {
  const session = await auth()
  const reqUrl = new URL(req.url)
  if (!session && !reqUrl.pathname) {
    return NextResponse.redirect(`http://localhost:3000/user`)
  }
  if (!session) {
    return NextResponse.redirect(
      `http://localhost:3000/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
    )
  }
  return NextResponse.next()
}
