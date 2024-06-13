'use client'

import React, { useState } from 'react'
import CoordinationRequest from '../requestList/CoordinationRequest'
import Modal from '@/components/common/Modal'
import CreateModifyRequest from '../createRequest/CreateModifyRequest'
import useConfirmStore from '@/stores/confirm'
import ModalMargin from '@/components/common/ModalMargin'
import ViewRequest from '../viewRequest/ViewRequest'
// import TagBadge from '@/components/ui/TagBadge'

export default function ReqListContents() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [a, setA] = useState(false) // 임시로 선언한 state
  const { openConfirmModal } = useConfirmStore()

  const handleCloseModal = async () => {
    const confirm = await openConfirmModal({
      content: `해당 페이지를 나가시겠습니까? \n 변경사항이 저장되지 않습니다.`,
    })

    if (confirm) setA(false)
  }

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="px-5 py-3 border-t border-gray-400 flex justify-around">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 font-bold text-sm"
          >
            요청서 조회
          </button>
          <p className="text-red-500 font-bold">*UI 수정될 예정임*</p>
          <button
            type="button"
            onClick={() => setA(true)}
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
      {a && (
        <Modal title="신규 요청서 작성" closeModal={handleCloseModal}>
          <CreateModifyRequest setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
      {isModalOpen && (
        <ModalMargin closeModal={() => setIsModalOpen(false)}>
          <ViewRequest />
        </ModalMargin>
      )}
    </>
  )
}
