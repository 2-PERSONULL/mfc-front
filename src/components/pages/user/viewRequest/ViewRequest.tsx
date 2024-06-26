'use client'

import React from 'react'
import ViewRequestTitle from './ViewRequestTitle'
import ViewRequestContents from './ViewRequestContents'
import ViewReqSituation from './ViewReqSituation'
import ViewReqPreferredBrands from './ViewReqPreferredBrands'
import ViewReqCodiOptions from './ViewReqCodiOptions'
import ViewReqCodiBudget from './ViewReqCodiBudget'
import EditDeleteButton from '@/components/ui/button/EditDeleteButton'
import { RequestDetailProps } from '@/types/requestDetailType'
import ViewReqRefImages from './ViewReqRefImages'
import ViewReqMyImages from './ViewReqMyImages'
import BottomFixedTransButton from '@/components/ui/button/BottomFixedTransButton'

export default function ViewRequest({
  data,
  params,
  type,
  expired,
}: {
  data: RequestDetailProps
  params: { requestid: string }
  type?: string
  expired?: string
}) {
  const refundHandler = async () => {
    // const response = await refundCash(params.requestid, data.price)
    console.log('환불신청')
  }

  return (
    <>
      {/* 코디 옵션, 참고 이미지, 내 이미지는 추후에 DB 수정되면 추가 진행할 예정 */}
      <section className="relative grid gap-8 w-full min-h-screen px-5 pb-4 mt-8 mb-[50px]">
        <ViewRequestTitle title={data.title} />
        <ViewRequestContents contents={data.description} />
        <ViewReqSituation situation={data.situation} />
        <ViewReqPreferredBrands brands={data.brandIds} />
        <ViewReqCodiOptions categories={data.categoryIds} />
        <ViewReqCodiBudget budget={data.budget} />
        <ViewReqRefImages
          title="참고 이미지"
          refImgs={data.referenceImageUrls}
        />
        <ViewReqMyImages title="내 이미지" myImgs={data.myImageUrls} />
      </section>
      {type !== 'view' && <EditDeleteButton params={params} />}

      {expired === 'true' && (
        <BottomFixedTransButton title="환불신청" clickHandler={refundHandler} />
      )}
    </>
  )
}
