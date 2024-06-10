import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { uploadImage, deleteImage } from '@/utils/uploadImage'
import LoadingModal from '@/components/common/LoadingModal'

export default function StyleGuideImageUpload({
  images,
  setImages,
}: {
  images: string[]
  setImages: (images: string[]) => void
}) {
  const [loading, setLoading] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    if (!targetFiles) return

    const targetFilesArray = Array.from(targetFiles)
    const file = targetFilesArray[0]
    setLoading(true)

    const fileName = await uploadImage(file, 'style-guide')
    setImages([...images, fileName])
    setLoading(false)
  }

  const handleDelete = async (index: number) => {
    const fileName = images[index]
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages)
    await deleteImage(fileName)
  }

  const renderImage = (index: number) => {
    if (images.length <= index) return null
    return (
      <div className="bg-white border border-gray-200 w-full h-[110px] flex items-center justify-center rounded-[4px] relative">
        <Image
          src={images[index]}
          alt="guide image"
          fill
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-contain"
        />
        <button
          type="button"
          onClick={() => handleDelete(index)}
          className="absolute top-[-10px] right-[-6px]"
        >
          <Image
            src="/icons/delete-circle-red.svg"
            alt="delete icon"
            width={26}
            height={26}
          />
        </button>
      </div>
    )
  }

  return (
    <>
      {loading && <LoadingModal message="로딩중입니다" />}

      <div className="flex gap-3">
        {images.length < 3 && (
          <button
            onClick={() => inputRef.current?.click()}
            type="button"
            className="w-full border-dashed border-[2px] object-cover h-[110px] flex items-center justify-center rounded-[4px]"
          >
            <input
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <p className="text-[#dbdcdf]">+ Add</p>
          </button>
        )}

        {renderImage(2)}
        {renderImage(1)}
        {renderImage(0)}

        {images.length === 0 && (
          <>
            <div className="bg-[#EEEEEE] w-full h-[110px] flex items-center justify-center rounded-[4px]">
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/gallery.svg"
                alt="gallery icon"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className="bg-[#EEEEEE] w-full h-[110px] flex items-center justify-center rounded-[4px]">
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/gallery.svg"
                alt="gallery icon"
                width={25}
                height={25}
                priority
              />
            </div>
          </>
        )}

        {images.length === 1 && (
          <div className="w-full h-[110px] flex items-center justify-center rounded-[4px]" />
        )}
      </div>
    </>
  )
}
