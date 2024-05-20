import React from 'react'

export default function StretchedRoundedButton({
  comment,
}: {
  comment: string
}) {
  return (
    <button
      type="button"
      className="btn btn-neutral rounded-full w-full bg-black"
    >
      <span className="text-white">{comment}</span>
    </button>
  )
}
