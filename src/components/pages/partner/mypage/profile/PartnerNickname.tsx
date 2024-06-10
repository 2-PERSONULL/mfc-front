import React from 'react'

export default function PartnerNickname({
  nickName,
  email,
}: {
  nickName: string
  email: string
}) {
  return (
    <section className="flex items-end ml-6 h-[100px] ">
      <div>
        <h1 className="text-[18px] font-semibold">{nickName}</h1>
        <span className="text-[14px]">{email}</span>
      </div>
    </section>
  )
}
