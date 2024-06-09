import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useToast from '@/stores/toast'
import { uploadImage } from '@/utils/uploadImage'

export default function ReqAddMyImage({
  setMyImage,
}: {
  setMyImage?: (value: string[]) => void
}) {
  const [count, setCount] = useState<number>(0)
  const [myImgs, setMyImgs] = useState<string[]>([])
  const { showToast } = useToast()
  const myImgRef = useRef<React.RefObject<HTMLImageElement>[]>([])

  useEffect(() => {
    setMyImage?.(myImgs)
  }, [myImgs])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const fileName = await uploadImage(file, 'my-image')
      if (myImgs.includes(fileName)) {
        showToast({
          content: '이미 업로드된 이미지입니다.',
          type: 'warning',
        })
        return
      }
      if (myImgs.length >= 3) {
        showToast({
          content: '이미지는 최대 3개까지 업로드할 수 있습니다.',
          type: 'warning',
        })
        return
      }
      setMyImgs((prevImgs) => {
        const newImgs = [...prevImgs, fileName]
        myImgRef.current = newImgs.map((_, i) => myImgRef.current[i] || null)
        return newImgs
      })
      setCount((prevCount) => prevCount + 1)
    }
  }

  const handleDelete = (idx: number) => {
    setMyImgs((prevImgs) => {
      const newImgs = prevImgs.filter((_, i) => i !== idx)
      myImgRef.current = newImgs.map((_, i) => myImgRef.current[i] || null)
      return newImgs
    })
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div>
      <p className="text-xs pb-1">내 이미지 ({count}/3)</p>
      <div className="flex-row flex items-center gap-1">
        <label
          htmlFor="userImgFile"
          className="w-28 min-h-24 py-10 rounded-lg border-dashed border-[2px] border-gray-600 flex items-center justify-center flex-shrink-0"
        >
          <p>+</p>
        </label>
        <input
          id="userImgFile"
          type="file"
          onChange={handleChange}
          accept="image/*"
          className="py-1"
          style={{ display: 'none' }}
        />
        <ul className="flex gap-2 justify-start overflow-x-scroll whitespace-nowrap">
          {myImgs.map((img, idx) => (
            <li key={idx} className="flex h-24 relative flex-shrink-0">
              <Image
                src={img}
                width={112}
                height={96}
                style={{ width: '112px', height: '96px' }}
                alt="사용자 이미지"
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
