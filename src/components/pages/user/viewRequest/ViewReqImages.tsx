import React from 'react'

export default function ViewReqImages({ title }: { title: string }) {
  return (
    <>
      <p className="text-base text-gray-400">{title}</p>
      <div className="flex overflow-x-scroll whitespace-nowrap">
        <ul className="flex justify-start gap-2">
          <li className="bg-purple-400 w-[112px] h-[110px]">
            <p>이미지</p>
          </li>
          <li className="bg-purple-400 w-[112px] h-[110px]">
            <p>이미지</p>
          </li>
          <li className="bg-purple-400 w-[112px] h-[110px]">
            <p>이미지</p>
          </li>
        </ul>
      </div>
    </>
  )
}
