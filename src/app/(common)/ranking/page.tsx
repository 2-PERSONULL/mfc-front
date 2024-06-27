import React from 'react'
import RankingList from '@/components/pages/member/ranking/RankingList'
import RankingTitle from '@/components/pages/member/ranking/RankingTitle'
import getPartnerRanking from '@/actions/member/Ranking'

export default async function Ranking() {
  const rankingList = await getPartnerRanking()

  return (
    <main className="p-5">
      <RankingTitle />
      <RankingList rankingList={rankingList} />
    </main>
  )
}
