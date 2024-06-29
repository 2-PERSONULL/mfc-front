'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import {
  uploadImage,
  deleteImage,
  deleteAndUpdateImage,
} from '@/utils/uploadImage'
import SliderModal from '@/components/common/SliderModal'
import { updatePartnerProfileImage } from '@/actions/partner/PartnerProfileUpdate'
import useToast from '@/stores/toast'

export default function ProfileImage({
  profileImage,
}: {
  profileImage: string
}) {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  const { showToast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string>(
    !profileImage ? basicImage : profileImage,
  )

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
      showToast({ content: '프로필 이미지가 변경되었습니다.', type: 'success' })
      return
    }

    const fileName = await uploadImage(file, 'profile')
    setImage(fileName)
    updatePartnerProfileImage(fileName)
    showToast({ content: '프로필 이미지가 변경되었습니다.', type: 'success' })
  }

  const handleBasicImage = async () => {
    setImage(basicImage)
    await deleteImage(image)
    updatePartnerProfileImage('')
    showToast({ content: '프로필 이미지가 변경되었습니다.', type: 'success' })
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
            <li
              className={`w-full px-5 py-3 ${image !== basicImage ? 'border-b-2 border-b-gray-200' : ''}`}
            >
              사진 등록하기
            </li>
          </button>
          {image !== basicImage && (
            <button type="button" onClick={handleBasicImage}>
              <li className="w-full px-5 py-3">기본 이미지로 변경</li>
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

      <div className="pl-6">
        <div
          className="w-[100px] h-[100px] relative"
          role="presentation"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image}
            alt="profile image"
            fill
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover rounded-full mr-1"
          />

          <button type="button">
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
    </div>
  )
}
