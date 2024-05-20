import React from 'react'

export default function StretchedRoundedButton({
  comment,
}: {
  comment: string
}) {
  return (
    <div className="fixed bottom-5 w-full left-0 right-0 px-6">
      <button
        type="button"
        className="btn btn-neutral rounded-full w-full bg-black"
      >
        <span className="text-white">{comment}</span>
      </button>
    </div>
  )
}
