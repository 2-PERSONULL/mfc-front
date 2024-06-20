import React from 'react'

export default function ViewRequestContents({
  contents,
}: {
  contents: string
}) {
  return (
    <section>
      <p className="text-sm pb-3 text-black font-semibold">요청 내용</p>
      <p className="text-wrap text-lg">{contents}</p>
    </section>
  )
}
