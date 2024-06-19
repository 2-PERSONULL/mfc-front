import React from 'react'

export default function ViewRequestTitle({ title }: { title: string }) {
  return (
    <section>
      <p className="text-base pb-3 text-gray-400">요청서 이름</p>
      <p>{title}</p>
    </section>
  )
}
