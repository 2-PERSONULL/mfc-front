import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchHeader({ searchValue }: { searchValue: string }) {
  let role = null
  if (typeof window !== 'undefined') {
    role = localStorage.getItem('role')
  }

  return (
    <header className="px-5 pt-[15px] pb-[5px] bg-white flex items-center justify-between gap-4">
      <Link
        href={role === 'partner' ? '/partner' : '/user'}
        className="w-[55px]"
      >
        <Image src="/icons/mfc-2.svg" alt="logo" width={55} height={55} />
      </Link>
      <Link href="/explore/start" className="relative w-full">
        <input
          readOnly
          className="h-[40px] w-full rounded-full bg-[#F5F5F5] pl-[15px] font-Pretendard text-[14px] text-black focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500"
          value={searchValue}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg"
            alt="explore"
            width={23}
            height={23}
          />
        </div>
      </Link>
    </header>
  )
}
