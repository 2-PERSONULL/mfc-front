'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'

export default function ChangeRole() {
  // const router = useRouter()
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    setRole(localStorage.getItem('role'))
  }, [])

  // const changeRole = () => {
  //   if (role === 'PARTNER') {
  //     localStorage.removeItem('role')
  //     localStorage.setItem('role', 'USER')
  //     setRole('USER')
  //     // router.replace('/user/mypage')
  //   } else {
  //     localStorage.removeItem('role')
  //     localStorage.setItem('role', 'PARTNER')
  //     setRole('PARTNER')
  //     // router.replace('/partner/mypage')
  //   }
  // }
  return (
    <section className="flex border border-gray-200 rounded-[6px] mx-5 mt-3 h-[70px] items-center px-4">
      {/* onClick={() => changeRole()} */}
      <button type="button" className="flex">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/change-role.svg"
          alt="logout"
          width={24}
          height={24}
          className="mr-4"
        />
        <p> {role === 'PARTNER' ? '고객으로' : '파트너로'} 전환</p>
      </button>
    </section>
  )
}
