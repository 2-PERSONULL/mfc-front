'use client'

import React, { useState } from 'react'
import type { ZodIssue } from 'zod'
import RequestContents from '@/components/pages/user/createEditRequest/RequestContents'
import ReqAddImage from '@/components/pages/user/createEditRequest/ReqAddImage'
import ReqCodiBudget from '@/components/pages/user/createEditRequest/ReqCodiBudget'
import ReqCodiOptions from '@/components/pages/user/createEditRequest/ReqCodiOptions'
import ReqCodiSituation from '@/components/pages/user/createEditRequest/ReqCodiSituation'
import ReqPreferredBrands from '@/components/pages/user/createEditRequest/ReqPreferredBrands'
import RequestTitle from './RequestTitle'
import useToast from '@/stores/toast'
import { RequestDetailProps } from '@/types/requestDetailType'

export default function EditRequestForm({
  action,
  contents,
}: {
  action: (formData: FormData) => Promise<{ error: ZodIssue[] } | undefined>
  contents: RequestDetailProps
}) {
  const { showToast } = useToast()
  const [errors, setErrors] = useState<
    { [key: string]: ZodIssue[] } | undefined
  >(undefined)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await action(new FormData(event.currentTarget))
    if (result?.error) {
      const newErrors: { [key: string]: ZodIssue[] } = {}
      result.error.forEach((error) => {
        const key = error.path[0]
        if (!newErrors[key]) {
          newErrors[key] = []
        }
        newErrors[key].push({
          ...error,
          message: error.message,
        })
      })
      setErrors(newErrors)
    }
    if (!result?.error) {
      showToast({
        content: '요청서가 성공적으로 수정되었습니다.',
        type: 'success',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 w-full px-5 pb-4">
      <RequestTitle title={contents.title} />
      {errors?.title && (
        <p className="text-xs text-red-500 font-bold -mt-6">
          {errors?.title[0].message}
        </p>
      )}
      <RequestContents description={contents.description} />
      {errors?.description && (
        <p className="text-xs text-red-500 font-bold -mt-6">
          {errors?.description[0].message}
        </p>
      )}
      <ReqCodiSituation situation={contents.situation} />
      {errors?.situation && (
        <p className="text-xs text-red-500 font-bold -mt-6">
          {errors?.situation[0].message}
        </p>
      )}
      {/* 브랜드, 코디 옵션, 참고 이미지, 내 이미지는 추후에 수정 작업 진행 */}
      <ReqPreferredBrands />
      {/* 브랜드, 코디 옵션, 참고 이미지, 내 이미지는 추후에 수정 작업 진행 */}
      <ReqCodiOptions />
      {errors?.category && (
        <p className="text-xs text-red-500 font-bold -mt-6">
          {errors?.category[0].message}
        </p>
      )}
      <ReqCodiBudget budget={contents.budget} />
      {errors?.budget && (
        <p className="text-xs text-red-500 font-bold -mt-6">
          {errors?.budget[0].message}
        </p>
      )}
      {/* 브랜드, 코디 옵션, 참고 이미지, 내 이미지는 추후에 수정 작업 진행 */}
      <ReqAddImage title="참고 스타일" id="refImgFile" />
      {/* 브랜드, 코디 옵션, 참고 이미지, 내 이미지는 추후에 수정 작업 진행 */}
      <ReqAddImage title="내 이미지" id="userImgFile" />
      <button
        type="submit"
        className="sticky bottom-5 rounded-full w-full h-[50px] bg-black"
      >
        <span className="text-white">저장</span>
      </button>
    </form>
  )
}
