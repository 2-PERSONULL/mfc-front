import React from 'react'
import { MemberFavoriteStyleType } from '@/types/commonTypes'
import RankingItem from '@/components/pages/member/ranking/RankingItem'

export interface RankingType {
  partnerId: string
  nickname: string
  profileImage: string
  alt: string
  ranking: number
  styles: MemberFavoriteStyleType[]
  followers: number
  coordinating: number
}

export default function RankingList({
  rankingList,
}: {
  rankingList: RankingType[]
}) {
  return (
    <section className="flex flex-col gap-8">
      {rankingList.map((ranking) => (
        <RankingItem key={ranking.partnerId} ranking={ranking} />
      ))}
    </section>
  )
}
