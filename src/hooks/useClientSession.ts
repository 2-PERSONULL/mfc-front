'use client'

import { useSession } from 'next-auth/react'

const useClientSession = () => {
  const { data: session } = useSession()
  if (!session) return { uuid: '', accessToken: '' }

  const { uuid, accessToken } = session?.user as {
    uuid: string
    accessToken: string
  }

  return { uuid, accessToken }
}

export default useClientSession
