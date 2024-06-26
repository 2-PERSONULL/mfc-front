'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar'

export default function ProfileProgress({
  progressPercent,
}: {
  progressPercent: number
}) {
  return (
    <section className="py-5 px-4 flex items-center justify-between rounded-[24px] bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-[18px] font-semibold">프로필 완성도</p>
        {progressPercent === 100 ? (
          <>
            <p className="text-gray-600 text-[14px]">
              완성도 100% 달성! <br />
            </p>
            <Link
              href="/partner/mypage"
              className="flex bg-gray-100 rounded-[14px] px-2 py-3 text-[14px] justify-between items-center"
            >
              <span>스타일 업로드하러 가기</span>
              <Image
                src="/icons/list-arrow.svg"
                alt="arrow-icon"
                width={24}
                height={24}
              />
            </Link>
          </>
        ) : (
          <>
            <p className="text-gray-600 text-[14px]">
              프로필을 완성하고, <br /> 파트너님의 매력도를 높여보세요
            </p>
            <Link
              href="/partner/management/profile"
              className="flex bg-gray-100 rounded-[14px] px-2 py-3 text-[14px] justify-between items-center"
            >
              <span>프로필 완성하러가기</span>
              <Image
                src="/icons/list-arrow.svg"
                alt="arrow-icon"
                width={24}
                height={24}
              />
            </Link>
          </>
        )}
      </div>

      <CircularProgressBar
        colorCircle="#ededed"
        colorSlice="#424242"
        percent={progressPercent}
        fontColor="#212121"
        round
        fontSize="14px"
        size="125px"
      />
    </section>
  )
}
