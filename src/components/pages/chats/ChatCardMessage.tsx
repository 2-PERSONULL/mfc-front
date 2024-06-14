import React from 'react'
import Link from 'next/link'
import { CardMessageType } from '@/types/chatTypes'

export default function ChatCardMessage({ card }: { card: CardMessageType }) {
  // 해당 카드의 target이 자신인 경우에만 버튼이 보이도록 함
  const role = localStorage.getItem('role')
  const isTarget = card.target === role
  const amount = parseInt(card.details[1].value.replace(/,/g, ''), 10)

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

      {!isTarget && (
        <>
          {card.actions.map((action, index) => (
            <Link
              key={index}
              href={`/user/confirm?confirmId=${1234}&amount=${amount}`}
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
