import React from 'react'
import Image from 'next/image'

export default function HomeEventSection({
  title,
  imageUrl,
  text,
}: {
  title: string
  imageUrl: string
  text: string
}) {
  return (
    <section className="px-5 w-full min-h-full">
      <p className="text-2xl text-start font-semibold pt-8 pb-2">{title}</p>
      <div className="relative w-full">
        <Image
          src={imageUrl}
          alt="event"
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto' }}
          className="relative rounded-lg"
        />
        <p className="absolute text-white top-10 left-5 text-7xl font-bold">
          {text}
        </p>
      </div>
    </section>
  )
}
