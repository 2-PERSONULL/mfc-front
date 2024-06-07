import React from 'react'

export default function ReqPreferredStyle() {
  return (
    <div>
      <p className="text-xs pb-1">
        선호 브랜드(0/3)
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <input
        type="text"
        className="pl-2 border border-black w-full py-1 rounded-lg"
      />
    </div>
  )
}
