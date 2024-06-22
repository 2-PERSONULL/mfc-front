import React, { useRef, useState } from 'react'
import Image from 'next/image'
import useToast from '@/stores/toast'
import { uploadImage } from '@/utils/uploadImage'

export default function EditRefImg({
  title,
  id,
  refImgs,
}: {
  title: string
  id: string
  refImgs: string[]
}) {
  const [count, setCount] = useState<number>(refImgs.length)
  const [imgs, setImgs] = useState<string[]>(refImgs)
  const { showToast } = useToast()
  const imgRef = useRef<React.RefObject<HTMLImageElement>[]>([])

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
    <section>
      <p className="text-xs pb-1">
        {title} ({count}/3)
      </p>
      <section className="flex-row flex items-center gap-1">
        <label
          htmlFor={id}
          className="w-28 min-h-[110px] py-10 rounded-lg border-dashed border-[2px] border-[#d1d5db] flex items-center justify-center flex-shrink-0"
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
                className="absolute top-0 right-0 p-1 rounded-full shadow-md bg-slate-100"
              >
                <Image
                  src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/close.svg"
                  alt="close"
                  width={0}
                  height={0}
                  style={{ width: '18px', height: '18px' }}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        {imgs.map((img, index) => (
          <input
            key={index}
            type="hidden"
            name={id === 'refImgFile' ? 'referenceImages' : 'myImages'}
            value={img}
          />
        ))}
      </section>
    </section>
  )
}
