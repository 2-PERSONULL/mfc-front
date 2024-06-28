'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import BackArrowButton from '@/components/ui/button/BackArrowButton'
import DeleteInput from '@/components/ui/icons/DeleteInput'

export default function SearchStart() {
  const search = useSearchParams().get('search')
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (search) {
      setSearchValue(search)
    }
  }, [search])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const clearSearch = () => {
    setSearchValue('')
    inputRef.current?.focus()
  }

  const searchSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (searchValue === '') return
    router.push(`/explore?search=${searchValue}`)
  }

  return (
    <div className="px-4 py-5 flex items-center gap-2">
      <BackArrowButton />
      <form className="relative w-full" onSubmit={searchSubmit}>
        <input
          type="text"
          className="h-[40px] w-full rounded-full bg-[#F5F5F5] pl-[15px] font-Pretendard text-[14px] text-black focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500"
          placeholder="Search"
          name="searchValue"
          ref={inputRef}
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchValue.length > 0 && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-8 flex items-center pr-3 focus:outline-none"
          >
            <DeleteInput width={20} height={20} />
          </button>
        )}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg"
            alt="explore"
            width={23}
            height={23}
          />
        </button>
      </form>
    </div>
  )
}
