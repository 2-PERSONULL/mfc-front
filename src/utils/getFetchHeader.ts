import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const getFetchHeader = async () => {
  const session = await getServerSession(options)

  const header = {
    Authorization: `Bearer ${session?.user.accessToken}`,
    UUID: `${session?.user.uuid}`,
    Role: 'PARTNER',
    'Content-Type': 'application/json',
  }
  return header
}

export default getFetchHeader
