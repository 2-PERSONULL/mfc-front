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

  try {
    await fetch(
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

    // await response.json()

    revalidateTag('cash-balance')
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
