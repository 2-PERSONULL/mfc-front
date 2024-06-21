import React from 'react'
import { Style, StyleCategoryListType } from '@/types/styleCategoryListType'

export default function ExploreCategory({ data }: { data: Style }) {
  return (
    <section className="w-full bg-white h-20 px-5 flex">
      <section className="flex flex-row items-start overflow-x-scroll whitespace-nowrap">
        {data.styles.map((style: StyleCategoryListType) => (
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
        ))}
      </section>
    </section>
  )
}
