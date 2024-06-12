'use server'

import getFetchHeader from '@/utils/getFetchHeader'

// access-token 발급 api
export async function getAccessToken() {
  try {
    const response = await fetch(`https://api.iamport.kr/users/getToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imp_key: `${process.env.NEXT_PUBLIC_PORTONE_IMP_KEY}`,
        imp_secret: `${process.env.NEXT_PUBLIC_PORTONE_IMP_SECRET}`,
      }),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

// 은행 코드 조회 API
export async function getBankCodeList() {
  try {
    const response = await fetch(`https://apick.app/rest/bank_code`, {
      method: 'POST',
      headers: {
        CL_AUTH_KEY: `${process.env.NEXT_PUBLIC_APICK_KEY}`,
      },
    })

    const result = await response.json()
    return result.data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

// 예금주 조회 API
export async function getAccountRealName(account: string, bankCode: string) {
  const accessTokenResponse = await getAccessToken()
  if (accessTokenResponse.code !== 0) return accessTokenResponse
  const accessToken = accessTokenResponse.response.access_token

  try {
    const response = await fetch(
      `https://api.iamport.kr/vbanks/holder?bank_code=${bankCode}&bank_num=${account}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

// 정산 계좌 정보 저장 API
export async function saveAccountInfo(account: string, bankCode: string) {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/account`,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({
          bank: bankCode,
          account,
        }),
      },
    )

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
