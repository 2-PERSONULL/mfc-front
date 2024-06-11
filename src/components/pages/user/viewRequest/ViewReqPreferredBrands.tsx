import React from 'react'

export default function ViewReqPreferredBrands() {
  return (
    <div>
      <p className="text-base pb-3 text-gray-400">선호 브랜드</p>
      <ul className="flex flex-col gap-5">
        <li>
          <span className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
            짧 브랜드명
          </span>
        </li>
        <li>
          <span className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
            조금 긴 브랜드명
          </span>
        </li>
        <li>
          <span className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
            생각보다 많이 긴 브랜드명
          </span>
        </li>
      </ul>
    </div>
  )
}
