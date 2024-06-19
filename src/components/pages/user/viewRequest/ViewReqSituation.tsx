import React from 'react'

export default function ViewReqSituation({ situation }: { situation: string }) {
  return (
    <section>
      <p className="text-base pb-3 text-gray-400">코디 상황</p>
      <span className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
        {situation}
      </span>
    </section>
  )
}
