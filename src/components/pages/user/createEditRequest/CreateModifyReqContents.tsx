import React from 'react'
import RequestTitle from './RequestTitle'
import RequestContents from './RequestContents'
import ReqCodiSituation from './ReqCodiSituation'
import ReqPreferredBrands from './ReqPreferredBrands'
import ReqCodiOptions from './ReqCodiOptions'
import ReqCodiBudget from './ReqCodiBudget'
import ReqAddImage from './ReqAddImage'
import ReqAddInfo from './ReqAddInfo'

export default function CreateModifyReqContents() {
  return (
    <>
      <RequestTitle />
      <RequestContents />
      <ReqCodiSituation />
      <ReqPreferredBrands />
      <ReqCodiOptions />
      <ReqCodiBudget />
      <ReqAddImage title="참고 스타일" id="refImgFile" />
      <ReqAddImage title="내 이미지" id="userImgFile" />
      <ReqAddInfo />
      <button
        type="submit"
        className="sticky bottom-5 rounded-full w-full h-[50px] bg-black"
      >
        <span className="text-white">저장</span>
      </button>
    </>
  )
}
