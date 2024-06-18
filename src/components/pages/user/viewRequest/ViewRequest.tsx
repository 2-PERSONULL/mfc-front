import React from 'react'
import ViewRequestTitle from './ViewRequestTitle'
import ViewRequestContents from './ViewRequestContents'
import ViewReqSituation from './ViewReqSituation'
import ViewReqPreferredBrands from './ViewReqPreferredBrands'
import ViewReqCodiOptions from './ViewReqCodiOptions'
import ViewReqCodiBudget from './ViewReqCodiBudget'
import ThreeFuncButton from '@/components/ui/button/ThreeFuncButton'
import { RequestDetailProps } from '@/types/requestDetailType'
import ViewReqRefImages from './ViewReqRefImages'
import ViewReqMyImages from './ViewReqMyImages'

export default function ViewRequest({
  data,
  params,
}: {
  data: RequestDetailProps
  params: { requestid: string }
}) {
  return (
    <>
      {/* 코디 옵션, 참고 이미지, 내 이미지는 추후에 DB 수정되면 추가 진행할 예정 */}
      <div className="relative grid gap-6 w-full min-h-screen px-5 pb-4">
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
      </div>
      <ThreeFuncButton params={params} />
    </>
  )
}
