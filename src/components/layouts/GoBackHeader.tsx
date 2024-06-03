import React from 'react'
import BackArrowButton from '@/components/ui/button/BackArrowButton'

const GoBackHeader = ({
  title,
  confirmExit,
}: {
  title?: string
  confirmExit?: boolean
}) => {
  return (
    <div className="sticky top-0 h-[50px] py-[11px] flex justify-center items-center bg-white w-full z-50">
      <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
        <BackArrowButton confirmExit={confirmExit || false} />
      </div>
      {title && (
        <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">
          {title}
        </h1>
      )}
    </div>
  )
}

export default GoBackHeader
