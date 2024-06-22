import React from 'react'
import { getRequestList } from '@/actions/user/UserRequest'
import { BaseResponseType } from '@/types/baseResponseType'
import ReqCoordiContents from '@/components/pages/user/reqCoordi/ReqCoordiContents'
import PartnerInfo from '@/components/pages/user/reqCoordi/PartnerInfo'

export default async function UserCoordinatingRequest({
  params,
}: {
  params: { partnerId: string }
}) {
  const requestList: BaseResponseType | null = await getRequestList(0)
  return (
    <main className="w-full min-h-full px-5">
      <PartnerInfo partnerId={params.partnerId} />
      {/* 수정 필요 */}
      <ReqCoordiContents requests={requestList} />
    </main>
  )
}
