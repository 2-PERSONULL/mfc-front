import React, { useState } from 'react'

export default function ReqCodiBudget({
  setBudget,
}: {
  setBudget: (value: number) => void
}) {
  const [value, setValue] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const replacedValue = Number(e.target.value.replace(/,/g, ''))
    setBudget(Number(replacedValue))
    setValue(Number(replacedValue))
  }
  return (
    <div>
      <p className="text-xs pb-1">
        코디 예산
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <div className="flex items-center gap-1">
        <input
          value={value.toLocaleString()}
          onChange={handleChange}
          type="text"
          className="text-end px-2 border border-black w-[30%] py-1 rounded-lg"
        />
        <p>₩</p>
      </div>
    </div>
  )
}
