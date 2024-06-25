import React from 'react'

export default function ViewReqCodiBudget({ budget }: { budget: string }) {
  return (
    <section>
      <p className="text-[17px] pb-3 text-black font-semibold">코디 예산</p>
      <div className="flex items-center gap-1 text-lg">
        <p>{parseInt(budget, 10).toLocaleString()}</p>
        <p>₩</p>
      </div>
    </section>
  )
}
