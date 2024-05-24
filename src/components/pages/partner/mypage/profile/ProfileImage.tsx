import React from 'react'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div>
      <div className="w-[100px] h-[100px] left-1/2 translate-x-[-50%] relative">
        <Image
          src="/images/test-profile.jpg"
          alt="profile image"
          fill
          priority
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-cover rounded-full mr-1"
        />
      </div>
    </div>
  )
}
