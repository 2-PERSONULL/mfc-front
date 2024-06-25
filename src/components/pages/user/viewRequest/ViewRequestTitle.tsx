import React from 'react'

export default function ViewRequestTitle({ title }: { title: string }) {
  return (
    <section className="flex flex-col gap-2">
      <p className="font-semibold text-[17px] text-black">요청서 이름</p>
      <p className="text-lg">{title}</p>
    </section>
  )
}
