'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Style, StyleCategoryListType } from '@/types/styleCategoryListType'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ExploreCategory({ data }: { data: Style }) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [selectedSort, setSelectedSort] = useState<string>('')
  console.log(selectedSort)

  const handleClickCtg = (value: number) => {
    setSelectedCategory(value)
    router.push(`${pathname}?category=${value}&sort=${selectedSort}`)
  }
  const handleSort = (value: string) => {
    setSelectedSort(value)
    router.push(`${pathname}?category=${selectedCategory}&sort=${value}`)
  }
  return (
    <section className="sticky top-0 z-[5] pt-1 pb-3 bg-white flex flex-col items-end gap-3">
      <section className="w-full bg-white flex flex-row items-start overflow-x-scroll no-scrollbar whitespace-nowrap">
        <div
          role="presentation"
          onClick={() => handleClickCtg(0)}
          className={`px-6 py-2 mt-2 mr-2 rounded-[14px] relative ${selectedCategory === 0 ? 'bg-[#000000] text-white' : 'text-black bg-[#f0f0f0]'}`}
        >
          All
        </div>
        {data.styles.map((style: StyleCategoryListType) => {
          return (
            <div
              key={style.styleId}
              role="presentation"
              onClick={() => handleClickCtg(style.styleId)}
              className={`px-6 py-2 mt-2 mr-2 rounded-[14px] relative ${selectedCategory === style.styleId ? 'bg-[#000000] text-white' : 'text-black bg-[#f0f0f0]'}`}
            >
              {style.name}
            </div>
          )
        })}
      </section>
      <Select onValueChange={handleSort} defaultValue="LATEST">
        <SelectTrigger className="z-[50] border-none w-[30%] min-h-[30px]">
          <SelectValue placeholder={selectedSort} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="LATEST">최신순</SelectItem>
          <SelectItem value="BOOKMARK">좋아요순</SelectItem>
        </SelectContent>
      </Select>
    </section>
  )
}
