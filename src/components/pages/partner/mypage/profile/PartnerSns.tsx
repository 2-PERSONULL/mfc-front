import React from 'react'
import Image from 'next/image'

export default function PartnerSns() {
  return (
    <div className="border-b border-b-gray-200 py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">SNS</h1>
        <Image
          src="/images/pencil-icon.svg"
          alt="edit icon"
          width={21}
          height={21}
        />
      </div>
      <ul className="flex flex-wrap w-full h-auto">
        <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
          <Image
            src="/icons/instagram.svg"
            alt="edit icon"
            width={21}
            height={21}
            className="mr-[5px]"
          />
          <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
            Instagram
          </p>
        </li>
        <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
          <Image
            src="/icons/link.svg"
            alt="edit icon"
            width={21}
            height={21}
            className="mr-[5px]"
          />
          <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
            쇼핑몰 바로가기
          </p>
        </li>
        <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
          <Image
            src="/icons/youtube.svg"
            alt="edit icon"
            width={21}
            height={21}
            className="mr-[5px]"
          />
          <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
            Youtube
          </p>
        </li>
      </ul>
    </div>
  )
}
