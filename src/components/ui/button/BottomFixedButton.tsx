import React from 'react'

export default function BottomFixedButton({
  clickHandler,
  text,
}: {
  clickHandler: () => void
  text: string
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-[100px] flex justify-center pt-5">
      <button
        type="button"
        onClick={clickHandler}
        className="w-[80vw] bg-black text-white font-semibold text-[17px] h-[60px] rounded-full"
      >
        {text}
      </button>
    </div>
  )
}
