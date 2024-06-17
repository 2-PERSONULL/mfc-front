import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <section className="px-6 my-7">
      <p className="font-extrabold text-xl">{title}</p>
      {/* ↓ 임시로 입력한 부분 검토 필요 */}
      <p className="font-semibold text-gray-400 text-[13px] pt-2">
        정보를 입력하면 <br /> 맞춤형 코디를 제안받을 수 있어요.
      </p>
    </section>
  )
}
