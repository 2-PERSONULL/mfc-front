'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import MoreButton from '@/components/ui/button/MoreButton'
import useConfirm from '@/stores/confirm'
import useToast from '@/stores/toast'
import { deletePartnerPost } from '@/actions/partner/PartnerPost'
import useModal from '@/stores/modal'
import StyleEditor from './StyleEditor'
import CircleProfile from '@/components/ui/avatar/CircleProfile'

export default function PartnerPostTop({
  nickname,
  profileImage,
  postId,
  imageUrl,
  tags,
}: {
  nickname: string
  profileImage: string
  postId: number
  imageUrl: string
  tags: string[]
}) {
  const role = usePathname().startsWith('/partner') ? 'partner' : 'user'
  const { showModal } = useModal()
  const { openConfirmModal } = useConfirm()
  const { showToast } = useToast()
  const router = useRouter()

  const editHandler = () => {
    showModal({
      title: '스타일 수정',
      content: (
        <StyleEditor postId={postId} imageUrl={imageUrl} tagList={tags} />
      ),
    })
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
        router.push('/partner/mypage')
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
    <div className="w-full h-[fit] border-t border-t-gray-200 flex items-center justify-between px-3 py-3">
      <div className="flex gap-3 h-full items-center">
        <CircleProfile imageUrl={profileImage} size={40} />
        <span className="font-semibold">{nickname}</span>
      </div>
      {role === 'partner' && <MoreButton actions={actions} />}
    </div>
  )
}
