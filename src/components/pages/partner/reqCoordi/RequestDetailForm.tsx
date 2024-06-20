import React from 'react'

export default function RequestDetailForm({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[17px]">{title}</p>
      <p className="w-full p-3 text-[14px] rounded-[7px] bg-gray-100">
        {value}
      </p>
    </div>
  )
}
