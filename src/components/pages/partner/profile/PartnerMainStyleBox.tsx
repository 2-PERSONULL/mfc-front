import React from 'react'
import { getFavoriteStyle } from '@/actions/partner/PartnerProfile'
import { MemberFavoriteStyleType } from '@/types/commonTypes'

export default async function PartnerMainStyleBox({
  partnerId,
}: {
  partnerId?: string
}) {
  const favoritStyle = await getFavoriteStyle(partnerId)

  return (
    <section className="mb-10">
      <h1 className="text-[16px] font-semibold mb-1">주요 스타일</h1>
      <ul className="flex flex-wrap w-full h-auto">
        {favoritStyle.map((style: MemberFavoriteStyleType) => (
          <li
            key={style.favoriteId}
            className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]"
          >
            <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
              #{style.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
