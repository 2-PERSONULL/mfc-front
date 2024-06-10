import React from 'react'

interface LabelProps {
  text: string
  required?: boolean
}

export default function FormLabel({ text, required }: LabelProps) {
  return (
    <label>
      <span className="font-semibold">{text}</span>
      {required && <span className="text-[#FF0000]">*</span>}
    </label>
  )
}
