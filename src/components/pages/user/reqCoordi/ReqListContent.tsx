'use client'

import React, { useState } from 'react'
import CoordinationRequest from '../requestList/CoordinationRequest'
import Modal from '@/components/common/Modal'
import CreateNewRequest from '../requestList/CreateNewRequest'

export default function ReqListContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
        <Modal
          title="신규 요청서 작성"
          closeModal={() => setIsModalOpen(false)}
        >
          <CreateNewRequest />
        </Modal>
      )}
    </>
  )
}
