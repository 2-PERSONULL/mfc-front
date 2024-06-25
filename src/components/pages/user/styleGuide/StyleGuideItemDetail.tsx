import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import StyleGuideInfo from '@/types/styleGuideTypes'
import RequestDetailForm from '@/components/pages/partner/reqCoordi/RequestDetailForm'

export default function StyleGuideItemDetail({
  style,
}: {
  style: StyleGuideInfo
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <RequestDetailForm title="구매처(브랜드 및 쇼핑몰)" value={style.brand} />
      <RequestDetailForm title="가격" value={style.budget.toLocaleString()} />
      <div className="flex flex-col w-full items-center mb-6">
        <Image
          src="/icons/comma2.svg"
          alt="콤마"
          width={20}
          height={20}
          className="mb-4"
        />
        <p className="font-semibold text-centner text-[17px]">코멘트</p>
        <p className="p-4 text-[14px] rounded-[7px] text-center w-[70vw] leading-relaxed">
          {style.comment || '정보 없음'}
        </p>
        <Image src="/icons/comma1.svg" alt="콤마" width={20} height={20} />
      </div>

      {/* 첨부 스타일 이미지 */}
      <div className="flex flex-col w-full">
        {style.images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[350px] ${index % 2 === 0 ? 'items-start' : 'items-end'}`}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <Image
              src={image}
              alt={`스타일 이미지 ${index + 1}`}
              width={240}
              height={240}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* 바로가기 링크 */}
      {style.url && (
        <Link
          href={style.url}
          target="_blank"
          className="w-full flex justify-center mt-[50px]"
        >
          <div className="w-[50vw] h-[50px] flex gap-2 items-center justify-center border border-gray-700 rounded-full py-5 px-3">
            <Image
              src="/icons/link.svg"
              alt="edit icon"
              width={21}
              height={21}
            />
            <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
              구매처 바로가기
            </p>
          </div>
        </Link>
      )}
    </div>
  )
}
