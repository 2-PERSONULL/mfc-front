import React, { useState, useRef } from 'react'

import Image from 'next/image'
import uploadImage from '@/utils/uploadImage'

export default function UploadStyle() {
  const [image, setImage] = useState<string | null>(
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1716190543851',
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    if (!targetFiles) return

    // if (image) {
    //   if (!confirm('이미지를 변경하시겠습니까?')) return
    // }

    const targetFilesArray = Array.from(targetFiles)
    const file = targetFilesArray[0]

    const fileName = await uploadImage(file, 'style')
    console.log(fileName)
    setImage(fileName)
  }

  return (
    <div className="w-full">
      <div className="flex justify-center">
        {!image ? (
          <button
            onClick={() => inputRef.current?.click()}
            type="button"
            className="border-dashed border-2 rounded-[10px] w-[90%] h-[300px] flex flex-col items-center justify-center"
          >
            <input
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <Image
              src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/gallery.svg"
              alt="gallery icon"
              width={50}
              height={50}
            />
            <p className="text-gray-500 text-[16px] font-semibold mt-[5px]">
              upload your style!
            </p>
          </button>
        ) : (
          <div className="rounded-[10px] w-[90%] h-[300px] relative">
            <Image
              src={image}
              alt="스타일 이미지"
              fill
              sizes="(max-width: 100px) 100vw, 100px"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  )
}
