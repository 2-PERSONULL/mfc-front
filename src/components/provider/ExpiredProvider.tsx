'use client'

import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function ExpiredProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()

  useEffect(() => {
    /* Refresh Token 만료되었을 때 */
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/user', redirect: true })
    }
  }, [session])

  return children
}
