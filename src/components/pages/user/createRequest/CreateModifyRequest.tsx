'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import RequestTitle from './RequestTitle'
import RequestDetail from './RequestContents'
import ReqCodiSituation from './ReqCodiSituation'
import ReqPreferredBrands from './ReqPreferredBrands'
import ReqCodiOptions from './ReqCodiOptions'
import ReqCodiBudget from './ReqCodiBudget'
import ReqAddImage from './ReqAddImage'
import ReqAddInfo from './ReqAddInfo'
import createNewRequest from '@/app/api/user/UserCreateRequest'

export default function CreateModifyRequest() {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    'use server'

    const parseBudget = (budget: string) => {
      return Number(budget.replace(/,/g, ''))
    }

    const registerData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      situation: formData.get('situation') as string,
      brand: formData.getAll('brand') as string[],
      category: formData.getAll('category') as string[],
      budget: parseBudget(formData.get('budget') as string),
      referenceImages: formData.getAll('referenceImages') as string[],
      myImages: formData.getAll('myImages') as string[],
      otherRequirements: formData.get('otherRequirements') as string,
    }

    const data = await createNewRequest({ registerData })
    console.log(data)

    if (data) {
      router.push('/user/mypage/reqlist')
    }
  }

  return (
    <section>
      <form action={handleSubmit} className="grid gap-7 w-full px-5 pb-4">
        <RequestTitle />
        <RequestDetail />
        <ReqCodiSituation />
        <ReqPreferredBrands />
        <ReqCodiOptions />
        <ReqCodiBudget />
        <ReqAddImage title="참고 스타일" id="refImgFile" />
        <ReqAddImage title="내 이미지" id="userImgFile" />
        <ReqAddInfo />
        <button type="submit" className="rounded-full w-full h-[50px] bg-black">
          <span className="text-white">저장</span>
        </button>
      </form>
    </section>
  )
}
