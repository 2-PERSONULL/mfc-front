/* eslint-disable no-restricted-exports */
export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/user/mypage', '/user/chats', '/partner/mypage', '/partner/chats'],
}
