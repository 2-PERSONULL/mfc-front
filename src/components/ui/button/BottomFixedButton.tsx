import React from 'react'

export default function BottomFixedButton({
  clickHandler,
  text,
  disabled,
}: {
  clickHandler: () => void
  text: string
  disabled?: boolean
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-[100px] flex justify-center pt-5">
      <button
        type="button"
        disabled={disabled}
        onClick={clickHandler}
        className={`w-[80vw] ${disabled ? 'bg-gray-400' : 'bg-black'} text-white font-semibold text-[17px] h-[60px] rounded-full`}
      >
        {text}
      </button>
    </div>
  )
}
