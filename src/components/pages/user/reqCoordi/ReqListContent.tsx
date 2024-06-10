'use client'

import React, { useState } from 'react'
import CoordinationRequest from '../requestList/CoordinationRequest'
import Modal from '@/components/common/Modal'
import CreateNewRequest from '../requestList/CreateNewRequest'
import useConfirmStore from '@/stores/confirm'

export default function ReqListContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { openConfirmModal } = useConfirmStore()

  const handleCloseModal = async () => {
    const confirm = await openConfirmModal({
      content: `해당 페이지를 나가시겠습니까? \n 변경사항이 저장되지 않습니다.`,
    })

    if (confirm) setIsModalOpen(false)
  }

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="px-5 py-3 border-t border-gray-400">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 font-bold text-sm"
          >
            + 신규 요청서
          </button>
        </div>
        <CoordinationRequest
          title="요청서 1"
          situation="상황"
          description="이런저런 내용"
        />
      </div>
      {isModalOpen && (
        <Modal title="신규 요청서 작성" closeModal={handleCloseModal}>
          <CreateNewRequest setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  )
}
