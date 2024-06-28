import React from 'react'
import Link from 'next/link'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import RankingFollowButton from '@/components/ui/button/RankingFollowButton'
import { RankingType } from '@/types/commonTypes'
import { getFollowStatus } from '@/actions/user/Follow'

export default async function RankingItem({
  ranking,
  data,
}: {
  ranking: number
  data: RankingType
}) {
  const isFollow = await getFollowStatus(data.partnerId)

  return (
    <div className="flex items-center justify-between  rounded-[24px] bg-white boxUp">
      <Link
        href={`/user/coordinator/${data.partnerId}/profile`}
        className="flex items-center gap-2"
      >
        <span className="font-bold text-gray-500">{ranking}</span>
        <CircleProfile imageUrl={data.profileImage} size={60} />

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[17px] pl-1">
            {' '}
            {data.nickname.length > 12
              ? `${data.nickname.substring(0, 12)}...`
              : data.nickname}
          </p>
          <ul className="flex gap-2">
            {data.styles.map((style) => (
              <li
                key={style.styleId}
                className="bg-gray-100 rounded-[14px] px-1 text-[12px] text-gray-500"
              >
                {style.name}
              </li>
            ))}
          </ul>
          <span className="text-[12px] text-gray-500 pl-1">
            매칭 {data.coordinateCnt.toLocaleString()}회
          </span>
        </div>
      </Link>

      <div className="flex flex-col items-center gap-1">
        <RankingFollowButton partnerId={data.partnerId} isFollow={isFollow} />
        <span className="text-[12px] text-gray-500">
          팔로워 {data.followerCnt}
        </span>
      </div>
    </div>
  )
}
