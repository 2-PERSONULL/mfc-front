import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="px-6 w-full pt-3">
      <p className="text-gray-500 font-semibold">{title}</p>
      <div className="border border-gray-400" />
    </div>
  )
}
