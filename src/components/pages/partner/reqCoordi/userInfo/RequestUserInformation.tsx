import React from 'react'
import RequestDeetailTag from '@/components/pages/partner/reqCoordi/RequestDeetailTag'
import { UserBodyInfoType, UserClothesSizeInfoType } from '@/types/userInfoType'
import { MemberFavoriteStyleType } from '@/types/commonTypes'
import UserClothesSizeInfo from './UserClothesSizeInfo'
import UserBodyInfo from './UserBodyInfo'

export default function RequestUserInformation({
  favoritStyle,
  sizeInformation,
  bodyType,
}: {
  favoritStyle: MemberFavoriteStyleType[]
  sizeInformation: UserClothesSizeInfoType
  bodyType: UserBodyInfoType
}) {
  const preferredStyle = favoritStyle
    .map((item: MemberFavoriteStyleType) => item.name)
    .filter((item: string | null) => item !== null) as string[]

  return (
    <div className="flex flex-col gap-8">
      <RequestDeetailTag title="선호 스타일" value={preferredStyle} />
      <UserClothesSizeInfo sizeInformation={sizeInformation} />
      <UserBodyInfo bodyType={bodyType} />
    </div>
  )
}
