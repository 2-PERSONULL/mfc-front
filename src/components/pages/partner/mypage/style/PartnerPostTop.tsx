'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import MoreButton from '@/components/ui/button/MoreButton'
import useConfirm from '@/stores/confirm'
import useToast from '@/stores/toast'
import { deletePartnerPost } from '@/app/api/partner/PartnerPost'
import useModal from '@/stores/modal'
import StyleEditor from './StyleEditor'

export default function PartnerPostTop({
  postId,
  imageUrl,
  tags,
}: {
  postId: number
  imageUrl: string
  tags: string[]
}) {
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
    // router.push(`/partner/mypage/styles/${postId}/edit`)
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
    <div className="w-full h-[50px] border-t border-t-gray-200 flex items-center justify-between px-3">
      <h1>파트너 이미지 / 닉네임</h1>
      <MoreButton actions={actions} />
    </div>
  )
}
