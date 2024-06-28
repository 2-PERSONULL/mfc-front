import { SignUpType } from '@/types/signupTypes'

const postSignUp = async (data: SignUpType) => {
  try {
    const signUpResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    const signUpResult = await signUpResponse.json()
    if (signUpResult.isSuccess) {
      return signUpResult
    }
    console.log(signUpResult)
    return null
  } catch (error) {
    return error
  }
}

const emailDoubleCheck = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/email/${email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const phoneNumSubmit = async (phoneNum: string, value: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/sms/send`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNum, code: value }),
      },
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const getVerifyAuthCode = async (phoneNum: string, value: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/sms/verify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNum, code: value }),
      },
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const nicknameDoubleCheck = async (nickname: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/nickname/${nickname}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
export {
  postSignUp,
  emailDoubleCheck,
  phoneNumSubmit,
  getVerifyAuthCode,
  nicknameDoubleCheck,
}
