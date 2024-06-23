import React from 'react'

export default function RequestDeetailTag({
  title,
  value,
}: {
  title: string
  value: string[]
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[17px]">{title}</p>
      <ul className="flex gap-2">
        {value.map((item, index) => (
          <li
            key={index}
            className="py-3 px-4 text-[14px] rounded-[14px] bg-[#F5F5F5]"
          >
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
