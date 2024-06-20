import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'

export default function UserClothesSifo({ href }: { href: string }) {
  return (
    <div className="w-full bg-white pb-1">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">옷 사이즈</p>
        <UserProfileEditButton href={href} />
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex gap-2">
          <p>상의 :</p>
          <p>(사이즈 값)</p>
        </li>
        <li className="flex gap-2">
          <p>하의 :</p>
          <p>(사이즈 값)</p>
        </li>
        <li className="flex gap-2">
          <p>신발 :</p>
          <p>(사이즈 값)</p>
        </li>
      </ul>
      <div className="border border-gray-300 mt-1" />
    </div>
  )
}
