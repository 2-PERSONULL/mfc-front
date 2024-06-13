import React from 'react'
import ViewRequestTitle from './ViewRequestTitle'
import ViewRequestContents from './ViewRequestContents'
import ViewReqSituation from './ViewReqSituation'
import ViewReqPreferredBrands from './ViewReqPreferredBrands'
import ViewReqCodiOptions from './ViewReqCodiOptions'
import ViewReqCodiBudget from './ViewReqCodiBudget'
import ViewReqImages from './ViewReqImages'
import ThreeFuncButton from '@/components/ui/button/ThreeFuncButton'
import ViewReqAddInfo from './ViewReqAddInfo'

export default function ViewRequest() {
  return (
    <div>
      <div className="relative grid gap-6 w-full min-h-screen px-5 pb-4">
        <ViewRequestTitle />
        <ViewRequestContents />
        <ViewReqSituation />
        <ViewReqPreferredBrands />
        <ViewReqCodiOptions />
        <ViewReqCodiBudget />
        <ViewReqImages title="참고 이미지" />
        <ViewReqImages title="내 이미지" />
        <ViewReqAddInfo />
      </div>
      <ThreeFuncButton />
    </div>
  )
}
