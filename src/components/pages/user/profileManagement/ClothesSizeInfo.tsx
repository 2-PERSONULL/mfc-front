'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function ClothesSizeInfo() {
  const router = useRouter()
  const [selectedTopSize, setSelectedTopSize] = useState<number | null>(null)
  const [selectedBottomSize, setSelectedBottomSize] = useState<number | null>(
    null,
  )
  const [shoesSize, setShoesSize] = useState<number | null>(null)

  const handleTopSizeClick = (id: number) => {
    setSelectedTopSize(id)
  }

  const handleBottomSizeClick = (id: number) => {
    setSelectedBottomSize(id)
  }

  const saveHandler = () => {
    console.log('저장')
    console.log(selectedTopSize, selectedBottomSize, shoesSize)
    router.replace('/user/mypage/profile')
  }

  const clothesSizeData = [
    {
      id: 1,
      name: 'XXS',
    },
    {
      id: 2,
      name: 'XS',
    },
    {
      id: 3,
      name: 'S',
    },
    {
      id: 4,
      name: 'M',
    },
    {
      id: 5,
      name: 'L',
    },
    {
      id: 6,
      name: 'XL',
    },
    {
      id: 7,
      name: 'XXL',
    },
  ]
  return (
    <section className="grid gap-10 px-6 mt-5">
      <div className="grid gap-3">
        <p className="text-sm pl-4 font-semibold text-gray-500">상의</p>
        <div className="grid grid-cols-4 gap-3">
          {clothesSizeData.map((data) => (
            <button
              key={data.id}
              type="button"
              onClick={() => handleTopSizeClick(data.id)}
              // 클릭 시 글자 색 변경 부분 수정 필요
              className={`py-2 px-2 rounded-full ${selectedTopSize === data.id ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              <p className="text-gray-500">{data.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <p className="text-sm pl-4 font-semibold text-gray-500">하의</p>
        <div className="grid grid-cols-4 gap-3">
          {clothesSizeData.map((data) => (
            <button
              key={data.id}
              type="button"
              onClick={() => handleBottomSizeClick(data.id)}
              className={`py-2 px-2 rounded-full ${selectedBottomSize === data.id ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              <p className="text-gray-500">{data.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          id="weight"
          name="weight"
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
        <span className="absolute left-11 text-sm font-bold bottom-[310px] text-gray-500">
          신발
        </span>
        <span className="absolute right-12 bottom-[285px] text-gray-500">
          mm
        </span>
      </div>
      <button
        type="submit"
        onClick={saveHandler}
        className="fixed bottom-5  rounded-full w-[90%] h-[50px] bg-black"
      >
        <span className="text-white">저장</span>
      </button>
    </section>
  )
}
