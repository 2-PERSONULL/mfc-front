'use client'

import React, { useState, useRef } from 'react'

import Image from 'next/image'
import { uploadImage, deleteAndUpdateImage } from '@/utils/uploadImage'
import LoadingText from '@/components/common/LoadingText'

export default function UploadStyle({
  image,
  setImage,
}: {
  image: string | null
  setImage: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [loading, setLoading] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    if (!targetFiles) return

    const targetFilesArray = Array.from(targetFiles)
    const file = targetFilesArray[0]

    setImage('')
    setLoading(true)

    // 만약 파일이 있다면 삭제하고 업로드한다.
    if (image) {
      const fileName = await deleteAndUpdateImage(image, file, 'style')
      setLoading(false)
      setImage(fileName)
      return
    }

    const fileName = await uploadImage(file, 'style')
    setLoading(false)
    setImage(fileName)
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="border-dashed border-2 rounded-[10px] w-[90%] h-[300px] flex flex-col items-center justify-center">
          <LoadingText message="등록중입니다" color="black" />
        </div>
      )
    }

    return (
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
          priority
        />
        <p className="text-gray-500 text-[16px] font-semibold mt-[5px]">
          upload your style!
        </p>
      </button>
    )
  }

  return (
    <div className="w-full mt-[15px]">
      <div className="flex justify-center">
        {!image ? (
          renderContent()
        ) : (
          <div className="rounded-[10px] w-[90%] h-[300px] relative">
            <Image
              src={image}
              alt="스타일 이미지"
              fill
              sizes="(max-width: 100px) 100vw, 100px"
              className="object-contain"
            />
            <button type="button" onClick={() => inputRef.current?.click()}>
              <input
                type="file"
                ref={inputRef}
                onChange={handleChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/edit.svg"
                alt="edit icon"
                width={26}
                height={26}
                className="absolute top-[-10px] right-5"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
