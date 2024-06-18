import React from 'react'

export default function EachRequest({ title }: { title: string }) {
  return (
    <div className="py-8 border border-gray-400 px-6 text-gray-500">
      <p className="font-bold text-lg">{title}</p>
    </div>
  )
}
