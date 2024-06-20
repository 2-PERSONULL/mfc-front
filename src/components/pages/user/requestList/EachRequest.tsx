import React from 'react'

export default function EachRequest({ title }: { title: string }) {
  return (
    <div className="py-8 px-6 text-black">
      <p className="font-semibold text-xl">{title}</p>
    </div>
  )
}
