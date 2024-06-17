'use server'

import { BaseResponseType } from '@/types/baseResponseType'
import { RequestDetailProps } from '@/types/requestDetailType'
import { RequestType } from '@/types/requestType'
import { getFetchHeader } from '@/utils/getFetchHeader'

const createNewRequest = async (registerData: RequestType) => {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests`,
    {
      method: 'POST',
      headers: {
        uuid: header.UUID,
        Authorization: `${header.Authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    },
  )
  const data: BaseResponseType = await response.json()
  if (data.isSuccess) {
    return
  }
  console.log('Failed to save new request', data)
}

const editRequest = async (requestId: string, registerData: RequestType) => {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${requestId}`,
    {
      method: 'PUT',
      headers: {
        uuid: header.UUID,
        Authorization: `${header.Authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    },
  )
  const data: BaseResponseType = await response.json()
  if (data.isSuccess) {
    return
  }
  console.log('Failed to save new request', data)
}

const getRequestList = async (): Promise<BaseResponseType | null> => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/my-requests?page=0&pageSize=30&sortType=LATEST`,
      {
        method: 'GET',
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
    console.error(error)
    return null
  }
}

const getRequestDetail = async (
  requestId: string,
): Promise<RequestDetailProps> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${requestId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data: BaseResponseType = await response.json()
  return data.result as unknown as RequestDetailProps
}

const deleteRequest = async (requestId: string): Promise<void> => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${requestId}`,
    {
      method: 'DELETE',
      headers: {
        UUID: header.UUID,
        Authorization: header.Authorization,
        'Content-Type': 'application/json',
      },
    },
  )
}

export {
  createNewRequest,
  editRequest,
  getRequestList,
  getRequestDetail,
  deleteRequest,
}
