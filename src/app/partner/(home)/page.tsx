'use client'

import React from 'react'
import useFcmToken from '@/hooks/useFcmToken'

export default function PartnerHome() {
  const { fcmToken } = useFcmToken()
  return <div className="h-screen">{fcmToken}파트너 홈입니다</div>
}
