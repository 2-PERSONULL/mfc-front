import React from 'react'

export default function ViewRequestContents({
  contents,
}: {
  contents: string
}) {
  return (
    <section>
      <p className="text-base pb-3 text-gray-400">요청 내용</p>
      <p className="text-wrap">{contents}</p>
    </section>
  )
}
