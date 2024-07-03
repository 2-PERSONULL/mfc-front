import React from 'react'
import Image from 'next/image'

export default function PartnerPostImage({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="w-full flex justify-center">
      <div className="rounded-[10px] w-full min-h-[60dvh] relative">
        <Image
          src={imageUrl}
          alt="스타일 이미지"
          fill
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-cover"
        />
      </div>
    </section>
  )
}
