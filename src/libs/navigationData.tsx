import { NavigationType } from '@/types/navigationTypes'

const NavigationData: NavigationType[] = [
  {
    id: 1,
    title: 'HOME',
    url: '/',
    icon: '/images/bottomNav/home.svg',
  },
  {
    id: 2,
    title: 'RANKING',
    url: '/ranking',
    icon: '/icons/home.svg',
  },
  {
    id: 3,
    title: 'SEARCH',
    url: '/explore',
    icon: '/icons/home.svg',
  },
  {
    id: 4,
    title: 'CHAT',
    url: '/chats',
    icon: '/icons/home.svg',
  },
  {
    id: 5,
    title: 'MY',
    url: '/mypage',
    icon: '/icons/home.svg',
  },
]

export default NavigationData
