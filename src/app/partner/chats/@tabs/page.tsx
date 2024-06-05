import React from 'react'
import ChatBox from '@/components/pages/chats/box/ChatBox'

export default function PartnerChatListAll() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'

  // 요청서 목록 fetch
  const sampleData = [
    {
      id: 1,
      requestId: 13,
      userId: 'da',
      userImageUrl: basicImage,
      userNickName: '패션테러리스트',
      userGender: 1,
      userAge: 25,
      partnerId: 'dda',
      createdDate: '2024-05-05',
      status: 'WAITING',
      title: '소개팅룩 급해요ㅠㅠㅠㅠ',
      description: 'testDes1',
      deadline: '2024-06-23',
    },
    {
      id: 1,
      requestId: 13,
      userId: 'da',
      userImageUrl: basicImage,
      userNickName: '패션테러리스트',
      userGender: 1,
      userAge: 25,
      partnerId: 'dda',
      createdDate: '2024-05-05',
      status: 'COMPOLETE',
      title: 'testTitle12345',
      description: 'testDes1',
      deadline: '2024-06-23',
    },
    {
      id: 1,
      requestId: 13,
      userId: 'da',
      userImageUrl: basicImage,
      userNickName: 'power',
      userGender: 1,
      userAge: 25,
      partnerId: 'dda',
      createdDate: '2024-05-05',
      status: 'COMPOLETE',
      title: 'testTitle12345',
      description: 'testDes1',
      deadline: '2024-06-23',
    },
    {
      id: 1,
      requestId: 13,
      userId: 'da',
      userImageUrl: basicImage,
      userNickName: 'power',
      userGender: 1,
      userAge: 25,
      partnerId: 'dda',
      createdDate: '2024-05-05',
      status: 'WAITING',
      title: 'testTitle12345',
      description: 'testDes1',
      deadline: '2024-06-23',
    },
  ]

  return (
    <div className="flex flex-col gap-3 bg-gray-100">
      {sampleData.map((data) => (
        <ChatBox key={data.id} requestData={data} />
      ))}
    </div>
  )
}
