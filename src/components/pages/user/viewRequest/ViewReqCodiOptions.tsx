import React from 'react'

export default function ViewReqCodiOptions({
  categories,
}: {
  categories: string[]
}) {
  return (
    <div>
      <p className="text-base pb-3 text-gray-400">코디 옵션</p>
      <ul className="grid grid-cols-3">
        {categories.map((category) => (
          <li key={category}>
            <span className="bg-gray-200 py-2 px-6 rounded-lg text-sm">
              {category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
