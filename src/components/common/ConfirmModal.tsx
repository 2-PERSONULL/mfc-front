'use client'

import React from 'react'
import useConfirmStore from '@/stores/confirm'

export default function ConfirmModal() {
  const { content, yesButtonText, noButtonText, clickYes, clickNo } =
    useConfirmStore()

  if (!content) {
    return null
  }

  return (
    <div className="fixed z-[300] top-0 left-0 w-full h-full bg-[#424242] bg-opacity-60 flex items-center justify-center">
      <div className="flex flex-col items-center justify-around w-[80%] h-[180px] py-[10px] px-[20px] bg-white bg-opacity-90 rounded-xl shadow-xl flex-shrink-0">
        <div>
          <p className="text-[16px] text-center whitespace-pre-wrap">
            {content}
          </p>
        </div>
        <div className="w-full flex justify-around">
          <button
            type="button"
            onClick={clickNo}
            className="bg-gray-200 w-[120px] h-[40px] rounded-md"
          >
            {noButtonText}
          </button>
          <button
            type="button"
            onClick={clickYes}
            className="bg-black text-white w-[120px] h-[40px] rounded-md"
          >
            {yesButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
