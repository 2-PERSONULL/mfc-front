import React from 'react'

export default function EachRequest({ title }: { title: string }) {
  return (
    <td className="py-8 px-6 text-black">
      <p className="font-medium text-[17px]">{title}</p>
    </td>
  )
}
