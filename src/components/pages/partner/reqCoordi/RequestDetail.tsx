'use client'

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { actionCoordinate } from '@/actions/partner/PartnerRequest'
import { UserRequestDetailType } from '@/types/requestType'
import useToast from '@/stores/toast'
import ViewReqCodiBudget from '@/components/pages/user/viewRequest/ViewReqCodiBudget'
import ViewReqCodiOptions from '@/components/pages/user/viewRequest/ViewReqCodiOptions'
import ViewReqMyImages from '@/components/pages/user/viewRequest/ViewReqMyImages'
import ViewReqPreferredBrands from '@/components/pages/user/viewRequest/ViewReqPreferredBrands'
import ViewReqRefImages from '@/components/pages/user/viewRequest/ViewReqRefImages'
import ViewReqSituation from '@/components/pages/user/viewRequest/ViewReqSituation'
import ViewRequestContents from '@/components/pages/user/viewRequest/ViewRequestContents'
import ViewRequestTitle from '@/components/pages/user/viewRequest/ViewRequestTitle'

export default function RequestDetail({
  historyId,
  requestDetail,
}: {
  historyId: string
  requestDetail: UserRequestDetailType
}) {
  const status = useSearchParams().get('status')
  const router = useRouter()
  const { showToast } = useToast()

  const actionHandler = async (action: string) => {
    const result = await actionCoordinate(
      historyId,
      requestDetail.userId,
      action,
    )

    if (result.isSuccess) {
      showToast({ content: '요청을 수락했습니다.', type: 'success' })
      router.push('/partner/chats')
      return
    }

    showToast({ content: result.message, type: 'warning' })
  }
  return (
    <div className="w-full">
      <section className="relative grid gap-6 w-full min-h-screen p-5 pb-4">
        <ViewRequestTitle title={requestDetail.title} />
        <ViewRequestContents contents={requestDetail.description} />
        <ViewReqSituation situation={requestDetail.situation} />
        <ViewReqPreferredBrands brands={requestDetail.brandIds} />
        <ViewReqCodiOptions categories={requestDetail.categoryIds} />
        <ViewReqCodiBudget budget={requestDetail.budget.toString()} />
        <ViewReqRefImages
          title="참고 이미지"
          refImgs={requestDetail.referenceImageUrls}
        />
        <ViewReqMyImages title="내 이미지" myImgs={requestDetail.myImageUrls} />
      </section>

      {status === 'nonresponse' && (
        <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-white gap-2 px-2 pb-[10px]">
          <button
            type="button"
            onClick={() => actionHandler('RESPONSEREJECT')}
            className="bg-gray-200 font-semibold text-[17px] h-[60px] rounded-full w-full"
          >
            거절
          </button>
          <button
            type="button"
            onClick={() => actionHandler('RESPONSEACCEPT')}
            className="bg-black font-semibold text-white text-[17px] h-[60px] rounded-full w-full"
          >
            수락
          </button>
        </div>
      )}
    </div>
  )
}
