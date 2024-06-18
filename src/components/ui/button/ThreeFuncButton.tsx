'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { deleteRequest } from '@/actions/user/UserRequest'
import useToast from '@/stores/toast'
import useConfirmStore from '@/stores/confirm'

export default function ThreeFuncButton({
  params,
}: {
  params: { requestid: string }
}) {
  const router = useRouter()
  const { showToast } = useToast()
  const { openConfirmModal } = useConfirmStore()

  const handleEdit = async () => {
    const confirm = await openConfirmModal({
      content: `요청서를 수정하시겠습니까?`,
    })
    if (confirm) {
      router.push(`/user/mypage/reqlist/${params.requestid}/editrequest`)
    }
  }

  const handleDelete = async () => {
    await deleteRequest(params.requestid)
    const confirm = await openConfirmModal({
      content: `요청서를 삭제하시겠습니까?`,
    })
    if (confirm) {
      router.replace('/user/mypage/reqlist')
      showToast({
        content: '요청서가 성공적으로 삭제되었습니다.',
        type: 'success',
      })
    }
  }
  return (
    <div className="sticky w-full h-12 bottom-0 flex flex-row items-center justify-around text-white ">
      <button
        type="button"
        onClick={handleEdit}
        className="w-full h-full bg-gray-400 border border-gray-400"
      >
        수정
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="w-full h-full bg-white text-black border border-white"
      >
        삭제
      </button>
      <button
        type="button"
        className="w-full h-full bg-black border border-black"
      >
        선택
      </button>
    </div>
  )
}
