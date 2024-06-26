import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuType } from '@/types/menuType'

export default function MenuElement({ data }: { data: MenuType }) {
  return (
    <Link
      href={data.url}
      className="flex items-center justify-between px-5 py-7 border border-b-slate-100"
    >
      <span>{data.title}</span>
      <Image
        src="/icons/list-arrow.svg"
        alt="arrow-icon"
        width={24}
        height={24}
      />
    </Link>
  )
}
