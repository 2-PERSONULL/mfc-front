import React, { useState, useEffect } from 'react'
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon'

export default function CommonSelectBox({
  optionList,
  selectedOption,
  setSelectedOption,
}: {
  optionList: string[]
  selectedOption: string
  setSelectedOption: (value: string) => void
}) {
  const [localSelectedOption, setLocalSelectedOption] =
    useState<string>(selectedOption)
  const [openSelectBox, setOpenSelectBox] = useState(false)

  useEffect(() => {
    if (setSelectedOption) {
      setSelectedOption(localSelectedOption)
    }
  }, [localSelectedOption])

  const selectHandler = (option: string) => {
    setLocalSelectedOption(option)
    setSelectedOption(option)
    setOpenSelectBox(false)
  }

  return (
    <div className="relative w-full">
      <div
        role="presentation"
        onClick={() => setOpenSelectBox(false)}
        className={`fixed top-0 w-screen h-full transition-all ${openSelectBox ? '' : 'hidden'}`}
      />
      <button
        className="border border-gray-300 rounded-[4px] w-full h-[45px] relative flex items-center justify-between px-2"
        type="button"
        onClick={() => setOpenSelectBox(!openSelectBox)}
      >
        <span className="text-[#222] text-[14px]">
          {localSelectedOption || 'Select option'}
        </span>
        <RightArrowIcon width={10} height={10} rotate="90" color="gray" />
      </button>
      {openSelectBox && (
        <ul className="absolute bg-white border border-gray-300 rounded-[5px] mt-[5px] h-[200px] w-full z-10 overflow-y-scroll">
          {optionList.map((option, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => selectHandler(option)}
                className="flex items-center pl-[8px] gap-2 w-full h-[45px] border-b border-b-gray-200"
              >
                <span className="text-[13px] text-[#222]">{option}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
