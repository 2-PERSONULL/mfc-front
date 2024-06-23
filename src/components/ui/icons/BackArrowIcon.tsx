import React from 'react'
import Image from 'next/image'

const BackArrowIcon = () => {
  return (
    <Image
      src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/backArrow.svg"
      alt="backArrow"
      width={24}
      height={24}
    />
  )
}

export default BackArrowIcon
