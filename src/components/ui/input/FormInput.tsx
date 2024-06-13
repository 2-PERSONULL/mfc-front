import React from 'react'

interface InputProps {
  type: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  rounded?: string
  disabled?: boolean
  autocomplete?: string
  required?: boolean
  inputmode?:
    | 'search'
    | 'email'
    | 'tel'
    | 'none'
    | 'text'
    | 'url'
    | 'numeric'
    | 'decimal'
}

export default function FormInput({
  type,
  value,
  placeholder,
  rounded,
  onChange,
  disabled,
  inputmode,
  autocomplete,
  required,
}: InputProps) {
  return (
    <input
      required={required}
      autoComplete={autocomplete}
      inputMode={inputmode}
      disabled={disabled}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`border border-gray-300 py-2 px-2 w-full h-[50px] text-[14px] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
      ${rounded ? `rounded-${rounded}` : 'rounded-[4px]'}`}
    />
  )
}
