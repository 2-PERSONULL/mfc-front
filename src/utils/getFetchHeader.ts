import { auth } from '@/auth'

const getFetchHeader = async () => {
  const session = await auth()
  const header = {
    Authorization: `Bearer ${session?.user.accessToken}`,
    UUID: `${session?.user.uuid}`,
    Role: 'PARTNER',
    'Content-Type': 'application/json',
  }
  return header
}

export default getFetchHeader
