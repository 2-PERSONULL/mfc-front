'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import bodytypeData from '@/libs/bodyTypeData'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

  const handleChange = (value: string) => {
    const selectedData = bodytypeData.find((data) => data.value === value)
    setSelectedBodyType(selectedData || null)
  }
  return (
    <section className="mt-5">
      <div className="relative w-full">
        <Select onValueChange={handleChange}>
          <input
            type="hidden"
            name="bodyType"
            value={selectedBodyType ? selectedBodyType.value : ''}
          />
          <SelectTrigger
            id="bodyType"
            name="bodyType"
            value={selectedBodyType?.value || ''}
            className="relative w-full rounded-full border border-gray-300"
            style={{
              height: '3.5rem',
              borderRadius: '3rem',
              paddingTop: '1.8rem',
              paddingLeft: '1.3rem',
            }}
          >
            <SelectValue placeholder="체형을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            {bodytypeData.map((data) => (
              <SelectItem key={data.id} value={data.value}>
                {data.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="absolute left-5 top-2 text-sm font-bold text-gray-500">
          체형
        </span>
      </div>
      {selectedBodyType && (
        <section className="flex flex-col items-center mt-5">
          <Image
            src={selectedBodyType.imageUrl}
            alt={selectedBodyType.value}
            width={0}
            height={0}
            priority
            style={{ width: '40dvh', height: '38dvh' }}
          />
          <p className="text-sm text-center font-semibold text-gray-400">
            {selectedBodyType.description}
          </p>
        </section>
      )}
    </section>
  )
}
