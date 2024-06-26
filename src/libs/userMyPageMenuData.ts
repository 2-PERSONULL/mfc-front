import { MenuType } from '@/types/menuType'

const UserMyPageMenuData: MenuType[] = [
  {
    id: 1,
    title: '프로필 관리',
    url: '/user/mypage/profile',
  },
  {
    id: 2,
    title: '요청서 관리',
    url: '/user/mypage/reqlist',
  },
  {
    id: 3,
    title: '좋아요 관리',
    url: '/user/mypage/likelist',
  },
  {
    id: 4,
    title: '팔로우 관리',
    url: '/user/mypage/followlist',
  },
  {
    id: 5,
    title: '결제 관리',
    url: '/user/mypage/paymentlist',
  },
  {
    id: 6,
    title: '리뷰 관리',
    url: '/user/mypage/reviewlist',
  },
]

export default UserMyPageMenuData
