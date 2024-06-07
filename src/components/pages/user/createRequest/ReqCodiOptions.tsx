import React from 'react'
import codiOptionData from '@/libs/codiOptionData'

export default function ReqCodiOptions() {
  return (
    <div>
      <p className="text-xs pb-1">
        코디 옵션
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <div className="grid grid-cols-4 gap-1">
        {codiOptionData.map((data) => (
          <label key={data.id} className="flex gap-2 items-center">
            <input type="checkbox" id="common-checkbox" />
            <p>{data.optionName}</p>
          </label>
        ))}
      </div>
    </div>
  )
}
