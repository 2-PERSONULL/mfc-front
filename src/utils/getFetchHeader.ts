import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const getPartnerIdHeader = async (partnerId?: string | null) => {
  const session = await getServerSession(options)
  if (!session) return null

  const header = {
    partnerId: `${partnerId || session?.user.uuid}`,
    'Content-Type': 'application/json',
  }

  return header
}

const getFetchHeader = async () => {
  const session = await getServerSession(options)

  if (!session) return null

  const header = {
    Authorization: `${session?.user.accessToken}`,
    UUID: `${session?.user.uuid}`,
    // local storage에 저장된 role을 가져와서 사용
    Role: 'PARTNER',
    'Content-Type': 'application/json',
  }

  return header
}

export { getPartnerIdHeader, getFetchHeader }
