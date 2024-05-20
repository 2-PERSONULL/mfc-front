import React from 'react'

export default function SeperatedBeforeAfterButton() {
  return (
    <div className="flex flex-row gap-2">
      <button
        type="button"
        className="btn rounded-full w-[38%] bg-gray-300 border-none"
      >
        <span className="text-white">이전으로</span>
      </button>
      <button
        type="button"
        className="btn btn-neutral rounded-full w-3/5 bg-black"
      >
        <span className="text-white">다음으로</span>
      </button>
    </div>
  )
}
