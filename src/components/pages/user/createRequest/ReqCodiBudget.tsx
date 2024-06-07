import React from 'react'

export default function ReqCodiBudget() {
  return (
    <div>
      <p className="text-xs pb-1">
        코디 예산
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <div className="flex items-center gap-1">
        <input
          type="text"
          className="pl-2 border border-black w-[30%] py-1 rounded-lg"
        />
        <p>₩</p>
      </div>
    </div>
  )
}
