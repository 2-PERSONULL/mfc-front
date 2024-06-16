'use client'

import React from 'react'
import bodytypeData from '@/libs/bodyTypeData'

export default function BodytypeList() {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-lg font-semibold">체형</span>
      <div className="flex flex-col gap-5 text-start">
        {bodytypeData.map((data) => (
          <label
            key={data.id}
            htmlFor={data.value}
            className="flex-shrink-0 flex  items-center text-lg"
          >
            <input
              type="radio"
              id={data.value}
              name="bodyType"
              value={data.value}
              className="mr-2"
            />
            <p className="flex flex-col">
              {data.name}
              <span className="text-gray-400 text-xs">{data.description}</span>
            </p>
          </label>
        ))}
      </div>
    </div>
  )
}
