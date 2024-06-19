'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import SliderModal from '@/components/common/SliderModal'
import {
  deleteAndUpdateImage,
  deleteImage,
  uploadImage,
} from '@/utils/uploadImage'
import { updatePartnerProfileImage } from '@/actions/partner/PartnerProfileUpdate'

export default function UserInfo() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string>(basicImage)

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
    <>
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
      <section className="w-full bg-white py-3 flex gap-5 px-6">
        <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
          <Image
            src={image}
            alt="empty profile image"
            width={0}
            height={0}
            style={{ width: '4.5rem', height: '4.5rem' }}
            priority
            className="rounded-full border"
          />
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/edit.svg"
            alt="edit icon"
            width={20}
            height={20}
            className="absolute left-20 top-[6.8rem]"
          />
        </button>
        <div className="flex flex-col justify-center">
          <p className="text-[18px] font-bold mr-2">유저 이름</p>
        </div>
      </section>
    </>
  )
}
