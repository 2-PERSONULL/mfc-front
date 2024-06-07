import React from 'react'

interface InputProps {
  type: string
  value: string | number
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormPriceInput({
  type,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-wrap relative w-full items-center h-[45px] text-[14px]">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        min={0}
        className="border border-gray-300 rounded-[4px] h-[45px] py-2 pl-[12px] pr-[31px] w-full text-right focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      />
      <div className="absolute right-0 pr-[12px]">원</div>
    </div>
  )
}
