import React from 'react'

export default function PartnerNickname({ nickName }: { nickName: string }) {
  return (
    <section className="flex items-center ml-6 h-[100px] ">
      <h1 className="text-[18px] font-semibold">{nickName}</h1>
    </section>
  )
}
