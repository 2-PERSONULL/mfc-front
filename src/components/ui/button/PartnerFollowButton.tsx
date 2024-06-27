'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { updateFollow } from '@/actions/user/Follow'
import useConfirmStore from '@/stores/confirm'
import useClientSession from '@/hooks/useClientSession'
import useRole from '@/hooks/useRole'

export default function PartnerFollowButton({
  partnerId,
  isFollow,
}: {
  partnerId: string
  isFollow: boolean
}) {
  const role = useRole()
  const router = useRouter()
  const path = usePathname()
  const { uuid } = useClientSession()
  const { openConfirmModal } = useConfirmStore()

  // 로그인이 필요한 서비스
  const followHandler = async () => {
    if (!uuid) {
      const confirm = await openConfirmModal({
        content: `로그인이 필요한 서비스입니다.\n 로그인 페이지로 이동하시겠습니까?`,
      })

      if (confirm) {
        router.push(`/signin?callbackUrl=${path}`)
      }
    }
    // 팔로우중인 경우
    if (isFollow) {
      await updateFollow(partnerId, 'DELETE')
    }
    // 팔로우중이 아닌 경우
    else {
      await updateFollow(partnerId, 'POST')
    }
  }

  if (role === 'PARTNER') return null

  return (
    <button
      type="button"
      onClick={followHandler}
      className={`rounded-full ${isFollow ? 'bg-gray-200 text-black' : 'bg-black text-white'} font-semibold w-[120px] h-[42px]`}
    >
      {isFollow ? 'Following' : 'Follow'}
    </button>
  )
}
