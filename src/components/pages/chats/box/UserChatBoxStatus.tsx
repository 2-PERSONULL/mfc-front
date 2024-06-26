import React from 'react'
import { formatDday } from '@/utils/formatTime'

export default function UserChatBoxStatus({
  status,
  deadline,
  isExpired,
}: {
  status: string
  deadline: string
  isExpired: boolean
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
      {isExpired && (
        <p className="text-[14px] text-gray-600 ml-2 absolute right-4 bg-red-100 rounded-xl px-3 py-2">
          기간만료
        </p>
      )}
    </>
  )
}
