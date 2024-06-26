'use client'

import React, { useState } from 'react'
import { Style, StyleCategoryListType } from '@/types/styleCategoryListType'

export default function ExploreCategory({ data }: { data: Style }) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

  return (
    <section className="sticky top-0 z-[5] w-full bg-white mb-6 flex flex-row items-start overflow-x-scroll no-scrollbar whitespace-nowrap">
      <div
        role="presentation"
        onClick={() => setSelectedCategory(0)}
        className={`px-6 py-2 mt-2 mr-2 rounded-[14px] relative ${selectedCategory === 0 ? 'bg-[#000000] text-white' : 'text-black bg-[#f0f0f0]'}`}
      >
        All
      </div>
      {data.styles.map((style: StyleCategoryListType) => {
        return (
          <div
            key={style.styleId}
            role="presentation"
            onClick={() => setSelectedCategory(style.styleId)}
            className={`px-6 py-2 mt-2 mr-2 rounded-[14px] relative ${selectedCategory === style.styleId ? 'bg-[#000000] text-white' : 'text-black bg-[#f0f0f0]'}`}
          >
            {style.name}
          </div>
        )
      })}
    </section>
  )
}
