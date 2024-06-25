import Link from 'next/link'
import React from 'react'

export default function HomePartnerPost() {
  return (
    <Link
      href="/user"
      className="relative border border-black h-full rounded-lg"
    >
      <div className="bg-yellow-500 w-full h-[200px] pr-2 rounded-t-lg">
        포스팅 이미지
      </div>
      <div className="flex pl-3 gap-2 items-center pt-2">
        <div className="border border-black w-[30px] h-[30px] rounded-full bg-green-500" />
        <p>파트너명</p>
      </div>
      <div className="border w-[80%] h-[30px] bg-gray-400 ml-3 mt-2">
        <p>포스팅 태그</p>
      </div>
      <div className="absolute top-2 right-3 bg-white rounded-full pt-2 px-2">
        {/* <LikeButton /> */}
        <span>하트</span>
      </div>
    </Link>
  )
}
