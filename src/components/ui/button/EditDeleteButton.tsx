'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { deleteRequest } from '@/actions/user/UserRequest'
import useToast from '@/stores/toast'
import useConfirmStore from '@/stores/confirm'

export default function EditDeleteButton({
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
    <section className="sticky w-full h-12 bottom-0 flex flex-row items-center justify-around text-white ">
      <button
        type="button"
        onClick={handleEdit}
        className="w-full h-full text-black bg-gray-300 border border-gray-300"
      >
        수정
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="w-full h-full bg-black text-white border border-black"
      >
        삭제
      </button>
    </section>
  )
}
