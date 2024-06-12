'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { uploadImage } from '@/utils/uploadImage'
import useToast from '@/stores/toast'

export default function ReqAddImage({
  title,
  id,
  setImages,
}: {
  title: string
  id: string
  setImages: (value: string[]) => void
}) {
  const [count, setCount] = useState<number>(0)
  const [imgs, setImgs] = useState<string[]>([])
  const { showToast } = useToast()
  const imgRef = useRef<React.RefObject<HTMLImageElement>[]>([])

  useEffect(() => {
    setImages?.(imgs)
  }, [imgs])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const fileName = await uploadImage(file, 'reference')
      if (imgs.length >= 3) {
        e.preventDefault()
        showToast({
          content: '이미지는 최대 3개까지 업로드할 수 있습니다.',
          type: 'warning',
        })
        return
      }
      if (imgs.includes(fileName)) {
        e.preventDefault()
        showToast({
          content: '이미 업로드된 이미지입니다.',
          type: 'warning',
        })
        return
      }
      setImgs((prevImgs) => {
        const newImgs = [...prevImgs, fileName]
        imgRef.current = newImgs.map((_, i) => imgRef.current[i] || null)
        return newImgs
      })
      setCount((prevCount) => prevCount + 1)
    }
  }

  const handleDelete = (idx: number) => {
    setImgs((prevImgs) => {
      const newImgs = prevImgs.filter((_, i) => i !== idx)
      imgRef.current = newImgs.map((_, i) => imgRef.current[i] || null)
      return newImgs
    })
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div>
      <p className="text-xs pb-1">
        {title} ({count}/3)
      </p>
      <div className="flex-row flex items-center gap-1">
        <label
          htmlFor={id}
          className="w-28 min-h-[110px] py-10 rounded-lg border-dashed border-[2px] border-gray-600 flex items-center justify-center flex-shrink-0"
        >
          <p>+</p>
        </label>
        <input
          id={id}
          type="file"
          onChange={handleChange}
          accept="image/*"
          className="py-1"
          style={{ display: 'none' }}
        />
        <ul className="flex gap-2 justify-start overflow-x-scroll whitespace-nowrap">
          {imgs.map((img, idx) => (
            <li key={idx} className="flex h-24 relative flex-shrink-0">
              <Image
                src={img}
                width={100}
                height={96}
                style={{ width: '100px', height: '96px' }}
                alt="참고 스타일 이미지"
              />
              <button
                type="button"
                onClick={() => handleDelete(idx)}
                className="absolute top-1 right-1 px-1 bg-black rounded-full shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  className="inline-block w-4 h-4 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
