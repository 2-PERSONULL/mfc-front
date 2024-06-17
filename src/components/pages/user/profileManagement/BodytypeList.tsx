'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import bodytypeData from '@/libs/bodyTypeData'

interface BodyType {
  id: number
  name: string
  value: string
  description: string
  imageUrl: string
}

export default function BodytypeList() {
  const [selectedBodyType, setSelectedBodyType] = useState<BodyType | null>(
    null,
  )

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedData = bodytypeData.find(
      (data) => data.value === e.target.value,
    )
    setSelectedBodyType(selectedData || null)
  }
  return (
    <div className="mt-5">
      <select
        id="bodyType"
        name="bodyType"
        className="relative form-input"
        onChange={handleChange}
        // 화살표 위치 수정 필요
        style={{
          height: '58px',
          borderRadius: '3rem',
          paddingTop: '1.8rem',
          paddingLeft: '1.3rem',
        }}
      >
        <option value="" className="text-gray-400">
          체형을 선택해주세요
        </option>
        {bodytypeData.map((data) => (
          <option key={data.id} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
      <span className="absolute left-11 top-[330px] text-sm font-bold text-gray-500">
        체형
      </span>
      {selectedBodyType && (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={selectedBodyType.imageUrl}
            alt={selectedBodyType.value}
            width={0}
            height={0}
            priority
            style={{ width: '80vmin', height: '80vmin' }}
          />
          <p className="text-sm text-center font-semibold text-gray-400">
            {selectedBodyType.description}
          </p>
        </div>
      )}
    </div>
  )
}
