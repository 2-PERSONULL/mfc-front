import React from 'react'
import { UserClothesSizeInfoType } from '@/types/userInfoType'

export default function UserClothesSizeInfo({
  sizeInformation,
}: {
  sizeInformation: UserClothesSizeInfoType
}) {
  const translateKey = (key: string) => {
    switch (key) {
      case 'topSize':
        return '상의'
      case 'bottomSize':
        return '하의'
      case 'shoeSize':
        return '신발'
      default:
        return key
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[17px]">옷 사이즈</p>
      <ul className="flex gap-2">
        {sizeInformation &&
          Object.entries(sizeInformation).map(([key, value]) => (
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
    </div>
  )
}
