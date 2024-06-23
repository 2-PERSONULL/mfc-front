import React from 'react'

export default function StyleGuideAction() {
  return (
    <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-gradient-to-t from-white gap-2 px-2 pb-[10px] z-10">
      <button
        type="button"
        className="bg-black font-semibold text-white text-[17px] h-[60px] rounded-full w-full"
      >
        확정하기
      </button>
    </div>
  )
}
