import Image from 'next/image'
import React from 'react'

const TagBadge = ({
  word,
  removeTag,
}: {
  word: string
  removeTag: (tag: string) => void
}) => {
  return (
    <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
      <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
        #{word}
      </p>
      <button type="button" onClick={() => removeTag(word)}>
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/close.svg"
          alt="close"
          width={0}
          height={0}
          style={{ width: '18px', height: '18px' }}
        />
      </button>
    </li>
  )
}

export default TagBadge
