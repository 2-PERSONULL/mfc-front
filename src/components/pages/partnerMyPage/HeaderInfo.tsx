import React from 'react'
import Image from 'next/image'

export default function HeaderInfo() {
  return (
    <div className="h-[220px] w-full">
      <div className="relative bg-black h-[120px] rounded-bl-[40px] rounded-br-[40px] pt-5">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] bg-white w-[80vw] h-[150px] shadow-md mt-[10px] rounded-[10px] pt-[60px] pb-[10px]">
          <h1 className="text-center font-bold text-xl mb-3">코디Jinny</h1>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <h1 className="font-bold">2,234</h1>
              <span className="text-[12px] text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold">16</h1>
              <span className="text-[12px] text-gray-500">Posts</span>
            </div>
          </div>
        </div>

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
    </div>
  )
}
