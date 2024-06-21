'use client'

import Image from 'next/image'
import React from 'react'

export default function ExploreSearchBar() {
  return (
    <section className="w-full bg-white max-h-20 px-5">
      <div className="flex flex-row gap-3 items-center justify-between">
        <div className="relative grow">
          <input
            type="text"
            readOnly
            onClick={() => console.log('검색 모달 열림')}
            placeholder="검색어를 입력하세요."
            style={{
              border: 'none',
              height: '46px',
              paddingLeft: '2.5rem',
            }}
            className="form-input my-3 rounded-md shadow-md"
          />
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/nav/explore.svg"
            alt="search"
            width={25}
            height={25}
            style={{ filter: 'invert(100%)' }}
            className="absolute top-6 left-3 text-[#000000]"
          />
        </div>
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/options.svg"
          alt="search filter"
          width={38}
          height={38}
          className="bg-white rounded-md py-[12px] pl-[7px] pr-[7px] shadow-md flex-none"
        />
      </div>
    </section>
  )
}
