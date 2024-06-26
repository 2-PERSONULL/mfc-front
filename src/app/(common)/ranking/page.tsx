import React from 'react'
import RankingList from '@/components/pages/member/ranking/RankingList'
import RankingTitle from '@/components/pages/member/ranking/RankingTitle'

export interface RankingType {
  partnerId: string
  nickname: string
  profileImage: string
  alt: string
  ranking: number
  styles: string[]
  followers: number
  coordinating: number
}

export default function Ranking() {
  const sampleData = [
    {
      partnerId: '1',
      nickname: '데일리쥬',
      profileImage:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg',
      alt: 'alt1',
      ranking: 1,
      styles: [
        {
          favoriteId: 1,
          styleId: 2,
          name: '빈티지',
        },
        {
          favoriteId: 2,
          styleId: 3,
          name: '러블리',
        },
      ],
      followers: 100,
      coordinating: 210,
    },
    {
      partnerId: '2',
      nickname: '캔디클로젯',
      profileImage:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg',
      alt: 'alt1',
      ranking: 2,
      styles: [
        {
          favoriteId: 3,
          styleId: 3,
          name: '아미카지',
        },
        {
          favoriteId: 4,
          styleId: 4,
          name: '러블리',
        },
        {
          favoriteId: 5,
          styleId: 5,
          name: '캐주얼',
        },
      ],
      followers: 54,
      coordinating: 110,
    },
  ]

  return (
    <main className="p-5">
      <RankingTitle />
      <RankingList rankingList={sampleData} />
    </main>
  )
}
