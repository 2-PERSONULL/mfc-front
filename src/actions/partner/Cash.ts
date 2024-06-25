'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

export default async function settlement(
  amount: number,
  accountNumber: string,
  accountName: string,
) {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  console.log({
    partnerId: header.UUID,
    amount,
    feeAmount: amount * 0.1,
    accountNumber,
    accountName,
    status: 'PENDING',
    settlementDate: new Date().toISOString(),
  })

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/settlement-service/settlement/settlement-requests`,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          partnerId: header.UUID,
          amount,
          feeAmount: amount * 0.1,
          accountNumber,
          accountName,
          status: 'PENDING',
          settlementDate: new Date().toISOString(),
        }),
      },
    )

    const result = await response.json()
    revalidateTag('cash-balance')
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
