'use client'

import React, { useState } from 'react'
import { Style, StyleCategoryListType } from '@/types/styleCategoryListType'

export default function ExploreCategory({ data }: { data: Style }) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

  return (
    <section className="w-full bg-white flex mb-6">
      <section className="flex flex-row items-start overflow-x-scroll no-scrollbar whitespace-nowrap">
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
        {/* {data.styles.map((style: StyleCategoryListType) => (
          <div
            key={style.styleId}
            className="px-8 py-5 mt-2 mr-2 rounded-md relative"
            style={{
              backgroundImage: `url(${style.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="rounded-md"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            />
            <p className="text-white font-semibold relative"> {style.name}</p>
          </div>
        ))} */}
      </section>
    </section>
  )
}
