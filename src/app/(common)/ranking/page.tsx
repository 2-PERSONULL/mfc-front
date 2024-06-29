import React from 'react'
import RankingList from '@/components/pages/member/ranking/RankingList'
import RankingTitle from '@/components/pages/member/ranking/RankingTitle'
import getPartnerRanking from '@/actions/member/Ranking'

export default async function Ranking() {
  const rankingList = await getPartnerRanking()

  return (
    <main className="min-h-screen p-5 pb-[140px]">
      <RankingTitle />
      <RankingList rankingList={rankingList} />
    </main>
  )
}
