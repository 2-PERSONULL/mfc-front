'use server'

import { BaseResponseType } from '@/types/baseResponseType'
import { UserProfile } from '@/types/userProfileType'
import { getFetchHeader } from '@/utils/getFetchHeader'

const getUserInfo = async (): Promise<UserProfile | undefined> => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/profile`,
      {
        method: 'GET',
        headers: {
          userId: header.UUID,
          Authorization: `${header.Authorization}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result as UserProfile
    }
  } catch (error) {
    console.error('Failed to get user info', error)
  }
}

const updateUserProfileImage = async (image: string) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/profileimage`,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({ profileImage: image }),
      },
    )
    const data = await response.json()
    if (!data.isSuccess) {
      console.error('Failed to update profile image', data)
    }
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

const getPreferenceStyle = async () => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/favoritstyle`,
      {
        method: 'GET',
        headers: {
          getUUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get preference style', error)
  }
}

const updatePreferenceStyle = async (value: number[]) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/favoritestyle`,
      {
        method: 'POST',
        headers: {
          UUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
        body: JSON.stringify({ favoriteStyles: value }),
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get preference style', error)
  }
}

const getBodyInfo = async () => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/bodyType`,
      {
        method: 'GET',
        headers: {
          userId: header.UUID,
          Authorization: `${header.Authorization}`,
        },
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get body info', error)
  }
}

const updateBodyInfo = async ({
  height,
  weight,
  bodyType,
}: {
  height: number
  weight: number
  bodyType: string
}) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/bodytype`,
      {
        method: 'GET',
        headers: {
          UUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
        body: JSON.stringify({
          height,
          weight,
          bodyType,
        }),
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get body info', error)
  }
}

const getClothesSize = async () => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/size`,
      {
        method: 'GET',
        headers: {
          userId: header.UUID,
          Authorization: `${header.Authorization}`,
        },
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get clothes size', error)
  }
}

const updateClothesSize = async ({
  top,
  bottom,
  shoes,
}: {
  top: string
  bottom: string
  shoes: number
}) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/size`,
      {
        method: 'PUT',
        headers: {
          UUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
        body: JSON.stringify({
          topSize: top,
          bottomSize: bottom,
          shoeSize: shoes,
        }),
      },
    )
    const data: BaseResponseType = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get clothes size', error)
  }
}

export {
  getUserInfo,
  updateUserProfileImage,
  getPreferenceStyle,
  updatePreferenceStyle,
  getBodyInfo,
  updateBodyInfo,
  getClothesSize,
  updateClothesSize,
}
