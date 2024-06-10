import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnerCashMenu() {
  const menuData = [
    {
      id: 1,
      title: '적립 내역',
      url: '/partner/mypage/cash/history',
    },
    {
      id: 2,
      title: '환전 내역',
      url: '/partner/mypage/cash/exchange',
    },
    {
      id: 3,
      title: '정산 계좌 관리',
      url: '/partner/mypage/cash/account',
    },
  ]

  return (
    <ul>
      {menuData.map((menu) => (
        <li key={menu.id}>
          <Link
            className="flex items-center justify-between px-5 py-7"
            href={menu.url}
          >
            <span>{menu.title}</span>
            <Image
              src="https://assets.cdn.soomgo.com/icons/icon-mypage-list-arrow.svg"
              alt="arrow-icon"
              width={24}
              height={24}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
