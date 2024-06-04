import React from 'react'

export default function PartnerMainStyleBox({
  partnerCode,
}: {
  partnerCode: string
}) {
  console.log(partnerCode)
  return (
    <section className="mb-8">
      <h1 className="text-[16px] font-semibold mb-1">주요 스타일</h1>
    </section>
  )
}
