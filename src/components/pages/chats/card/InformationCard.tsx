import React from 'react'
import Link from 'next/link'
import { CardMessageType } from '@/types/chatTypes'
import useRole from '@/hooks/useRole'

// 정보 전달 카드
export default function InformationCard({ card }: { card: CardMessageType }) {
  const role = useRole()
  const isTarget = card.target === role

  return (
    <div className="border-2 border-black w-[55vw] p-3 rounded-[14px] flex flex-col gap-3">
      <div className="text-[14px] text-gray-600 rounded-lg px-2 py-1 bg-gray-200 w-fit h-fit">
        마패코알리미
      </div>
      <h1 className="font-bold text-[17px]">{card.title}</h1>

      <p className="text-gray-500 text-[14px]">{card.description}</p>

      {card.details.map((detail, index) => (
        <div key={index} className="text-[15px]">
          <div className="font-bold">{detail.subtitle}</div>
          <span>{detail.value}</span>
        </div>
      ))}

      {isTarget && (
        <>
          {card.actions.map((action, index) => (
            <Link
              key={index}
              href={action.url}
              className="bg-black text-white text-center rounded-md py-2"
            >
              {action.label}
            </Link>
          ))}
        </>
      )}
    </div>
  )
}
