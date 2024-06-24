'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import MoreButton from '@/components/ui/button/MoreButton'
import useConfirm from '@/stores/confirm'
import useToast from '@/stores/toast'
import { deletePartnerPost } from '@/actions/partner/PartnerPost'
import CircleProfile from '@/components/ui/avatar/CircleProfile'

export default function PartnerPostTop({
  nickname,
  profileImage,
  postId,
}: {
  nickname: string
  profileImage: string
  postId: number
}) {
  const role = usePathname().startsWith('/partner') ? 'partner' : 'user'
  const { openConfirmModal } = useConfirm()
  const { showToast } = useToast()
  const router = useRouter()

  const editHandler = () => {
    router.push(`/partner/posts/${postId}?type=edit`)
  }

  const deleteHandler = async () => {
    const res = await openConfirmModal({
      content: '삭제하시겠습니까?',
      yesButtonText: '삭제',
      noButtonText: '취소',
    })

    if (res) {
      const result = await deletePartnerPost(postId)
      if (result.isSuccess) {
        showToast({ content: '삭제되었습니다.', type: 'success' })
        router.replace('/partner/mypage')
      }
    }
  }

  const actions = [
    {
      text: '수정',
      clickHandler: editHandler,
    },
    {
      text: '삭제',
      clickHandler: deleteHandler,
    },
  ]

  return (
    <section className="w-full h-[fit] border-t border-t-gray-200 flex items-center justify-between px-6 py-3">
      <div className="flex gap-3 h-full items-center">
        <CircleProfile imageUrl={profileImage} size={40} />
        <span className="font-semibold">{nickname}</span>
      </div>
      {role === 'partner' && <MoreButton actions={actions} />}
    </section>
  )
}
