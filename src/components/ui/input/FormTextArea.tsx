import React from 'react'

interface TextAreaProps {
  value: string
  maxLength: number
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function FormTextArea({
  value,
  maxLength,
  placeholder,
  onChange,
}: TextAreaProps) {
  return (
    <div className="relative">
      <textarea
        className="resize-none focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 min-h-[120px] overflow-y-auto py-[15px] px-[11px] bg-transparent w-full text-[14px] border border-gray-300 bg-[#fff] rounded-[4px] overflow-visible"
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <span className="absolute bottom-[-25px] right-[7px] text-[12px] text-[#969696]">
        <em className="not-italic">{value.length}</em> / {maxLength}
      </span>
    </div>
  )
}
