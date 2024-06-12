'use client'

import React from 'react'

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function NumberButton({
  number,
  clickHandler,
}: {
  number: string
  clickHandler: (number: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => clickHandler(number)}
      className="h-12 text-2xl font-medium"
    >
      {number}
    </button>
  )
}

export default function PricePad({
  clickNumber,
  deleteHandler,
}: {
  clickNumber: (number: string) => void
  deleteHandler: () => void
}) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0']
  return (
    <div className="grid grid-cols-3 gap-4 py-2">
      {numbers.map((number) => (
        <NumberButton key={number} number={number} clickHandler={clickNumber} />
      ))}

      <button
        type="button"
        onClick={deleteHandler}
        className="h-12 flex justify-center items-center"
      >
        <ArrowLeftIcon />
      </button>
    </div>
  )
}
