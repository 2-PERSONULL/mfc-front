import React from 'react'
import Link from 'next/link'
import { MemberFavoriteStyleType } from '@/types/commonTypes'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import RankingFollowButton from '@/components/ui/button/RankingFollowButton'

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

export default function RankingItem({ ranking }: { ranking: RankingType }) {
  return (
    <div className="flex items-center justify-between  rounded-[24px] bg-white">
      <Link
        href={`/user/coordinator/${ranking.partnerId}/profile`}
        className="flex items-center gap-2"
      >
        <span className="font-bold text-gray-500">{ranking.ranking}</span>
        <CircleProfile imageUrl={ranking.profileImage} size={60} />

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[17px] pl-1">{ranking.nickname}</p>
          <ul className="flex gap-2">
            {ranking.styles.map((style) => (
              <li
                key={style.styleId}
                className="bg-gray-100 rounded-[14px] px-1 text-[12px] text-gray-500"
              >
                {style.name}
              </li>
            ))}
          </ul>
          <span className="text-[12px] text-gray-500 pl-1">
            매칭 {ranking.coordinating.toLocaleString()}회
          </span>
        </div>
      </Link>

      <div className="flex flex-col items-center gap-1">
        <RankingFollowButton partnerId={ranking.partnerId} isFollow={false} />
        <span className="text-[12px] text-gray-500">
          팔로워 {ranking.followers}
        </span>
      </div>
    </div>
  )
}
