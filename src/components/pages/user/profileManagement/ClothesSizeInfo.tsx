'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import clothesSizeData from '@/libs/clothersSizeData'

interface ClothesSizeType {
  id: number
  name: string
}

export default function ClothesSizeInfo({
  handleSave,
}: {
  handleSave: (formData: FormData) => void
}) {
  const [selectedTopSize, setSelectedTopSize] =
    useState<ClothesSizeType | null>(null)
  const [selectedBottomSize, setSelectedBottomSize] =
    useState<ClothesSizeType | null>(null)
  const [shoesSize, setShoesSize] = useState<number | null>(null)

  const handleTopChange = (value: string) => {
    const selectedData = clothesSizeData.find(
      (data: ClothesSizeType) => data.name === value,
    )
    setSelectedTopSize(selectedData || null)
  }

  const handleBottomChange = (value: string) => {
    const selectedData = clothesSizeData.find(
      (data: ClothesSizeType) => data.name === value,
    )
    setSelectedBottomSize(selectedData || null)
  }

  return (
    <form action={handleSave}>
      <section className="grid gap-10 px-6 mt-5">
        <section className="relative w-full">
          <Select onValueChange={handleTopChange}>
            <input
              type="hidden"
              name="topSize"
              value={selectedTopSize ? selectedTopSize.name : ''}
            />
            <SelectTrigger
              value={selectedTopSize?.name || ''}
              className="relative rounded-full border border-gray-300"
              style={{
                height: '3.5rem',
                borderRadius: '3rem',
                paddingTop: '1.8rem',
                paddingLeft: '1.3rem',
              }}
            >
              <SelectValue placeholder="상의 사이즈를 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {clothesSizeData.map((data: ClothesSizeType) => (
                <SelectItem key={data.id} value={data.name}>
                  {data.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="absolute left-5 top-3 text-sm font-bold text-gray-500">
            상의
          </span>
        </section>
        <section>
          <div className="relative w-full">
            <Select onValueChange={handleBottomChange}>
              <input
                type="hidden"
                name="bottomSize"
                value={selectedBottomSize ? selectedBottomSize.name : ''}
              />
              <SelectTrigger
                value={selectedBottomSize?.name || ''}
                className="relative rounded-full border border-gray-300"
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
                {clothesSizeData.map((data: ClothesSizeType) => (
                  <SelectItem key={data.id} value={data.name}>
                    {data.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="absolute left-5 top-3 text-sm font-bold text-gray-500">
              하의
            </span>
          </div>
        </section>
        <section>
          <div className="relative w-full">
            <input
              type="number"
              id="shoeSize"
              name="shoeSize"
              value={shoesSize || ''}
              onChange={(e) => setShoesSize(Number(e.target.value))}
              placeholder="신발 사이즈를 입력하세요."
              className="form-input relative text-start pl-3"
              style={{
                height: '53px',
                borderRadius: '3rem',
                paddingTop: '1.8rem',
                paddingLeft: '1.3rem',
              }}
            />
            <span className="absolute left-5 text-sm font-bold bottom-6 text-gray-500">
              신발
            </span>
            <span className="absolute right-5 bottom-1 text-gray-500">mm</span>
          </div>
        </section>
        <button
          type="submit"
          className="fixed bottom-5  rounded-full w-[90%] h-[50px] bg-black"
        >
          <span className="text-white">저장</span>
        </button>
      </section>
    </form>
  )
}
