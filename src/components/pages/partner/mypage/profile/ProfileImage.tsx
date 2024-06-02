'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  uploadImage,
  deleteImage,
  deleteAndUpdateImage,
} from '@/utils/uploadImage'
import SliderModal from '@/components/common/SliderModal'
import {
  getPartnerProfileImage,
  updatePartnerProfileImage,
} from '@/app/api/partner/PartnerProfile'

export default function ProfileImage() {
  const basicImage = '/images/default-profile.svg'
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string>(basicImage)

  useEffect(() => {
    const fetchProfileImage = async () => {
      const profileImage = await getPartnerProfileImage()
      console.log(profileImage)
      setImage(!profileImage ? basicImage : profileImage)
    }
    fetchProfileImage()
  }, [])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsModalOpen(false)
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    if (!targetFiles) return

    const targetFilesArray = Array.from(targetFiles)
    const file = targetFilesArray[0]

    // 만약 파일이 있다면 삭제하고 업로드한다.
    if (image && image !== basicImage) {
      const fileName = await deleteAndUpdateImage(image, file, 'profile')

      setImage(fileName)
      updatePartnerProfileImage(fileName)
      return
    }

    const fileName = await uploadImage(file, 'profile')
    setImage(fileName)
    updatePartnerProfileImage(fileName)
  }

  const handleBasicImage = async () => {
    setImage(basicImage)
    await deleteImage(image)
    updatePartnerProfileImage('')
    setIsModalOpen(false)
  }

  return (
    <div>
      <SliderModal
        isModalOpen={isModalOpen}
        onChangeModal={() => setIsModalOpen(!isModalOpen)}
        backgroundClose
      >
        <ul className="mx-2 mb-2 bg-white rounded-lg text-center text-gray-600 font-semibold">
          <button
            className="w-full"
            type="button"
            onClick={() => inputRef.current?.click()}
          >
            <input
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <li className="w-full px-5 py-3 border-b-2 border-b-gray-200">
              사진 등록하기
            </li>
          </button>
          {image !== basicImage && (
            <button type="button" onClick={handleBasicImage}>
              <li className="w-full px-5 py-3 border-b-2 border-b-gray-200">
                기본 이미지로 변경
              </li>
            </button>
          )}
        </ul>
        <button
          className="w-full"
          type="button"
          onClick={() => {
            setIsModalOpen(!isModalOpen)
          }}
        >
          <ul className="mx-2 mb-[4vh] bg-white rounded-lg text-center text-gray-600 font-semibold">
            <li className="w-full px-5 py-3">취소</li>
          </ul>
        </button>
      </SliderModal>

      <div className="w-[100px] h-[100px] left-1/2 translate-x-[-50%] relative">
        <Image
          src={image}
          alt="profile image"
          fill
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-cover rounded-full mr-1"
        />

        <button type="button" onClick={() => setIsModalOpen(true)}>
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/edit.svg"
            alt="edit icon"
            width={26}
            height={26}
            className="absolute bottom-2 right-[-5px]"
          />
        </button>
      </div>
    </div>
  )
}