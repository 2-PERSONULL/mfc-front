import React from 'react'
import SliderModal from '@/components/common/SliderModal'

export default function ChatRoomMenu({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}) {
  return (
    <SliderModal
      isModalOpen={isModalOpen}
      onChangeModal={() => setIsModalOpen(!isModalOpen)}
      backgroundClose
    >
      <ul className="mx-2 mb-2 bg-white rounded-lg text-center text-gray-600 font-semibold">
        <button className="w-full" type="button">
          <li className="w-full px-5 py-3 border-b border-b-gray-200">
            신고하기
          </li>
        </button>
        <button className="w-full" type="button">
          <li className="w-full px-5 py-3">채팅방 나가기</li>
        </button>
      </ul>
      <button className="w-full" type="button">
        <ul className="mx-2 mb-[4vh] bg-white rounded-lg text-center text-gray-600 font-semibold">
          <li className="w-full px-5 py-3">취소</li>
        </ul>
      </button>
    </SliderModal>
  )
}
