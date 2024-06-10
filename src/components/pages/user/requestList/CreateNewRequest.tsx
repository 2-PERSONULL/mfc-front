'use client'

import React, { useState } from 'react'
import useToast from '@/stores/toast'
import { RequestType } from '@/types/requestType'
import RequestTitle from '../createRequest/RequestTitle'
import RequestDetail from '../createRequest/RequestDetail'
import ReqCodiSituation from '../createRequest/ReqCodiSituation'
import ReqPreferredBrands from '../createRequest/ReqPreferredBrands'
import ReqCodiOptions from '../createRequest/ReqCodiOptions'
import ReqCodiBudget from '../createRequest/ReqCodiBudget'
import ReqAddImage from '../createRequest/ReqAddImage'
import ReqAddInfo from '../createRequest/ReqAddInfo'
import createNewRequest from '@/app/api/user/UserCreateRequest'

export default function CreateNewRequest() {
  const { showToast } = useToast()
  const [registerData, setRegisterData] = useState<RequestType>({
    title: '',
    description: '',
    situation: '',
    brand: [],
    category: [],
    budget: 0,
    referenceImages: [],
    myImages: [],
    otherRequirements: '',
  })
  console.log(registerData)

  const handleSubmit = async () => {
    if (registerData.description.length === 0) {
      showToast({
        content: '요청 내용을 입력해주세요.',
        type: 'warning',
      })
      return null
    }

    if (registerData.situation.length === 0) {
      showToast({
        content: '코디 상황을 선택해주세요.',
        type: 'warning',
      })
      return null
    }

    if (registerData.brand.length === 0) {
      showToast({
        content: '선호 브랜드를 입력해주세요.',
        type: 'warning',
      })
      return null
    }

    if (registerData.category.length === 0) {
      showToast({
        content: '최소한 옵션 1개는 선택되어야 합니다.',
        type: 'warning',
      })
      return null
    }

    if (registerData.budget === 0) {
      showToast({
        content: '예산을 입력해주세요.',
        type: 'warning',
      })
      return null
    }
    const data = createNewRequest({ registerData })
    console.log(data)
    return data
  }

  return (
    <form action={handleSubmit} className="grid gap-3 w-full px-5 pb-4">
      <RequestTitle
        setTitle={(value: string) =>
          setRegisterData((prev) => ({ ...prev, title: value }))
        }
      />
      <RequestDetail
        setDetail={(value: string) =>
          setRegisterData((prev) => ({ ...prev, description: value }))
        }
      />
      <ReqCodiSituation
        setSituation={(value: string) =>
          setRegisterData((prev) => ({ ...prev, situation: value }))
        }
      />
      <ReqPreferredBrands
        setBrands={(value: string[]) =>
          setRegisterData((prev) => ({ ...prev, brand: value }))
        }
      />
      <ReqCodiOptions
        setOptions={(value: string[]) =>
          setRegisterData((prev) => ({ ...prev, category: value }))
        }
      />
      <ReqCodiBudget
        setBudget={(value: number) =>
          setRegisterData((prev) => ({ ...prev, budget: value }))
        }
      />
      <ReqAddImage
        title="참고 스타일"
        id="refImgFile"
        setImages={(value: string[]) =>
          setRegisterData((prev) => ({ ...prev, referenceImages: value }))
        }
      />
      <ReqAddImage
        title="내 이미지"
        id="userImgFile"
        setImages={(value: string[]) =>
          setRegisterData((prev) => ({ ...prev, myImages: value }))
        }
      />
      <ReqAddInfo
        setAddInfo={(value: string) =>
          setRegisterData((prev) => ({ ...prev, otherRequirements: value }))
        }
      />
      <button type="submit" className="rounded-full w-full h-[50px] bg-black">
        <span className="text-white">저장</span>
      </button>
    </form>
  )
}
