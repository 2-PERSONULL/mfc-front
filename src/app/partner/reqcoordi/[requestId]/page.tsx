import React from 'react'
import RequestDetail from '@/components/pages/partner/reqCoordi/RequestDetail'
import { getRequestDetail } from '@/actions/partner/PartnerRequest'
import { getFavoriteStyle } from '@/actions/partner/PartnerProfile'
import {
  getClothesSize,
  getBodyInfo,
} from '@/actions/partner/userInfo/UserInformation'

export default async function RequestDeatailPage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  const requestDetail = await getRequestDetail(requestId)
  const favoritStyle = await getFavoriteStyle(requestDetail.userId)
  const sizeInformation = await getClothesSize(requestDetail.userId)
  const bodyType = await getBodyInfo(requestDetail.userId)

  return (
    <RequestDetail
      historyId={requestId}
      requestDetail={requestDetail}
      favoritStyle={favoritStyle}
      sizeInformation={sizeInformation}
      bodyType={bodyType}
    />
  )
}
