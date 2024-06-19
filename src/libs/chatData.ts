import { TabType } from '@/types/tabType'

const chatTabs: TabType[] = [
  {
    id: 1,
    label: '전체',
    value: '',
    url: '/chats',
  },
  {
    id: 2,
    label: '미응답',
    value: 'before',
    url: '/chats/before',
  },
  {
    id: 3,
    label: '거래대기',
    value: 'pending',
    url: '/chats/pending',
  },
  {
    id: 4,
    label: '거래확정',
    value: 'confirm',
    url: '/chats/confirm',
  },
  {
    id: 5,
    label: '마감',
    value: 'closed',
    url: '/chats/closed',
  },
]

export default chatTabs
