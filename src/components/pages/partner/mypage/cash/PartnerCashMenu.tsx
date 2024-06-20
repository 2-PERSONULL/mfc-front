import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnerCashMenu() {
  const menuData = [
    {
      id: 1,
      title: '이용내역조회',
      url: '/partner/management/cash/history',
    },

    {
      id: 2,
      title: '정산 계좌 관리',
      url: '/partner/management/cash/bankaccount',
    },
  ]

  return (
    <section>
      <nav>
        <ul>
          {menuData.map((menu) => (
            <li key={menu.id}>
              <Link
                className="flex items-center justify-between px-5 py-7"
                href={menu.url}
              >
                <span>{menu.title}</span>
                <Image
                  src="/icons/list-arrow.svg"
                  alt="arrow-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
