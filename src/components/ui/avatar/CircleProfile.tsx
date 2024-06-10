import React from 'react'
import Image from 'next/image'

export default function CircleProfile({
  size,
  imageUrl,
}: {
  size: number
  imageUrl: string | null
}) {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'

  return (
    <div className={`w-[${size}px] h-[${size}px] relative`}>
      <Image
        src={imageUrl || basicImage}
        alt="profile image"
        fill
        priority
        sizes="(max-width: 100px) 100vw, 100px"
        className="object-cover rounded-full"
      />
    </div>
  )
}
