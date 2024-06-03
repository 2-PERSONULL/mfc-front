import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const getPartnerCode = async () => {
  const session = await getServerSession(options)

  return session?.user.partnerCode as string
}

export default getPartnerCode
