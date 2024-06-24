import React from 'react'
import Image from 'next/image'

export default function HomeEventSection() {
  return (
    <section className="px-5 w-full min-h-full">
      <p className="text-2xl text-start font-semibold pt-8 pb-2">
        (유저 명)님을 위한 꿀팁
      </p>
      <div className="relative">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/event-image/event-image-01.svg"
          alt="event"
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto' }}
          className="relative"
        />
        <p className="absolute text-white top-10 left-5 text-7xl font-bold">
          신발, <br /> 어떻게 <br /> 관리해?
        </p>
      </div>
    </section>
  )
}
