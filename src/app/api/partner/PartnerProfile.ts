'use server'

import { revalidateTag } from 'next/cache'
import { PartnerSnsType, PartnerCareerType } from '@/types/partnerProfileTypes'
import { getFetchHeader, getPartnerIdHeader } from '@/utils/getFetchHeader'

export async function getPartnerProfileBasic() {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members`,
    {
      headers: header,
      next: { tags: ['profile-image'] },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    return data.result
  }

  console.log('get partner basic error:', data)
  return null
}

export async function updatePartnerProfileImage(image: string) {
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/profileimage`,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({ profileImage: image }),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('profile iamge update error:', data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getSnsData(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns`,
      {
        headers: header,
        next: { tags: ['sns'] },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result.sns
    }
    console.log('error:', response)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updateSnsData(snsList: PartnerSnsType[]) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }
  const requestData = snsList.map(({ id, ...rest }) => rest)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns`,
    {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ sns: requestData }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('sns')
    console.log(data)
  } else {
    console.log(data.message)
  }
  return null
}

export async function getPartnerProfile(partnerCode?: string) {
  console.log(partnerCode)
  const header = await getPartnerIdHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners`,
    {
      headers: header,
      next: { tags: ['profile'] },
    },
  )

  const data = await response.json()
  console.log(data)
  if (data.isSuccess) {
    return data.result
  }
  console.log('get partner profile error:', data)
  return null
}

export async function updateIntroduction(description: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/description`,
    {
      method: 'PUT',
      headers: header,
      body: JSON.stringify({ description }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('profile')
  } else {
    console.log('description update error', data)
  }
}

export async function updateChatTime(startTime: number, endTime: number) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/chattime`,
    {
      method: 'PUT',
      headers: header,
      body: JSON.stringify({ startTime, endTime }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('profile')
  } else {
    console.log('chat update error', data)
  }
}

export async function updateLeadTime(averageDate: number) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/averageDate`,
    {
      method: 'PUT',
      headers: header,
      body: JSON.stringify({ averageDate }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('profile')
  } else {
    console.log('leadTime update error', data)
  }
}

export async function getCareer(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)
  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/career`,
    {
      headers: header,
      next: { tags: ['career'] },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    return data.result.careers
  }
  console.log('get career error', data)
  return null
}

export async function addPartnerCareer(partnerCareer: PartnerCareerType) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/career`,
    {
      method: 'POST',
      headers: header,
      body: JSON.stringify(partnerCareer),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('career')
  } else {
    console.log('career add error', data)
  }

  return null
}

export async function updatePartnerCareer(
  careerId: number,
  partnerCareer: PartnerCareerType,
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/career/${careerId}`,
    {
      method: 'PUT',
      headers: header,
      body: JSON.stringify(partnerCareer),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('career')
  } else {
    console.log('career update error', data)
  }
}

export async function deletePartnerCareer(careerId: number) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/career/${careerId}`,
    {
      method: 'DELETE',
      headers: header,
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('career')
  } else {
    console.log('career update error', data)
  }
}

export async function updateFavoriteStyle(styleId: number[]) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/favoriteStyle`,
    {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ favoriteStyle: styleId }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    console.log(data)
  } else {
    console.log('favorite style update error', data)
  }
}

export async function updatePartnerPrice(averagePrice: number) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/averagePrice`,
    {
      method: 'PUT',
      headers: header,
      body: JSON.stringify({ averagePrice }),
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('profile')
  } else {
    console.log('price update error', data)
  }
}
