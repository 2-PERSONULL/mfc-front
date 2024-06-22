'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

interface ConfirmProps {
  userId: string
  options: 0
  totalPrice: number
  dueDate: string
  requestId: string
}

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
    console.log(data.result)
  }
  console.log('add confirm error', data)
}

// 요청서에 대한 수락, 거절 처리
// export async function addConfirm(historyId: string, status: string) {
//   const header = await getFetchHeader()

//   if (!header) {
//     console.log('session not found')
//     return null
//   }

//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/response/${historyId}?status=${status}`,
//     {
//       method: 'PUT',
//       headers: {
//         uuid: header.UUID,
//         Authorization: header.Authorization,
//         'Content-Type': 'application/json',
//       },
//     },
//   )

//   const data = await response.json()
//   console.log(data)
//   revalidateTag('partner-chatList')
//   revalidateTag('user-chatList')
//   return data
// }
