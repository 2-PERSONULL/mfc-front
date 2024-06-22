'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { BaseResponseType } from '@/types/baseResponseType'
import CommonSelectBox from '@/components/ui/select/CommonSelectBox'
import { RequestListType } from './ReqListContents'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import SpecifyDate from './SpecifyDate'
import sendCoordinationRequest from '@/actions/user/UserCoordinationRequest'
import useToast from '@/stores/toast'

export default function ReqCoordiContents({
  requests,
}: {
  requests: BaseResponseType | null
}) {
  const router = useRouter()
  const { showToast } = useToast()
  const [deadline, setDeadline] = useState('')
  const [request, setRequest] = useState('')
  const { partnerId } = useParams<{ partnerId: string }>()

  console.log(deadline, request)

  const titleToRequestId = Array.isArray(requests?.result)
    ? requests.result.reduce((acc, cur) => {
        acc[cur.title] = cur.requestId
        return acc
      }, {})
    : {}

  const handleSelectOption = (selectedTitle: string) => {
    const requestId = titleToRequestId[selectedTitle]
    setRequest(requestId)
  }

  const handleSendRequest = async () => {
    const result: BaseResponseType = (await sendCoordinationRequest(
      partnerId,
      request,
    )) as BaseResponseType
    if (result.isSuccess) {
      router.replace('/explore')
      showToast({
        content: '요청이 완료되었습니다.',
        type: 'success',
      })
    }
  }

  return (
    <section>
      <form className="w-full">
        <section className="w-full bg-white py-6 grid gap-2">
          <p className="text-black">코디 요청서</p>
          <CommonSelectBox
            optionList={
              (requests?.result as RequestListType[]).map(
                (value) => value.title,
              ) as string[]
            }
            selectedOption="요청서를 선택하세요."
            setSelectedOption={handleSelectOption}
          />
          <p className="text-sm">+ 신규 요청서 작성</p>
        </section>
        <SpecifyDate deadline={setDeadline} />
        <div className="bottom-5 w-full left-0 right-0">
          <StretchedRoundedButton
            comment="코디 요청하기"
            clickHandler={handleSendRequest}
          />
        </div>
      </form>
    </section>
  )
}
