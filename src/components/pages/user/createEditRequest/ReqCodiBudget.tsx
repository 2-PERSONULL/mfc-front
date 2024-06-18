'use client'

import React, { useState } from 'react'

export default function ReqCodiBudget({ budget }: { budget?: string }) {
  const [value, setValue] = useState<number | null>(Number(budget) || null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value.replace(/,/g, '')))
  }
  return (
    <section>
      <p className="text-xs pb-1">
        코디 예산
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <section className="flex items-center gap-1">
        <input
          name="budget"
          value={value ? value.toLocaleString() : ''}
          onChange={handleChange}
          type="text"
          className="form-input text-end"
          style={{ width: '35%' }}
        />
        <p>₩</p>
      </section>
    </section>
  )
}
