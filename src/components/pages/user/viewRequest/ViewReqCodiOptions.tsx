import React from 'react'

export default function ViewReqCodiOptions({
  categories,
}: {
  categories: string[]
}) {
  return (
    <section>
      <p className="text-[17px] pb-3 text-black font-semibold">코디 옵션</p>
      <ul className="flex gap-2">
        {categories.map((category) => (
          <li key={category} className="mb-5">
            <span className="bg-gray-200 py-2 px-6 rounded-lg text-sm">
              {category}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
