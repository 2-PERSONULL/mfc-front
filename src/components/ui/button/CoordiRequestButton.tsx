'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useConfirmStore from '@/stores/confirm'
import useClientSession from '@/hooks/useClientSession'

export default function CoordiRequestButton({
  partnerId,
}: {
  partnerId?: string
}) {
  const { uuid } = useClientSession()
  const path = usePathname()
  const router = useRouter()
  const { openConfirmModal } = useConfirmStore()

  // 로그인이 필요한 서비스
  const requestCoordiHandler = async () => {
    if (uuid) {
      router.push(`/user/coordinator/${partnerId}/reqcoordi`)
      return
    }

    const confirm = await openConfirmModal({
      content: `로그인이 필요한 서비스입니다.\n 로그인 페이지로 이동하시겠습니까?`,
    })

    if (confirm) {
      router.push(`/signin?callbackUrl=${path}`)
    }
  }

  return (
    <section className="fixed bottom-0 left-0 right-0 h-[100px] flex justify-center pt-5">
      <div
        role="presentation"
        onClick={requestCoordiHandler}
        className="w-[90%] bg-black h-[60px] rounded-full"
      >
        <div className="h-full flex justify-center items-center">
          <span className="text-[17px] text-white font-semibold ">
            코디 예약하기
          </span>
        </div>
      </div>
    </section>
  )
}
