import React from 'react'

export default function ThreeFuncButton() {
  return (
    <div className="sticky w-full h-12 bottom-0 left-0 right-0 flex flex-row items-center justify-around text-white ">
      <button
        type="button"
        className="w-full h-full bg-gray-400 border border-gray-400"
      >
        수정
      </button>
      <button
        type="button"
        className="w-full h-full bg-white text-black border border-white"
      >
        삭제
      </button>
      <button
        type="button"
        className="w-full h-full bg-black border border-black"
      >
        선택
      </button>
    </div>
  )
}
