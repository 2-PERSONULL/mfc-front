'use client'

import React, { useState } from 'react'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import RequestTitle from '../createRequest/RequestTitle'
import RequestDetail from '../createRequest/RequestDetail'
import ReqCodiSituation from '../createRequest/ReqCodiSituation'
import ReqPreferredBrands from '../createRequest/ReqPreferredBrands'
import ReqCodiOptions from '../createRequest/ReqCodiOptions'
import ReqCodiBudget from '../createRequest/ReqCodiBudget'
import ReqAddInfo from '../createRequest/ReqAddInfo'
import ReqAddImage from '../createRequest/ReqAddImage'
import { RequestType } from '@/types/requestType'

export default function CreateNewRequest() {
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

  return (
    <form className="grid gap-3 w-full px-5 pb-4">
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
      <ReqPreferredBrands />
      <ReqCodiOptions />
      <ReqCodiBudget />
      <ReqAddImage title="참고 스타일" />
      <ReqAddImage title="내 이미지" />
      <ReqAddInfo />
      <StretchedRoundedButton
        comment="저장"
        clickHandler={() => console.log('asd')}
      />
    </form>
  )
}
