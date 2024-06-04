import React from 'react'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import Steps from '@/components/ui/step/Step'
import { formatDday } from '@/utils/formatTime'

export default function ChatBox() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'

  const sampleData = {
    id: 1,
    deadLine: '2024-06-28',
    state: '거래대기',
    requestId: '1',
    title: '패션 테러리스트를 구해주세요 너무 급해요ㅠ',
    userImageUrl: basicImage,
    userNickName: '패션테러리스트',
    userGender: '남',
    userAge: 27,
    requestDate: '2024-06-18',
  }

  return (
    <div className="border-2 rounded-[7px] p-3 relative">
      <section className="flex items-center">
        <CircleProfile size={50} imageUrl={sampleData.userImageUrl} />
        <h1 className="ml-2 font-semibold">{sampleData.userNickName}</h1>
        <div className="ml-2 text-gray-500 flex gap-1">
          <span>{sampleData.userGender}</span>
          <span>|</span>
          <span>{sampleData.userAge}</span>
        </div>
        <h1 className="font-bold text-[20px] absolute right-3">
          {formatDday(sampleData.deadLine)}
        </h1>
      </section>

      <Steps />
      <p>{sampleData.title}</p>
      <section>button</section>
    </div>
  )
}
