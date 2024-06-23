import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const getPartnerIdHeader = async (partnerId?: string) => {
  const session = await getServerSession(options)

  // partnerId가 없고 session이 없을 때 null 반환
  if (partnerId == null && !session) return null

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
    'Content-Type': 'application/json',
  }

  return header
}

export { getPartnerIdHeader, getFetchHeader }
