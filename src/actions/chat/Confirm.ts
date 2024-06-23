'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'
import { actionCoordinate } from '@/actions/partner/PartnerRequest'

interface Partner {
  partnerId: string
  status: string
  deadline: string
  confirmedPrice: string
}

interface ConfirmProps {
  userId: string
  options: 0
  totalPrice: number
  dueDate: string
  requestId: string
}

// 확정 제안서 작성
export default async function addConfirm(confirmProps: ConfirmProps) {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }
  const requestBody = { ...confirmProps, partnerId: header.UUID }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/trade`,
    {
      method: 'POST',
      headers: {
        'Partner-UUID': header.UUID,
        Authorization: header.Authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    },
  )
  const data = await response.json()

  if (data.isSuccess) {
    // WAITING 상태로 업데이트
    const res = await actionCoordinate(confirmProps.requestId, 'WAITING')

    if (res.isSuccess) {
      revalidateTag('partner-requestDetail')
      return res
    }
    return data
  }
  console.log('add confirm error', data)
  return data
}

// 요청서 상태 가져오기
export async function getRequestStatus(requestId: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${requestId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      // data.result 에서 partner에서 partnerId가 header.UUID와 같은것만 return
      const myValue: Partner[] = data.result.partner.filter(
        (item: Partner) => item.partnerId === header.UUID,
      ) as Partner[]

      ;[data.result.partner] = myValue

      return data.result.partner.status
    }
    console.log(data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
