import React from 'react'

export default function ViewReqCodiOptions() {
  return (
    <div>
      <p className="text-base pb-3 text-gray-400">코디 옵션</p>
      <ul className="grid grid-cols-3">
        <li>
          <span className="bg-gray-200 py-2 px-6 rounded-lg text-sm">상의</span>
        </li>
        <li>
          <span className="bg-gray-200 py-2 px-6 rounded-lg text-sm">하의</span>
        </li>
        <li>
          <span className="bg-gray-200 py-2 px-6 rounded-lg text-sm">
            아우터
          </span>
        </li>
      </ul>
    </div>
  )
}
