import React from 'react'

export default function RoundedInputBox({
  type,
  placeholder,
}: {
  type: string
  placeholder: string
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full rounded-full border-black"
    />
  )
}
