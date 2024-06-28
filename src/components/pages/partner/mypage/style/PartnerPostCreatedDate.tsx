import React from 'react'
import { convertToKorDate } from '@/utils/formatTime'

export default function PartnerPostCreatedDate({
  createdAt,
}: {
  createdAt: string
}) {
  return (
    <section className="w-full px-5 flex items-center text-gray-500 text-[14px]">
      {convertToKorDate(createdAt)}
    </section>
  )
}
