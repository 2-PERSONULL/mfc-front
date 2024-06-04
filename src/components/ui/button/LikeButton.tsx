import React from 'react'
import Image from 'next/image'

export default function LikeButton({ fill }: { fill?: boolean }) {
  return (
    <button type="button">
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}icon/${fill ? 'fillHeart' : 'heart'}.svg`}
        alt="edit icon"
        width={25}
        height={25}
      />
    </button>
  )
}
