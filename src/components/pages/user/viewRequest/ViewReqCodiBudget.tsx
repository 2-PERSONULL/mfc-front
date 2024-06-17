import React from 'react'

export default function ViewReqCodiBudget({ budget }: { budget: string }) {
  return (
    <div>
      <p className="text-base pb-3 text-gray-400">코디 예산</p>
      <div className="flex items-center gap-1 font-bold ">
        <p>{budget.toLocaleString()}</p>
        <p>₩</p>
      </div>
    </div>
  )
}
