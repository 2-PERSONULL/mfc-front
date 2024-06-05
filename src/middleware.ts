export { default } from 'next-auth/middleware'

// 로그인한 유저의 로그인 화면 접근 제한은 matcher말고 별도의 로직으로 작성

// 비로그인 유저의 접근 제한
export const config = { matcher: ['/user/chats', '/user/mypage'] }
