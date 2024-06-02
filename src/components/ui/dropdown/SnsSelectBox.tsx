import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon'
import PartnerSnsData from '@/libs/partnerSnsData'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

export default function SnsSelectBox({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: PartnerSnsType
  setSelectedOption: (id: number, type: string) => void
}) {
  const optionList = PartnerSnsData
  const [localSelectedOption, setLocalSelectedOption] = useState<string>(
    selectedOption.type,
  )
  const [openSelectBox, setOpenSelectBox] = useState(false)

  useEffect(() => {
    if (setSelectedOption) {
      setSelectedOption(selectedOption.id, localSelectedOption)
    }
  }, [localSelectedOption])

  const selectHandler = (option: string) => {
    setLocalSelectedOption(option)
    setSelectedOption(selectedOption.id, option)
    setOpenSelectBox(false)
  }

  return (
    <div className="">
      <div
        role="presentation"
        onClick={() => setOpenSelectBox(false)}
        className={`fixed top-0 w-screen h-full transition-all ${openSelectBox ? '' : 'hidden'}`}
      />
      <button
        className="border border-gray-200 rounded-[4px] w-[60px] h-[40px]"
        type="button"
        onClick={() => setOpenSelectBox(!openSelectBox)}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="text-[#222] text-[15px]">
            <Image
              src={`/icons/${localSelectedOption}.svg`}
              alt="edit icon"
              width={18}
              height={18}
            />
          </span>
          <RightArrowIcon width={10} height={10} rotate="90" />
        </div>
      </button>
      {openSelectBox && (
        <ul className="absolute bg-white border border-gray-200 rounded-[5px] mt-[5px] w-[100px] z-10">
          {optionList.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => selectHandler(option.value)}
                className="flex items-center pl-[8px] gap-2 w-full h-[40px] border-b border-b-gray-200"
              >
                <Image
                  src={`/icons/${option.value}.svg`}
                  alt="edit icon"
                  width={16}
                  height={16}
                />
                <span className="text-[13px] text-[#222]">{option.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
