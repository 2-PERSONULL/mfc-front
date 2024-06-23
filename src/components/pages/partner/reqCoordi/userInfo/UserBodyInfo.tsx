import React from 'react'
import Image from 'next/image'
import { UserBodyInfoType } from '@/types/userInfoType'
import bodytypeData from '@/libs/bodyTypeData'

export default function UserBodyInfo({
  bodyType,
}: {
  bodyType: UserBodyInfoType
}) {
  const translateKey = (key: string) => {
    switch (key) {
      case 'height':
        return '키'
      case 'weight':
        return '체중'
      case 'bodyType':
        return '체형'
      default:
        return key
    }
  }

  const selectedBodyType =
    bodytypeData.find((data) => data.value === bodyType.bodyType) || null

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[17px]">체형정보</p>
      <ul className="flex gap-2">
        {bodyType &&
          Object.entries(bodyType).map(([key, value]) => (
            <li
              key={key}
              className="py-3 px-4 text-[14px] rounded-[14px] bg-[#F5F5F5]"
            >
              <p>
                {translateKey(key)}: {value !== null ? value : '정보 없음'}
              </p>
            </li>
          ))}
      </ul>

      {selectedBodyType && (
        <section className="flex flex-col items-center">
          <Image
            src={selectedBodyType.imageUrl}
            alt={selectedBodyType.value}
            width={0}
            height={0}
            priority
            style={{ width: '30dvh' }}
          />
          <p className="text-sm text-center font-semibold text-gray-400">
            {selectedBodyType.description}
          </p>
        </section>
      )}
    </div>
  )
}
