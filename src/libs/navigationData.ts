import { NavigationType } from '@/types/navigationTypes'

const NavigationData: NavigationType[] = [
  {
    id: 1,
    title: 'HOME',
    url: '',
    icon: 'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/home.svg',
  },
  {
    id: 2,
    title: 'RANKING',
    url: '/ranking',
    icon: 'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/ranking.svg',
  },
  {
    id: 3,
    title: 'SEARCH',
    url: '/explore',
    icon: 'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/explore.svg',
  },
  {
    id: 4,
    title: 'CHAT',
    url: '/chats',
    icon: 'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/chats.svg',
  },
  {
    id: 5,
    title: 'MY',
    url: '/mypage',
    icon: 'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/mypage.svg',
  },
]

export default NavigationData
