'use client'

import React, { useState } from 'react'
import CoordinationRequest from '../requestList/CoordinationRequest'
import Modal from '@/components/common/Modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

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
          tag="상황"
          content="이런저런 내용"
        />
        <CoordinationRequest
          title="요청서 1"
          tag="상황"
          content="이런저런 내용"
        />
        <CoordinationRequest
          title="요청서 1"
          tag="상황"
          content="이런저런 내용"
        />
        <CoordinationRequest
          title="요청서 1"
          tag="상황"
          content="이런저런 내용"
        />
        <CoordinationRequest
          title="요청서 1"
          tag="상황"
          content="이런저런 내용"
        />
      </div>
      {isModalOpen && (
        <Modal
          title="신규 요청서 작성"
          closeModal={() => setIsModalOpen(false)}
        >
          <div className="grid gap-3 w-full px-5 pb-4">
            <div>
              <p className="text-xs pb-1">신규 요청서 작성 폼</p>
              <input
                type="text"
                className="border border-black w-full py-1 rounded-lg"
              />
            </div>
            <div>
              <p className="text-xs pb-1">요청 내용 *</p>
              <textarea className="border border-black w-full py-1 rounded-lg" />
            </div>
            <div>
              <p className="text-xs pb-1">코디 상황 *</p>
              <input
                type="text"
                className="border border-black w-full py-1 rounded-lg"
              />
            </div>
            <div>
              <p className="text-xs pb-1">선호 브랜드(0/3) *</p>
              <input
                type="text"
                className="border border-black w-full py-1 rounded-lg"
              />
            </div>
            <div>
              <p className="text-xs pb-1">코디 옵션 *</p>
              <input
                type="text"
                className="border border-black w-full py-1 rounded-lg"
              />
            </div>
            <div>
              <p className="text-xs pb-1">코디 예산 *</p>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  className="border border-black w-[30%] py-1 rounded-lg"
                />
                <p>₩</p>
              </div>
            </div>
            <div>
              <p className="text-xs pb-1">참고 스타일</p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="bg-gray-200 w-[30%] py-10 rounded-lg"
                >
                  <p>+</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-gray-400 w-[30%] h-[20%] py-1 rounded-lg"
                    style={{ display: 'none' }}
                  />
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs pb-1">내 이미지</p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="bg-gray-200 w-[30%] py-10 rounded-lg"
                >
                  <p>+</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-gray-400 w-[30%] h-[20%] py-1 rounded-lg"
                    style={{ display: 'none' }}
                  />
                </button>
              </div>
            </div>
            <div>
              {/* <p className="text-xs pb-1">요청 내용 *</p> */}
              <textarea className="border border-black w-full py-1 rounded-lg" />
            </div>
            <StretchedRoundedButton
              comment="저장"
              clickHandler={() => console.log('asd')}
            />
          </div>
        </Modal>
      )}
    </>
  )
}
