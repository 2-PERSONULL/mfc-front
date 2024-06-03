import React from 'react'

export default function StretchedRoundedButton({
  comment,
  clickHandler,
}: {
  comment: string
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className="rounded-full w-full h-[50px] bg-black"
    >
      <span className="text-white">{comment}</span>
    </button>
  )
}
