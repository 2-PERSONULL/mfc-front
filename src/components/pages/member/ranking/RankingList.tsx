import React from 'react'
import RankingItem from '@/components/pages/member/ranking/RankingItem'
import { RankingType } from '@/types/commonTypes'

export default function RankingList({
  rankingList,
}: {
  rankingList: RankingType[]
}) {
  return (
    <section className="flex flex-col gap-8">
      {rankingList.map((item, index) => (
        <RankingItem key={item.partnerId} ranking={index + 1} data={item} />
      ))}
    </section>
  )
}
