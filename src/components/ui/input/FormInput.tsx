import React from 'react'

interface InputProps {
  type: string
  value: string | number
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({
  type,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-300 rounded-[4px] py-2 px-2 w-full h-[45px] text-[14px] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
    />
  )
}
