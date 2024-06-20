import React from 'react'

export default function ViewRequestTitle({ title }: { title: string }) {
  return (
    <section>
      <p className="text-sm font-semibold pb-3 text-black">요청서 이름</p>
      <p className="text-lg">{title}</p>
    </section>
  )
}
