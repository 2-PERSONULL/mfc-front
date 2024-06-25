import React from 'react'
import { formatDday } from '@/utils/formatTime'

export default function UserChatBoxStatus({
  status,
  deadline,
}: {
  status: string
  deadline: string
}) {
  const showDateList = ['RESPONSEREJECT', 'COORDINATE_RECEIVED', 'CLOSED']

  const getStatusMessage = () => {
    switch (status) {
      case 'RESPONSEREJECT':
        return '거절된요청'
      case 'COORDINATE_RECEIVED':
        return '코디확정을 진행해주세요:)'
      case 'CLOSED':
        return '확정완료'
      default:
        return ''
    }
  }

  const isExpired = () => {
    // status CONFIRMED 인데 deadline 이 지났을 때
    if (status === 'CONFIRMED' && new Date(deadline) < new Date()) return true
  }

  return (
    <>
      <p className="text-[14px] text-gray-600 ml-2 absolute right-4 bg-gray-100 rounded-xl px-3 py-2">
        {getStatusMessage()}
      </p>

      {!showDateList.includes(status) && (
        <p className="text-gray-700 font-bold text-[25px] absolute right-4">
          {formatDday(deadline)}
        </p>
      )}
      {isExpired() && (
        <p className="text-[14px] text-gray-600 ml-2 absolute right-4 bg-red-100 rounded-xl px-3 py-2">
          환불신청
        </p>
      )}
    </>
  )
}
