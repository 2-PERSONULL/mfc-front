import React from 'react'
import Image from 'next/image'

export default function PartnerProfileTitleAndEdit({
  title,
  clickHandler,
  content,
  isEmpty,
}: {
  title: string
  clickHandler: () => void
  content: JSX.Element | string
  isEmpty: boolean
}) {
  return (
    <div className="border-b border-b-gray-200 py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">{title}</h1>
        <button type="button" onClick={clickHandler}>
          <Image
            src={`https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/${isEmpty ? 'add' : 'pencil'}-icon.svg`}
            alt="edit icon"
            width={21}
            height={21}
          />
        </button>
      </div>

      {content}
    </div>
  )
}
