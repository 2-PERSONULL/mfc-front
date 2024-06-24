import React from 'react'

export default function ViewReqSituation({ situation }: { situation: string }) {
  return (
    <section>
      <p className="text-[17px] pb-3 text-black font-semibold">코디 상황</p>
      <span className="bg-gray-200 py-2 px-5 rounded-lg text-base">
        {situation}
      </span>
    </section>
  )
}
