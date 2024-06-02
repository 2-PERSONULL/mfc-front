import React from 'react'
import { getServerSession, Session } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import IntroPage from '@/components/pages/Intro/IntroPage'

export default async function page() {
  const session = await getServerSession(options)

  return <IntroPage session={session as Session} />
}
