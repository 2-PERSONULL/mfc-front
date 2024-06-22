'use server'

import { BaseResponseType } from '@/types/baseResponseType'
import { getFetchHeader } from '@/utils/getFetchHeader'

const sendCoordinationRequest = async (
  requestId: string,
  partnerId: string,
) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/proposal/${requestId}/${partnerId}`,
      {
        method: 'PUT',
        headers: {
          UUID: header.UUID,
          Authorization: header.Authorization,
          'Content-Type': 'application/json',
        },
      },
    )
    const data: BaseResponseType = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default sendCoordinationRequest
