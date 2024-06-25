import React from 'react'
import Image from 'next/image'

export default function HomeEventSection() {
  return (
    <section className="px-5 w-full min-h-full">
      <p className="text-2xl text-start font-semibold pt-8 pb-2">
        진행 중인 이벤트
      </p>
      <figure className="relative w-full h-[300px]">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/event-image/event-image.svg"
          alt="event"
          fill
          objectFit="cover"
          className="relative rounded-lg"
        />
        <section className="absolute shadow-xl rounded-b-lg bottom-0 w-full h-[80px] bg-white">
          <p className="text-lg text-start font-semibold pt-3 pl-5">
            MFC 오픈 기념 이벤트
          </p>
          <p className="text-sm text-start font-semibold pl-5 text-gray-500">
            2024.07.01 ~ 2024.07.04
          </p>
        </section>
      </figure>
    </section>
  )
}
