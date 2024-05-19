import React from 'react'
import BackArrowButton from '@/components/ui/button/BackArrowButton'

const GoBackHeader = ({ title }: { title: string }) => {
  return (
    <div className="h-[42px] py-[11px] flex justify-center border-b-[#BCBCBC]">
      <BackArrowButton />
      <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">
        {title}
      </h1>
    </div>
  )
}

export default GoBackHeader
