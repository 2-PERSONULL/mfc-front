'use client'

import React from 'react'
import codiOptionData from '@/libs/codiOptionData'

export default function ReqCodiOptions() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, e.target.value])
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== e.target.value),
      )
    }
  }
  return (
    <div>
      <p className="text-xs pb-1">
        코디 옵션
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <div className="grid grid-cols-4 gap-1">
        {codiOptionData.map((data) => (
          <label key={data.id} className="flex gap-2 items-center">
            <input
              value={data.optionName}
              onChange={handleChange}
              name="category"
              type="checkbox"
              className="common-checkbox"
            />
            <p>{data.optionName}</p>
          </label>
        ))}
      </div>
    </div>
  )
}
