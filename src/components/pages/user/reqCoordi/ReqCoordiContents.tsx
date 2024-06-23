'use client'

import React, { useEffect, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { BaseResponseType } from '@/types/baseResponseType'
import CommonSelectBox from '@/components/ui/select/CommonSelectBox'
import { RequestListType } from './ReqListContents'
import BottomFixedTransButton from '@/components/ui/button/BottomFixedTransButton'
import SpecifyDate from './SpecifyDate'
import sendCoordinationRequest from '@/actions/user/UserCoordinationRequest'
import useToast from '@/stores/toast'
import RequestCard from './RequestCard'
import { getRequestDetail } from '@/actions/user/UserRequest'
import { RequestDetailProps } from '@/types/requestDetailType'

export default function ReqCoordiContents({
  requests,
}: {
  requests: BaseResponseType | null
}) {
  const currentUrl = usePathname()
  const router = useRouter()
  const { showToast } = useToast()
  const { partnerId } = useParams<{ partnerId: string }>()
  const [deadline, setDeadline] = useState('')
  const [request, setRequest] = useState('')
  const [reqDetail, setReqDetail] = useState<RequestDetailProps | null>(null)
  const [loading, setLoading] = useState(false)
  console.log(currentUrl)

  useEffect(() => {
    const fetchReqDetail = async () => {
      if (request) {
        setLoading(true)
        const result: RequestDetailProps = (await getRequestDetail(
          request,
        )) as unknown as RequestDetailProps
        setReqDetail(result)
        setLoading(false)
      }
    }
    fetchReqDetail()
  }, [request])

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
      request,
      partnerId,
      deadline,
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
      <form className="w-full h-full">
        <section className="w-full bg-white py-6 grid gap-2">
          <div className="flex justify-between items-end">
            <p className="text-black">코디 요청서</p>
            <Link
              href={`/user/mypage/reqlist/newreq?callbackUrl=${currentUrl}`}
            >
              <p className="text-sm">+ 신규 요청서 작성</p>
            </Link>
          </div>
          <CommonSelectBox
            optionList={
              Array.isArray(requests?.result)
                ? (requests.result as RequestListType[]).map(
                    (value) => value.title,
                  )
                : []
            }
            selectedOption="요청서를 선택하세요."
            setSelectedOption={handleSelectOption}
          />
          {loading ? (
            // 로딩 텍스트 수정 필요
            <p>Loading...</p>
          ) : (
            reqDetail !== null && <RequestCard reqDetail={reqDetail} />
          )}
        </section>
        <SpecifyDate deadline={setDeadline} />
        <section className="fixed bottom-5 w-[90%]">
          <BottomFixedTransButton
            title="코디 요청하기"
            clickHandler={handleSendRequest}
          />
        </section>
      </form>
    </section>
  )
}
