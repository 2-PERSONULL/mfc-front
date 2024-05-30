'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ChooseRole() {
  const [role, setRole] = useState('USER')
  const handleSaveRole = (data: string) => {
    localStorage.setItem('role', data)
  }
  useEffect(() => {
    handleSaveRole(role)
  }, [role])

  return (
    <div className="flex flex-col gap-4 max-h-full max-w-full px-6 pt-28 content-around justify-between">
      <p className="text-2xl font-black text-center">역할을 선택하세요.</p>
      <div className="flex items-center justify-center">
        <div className="mt-5 w-[80%] h-16 bg-black rounded-full flex items-center justify-center text-center font-bold">
          <button
            onClick={() => setRole('USER')}
            type="button"
            className={`${role === 'USER' ? 'bg-white text-black font-black' : 'bg-black text-white'} 
            w-1/2 ml-2 mr-1 h-12 rounded-full flex items-center justify-center`}
          >
            <p>사용자</p>
          </button>
          <button
            onClick={() => setRole('PARTNER')}
            type="button"
            className={`${role === 'PARTNER' ? 'bg-white text-black font-black' : 'bg-black text-white'} 
            w-1/2 mr-2 ml-1 h-12 rounded-full flex items-center justify-center`}
          >
            <p>파트너</p>
          </button>
        </div>
      </div>
      <p className="whitespace-pre-wrap text-center text-gray-400 text-sm">
        지금 바로 마.패.코에서
        <br />
        {role === 'USER'
          ? '나만의 코디네이터를 만나 보세요.'
          : '당신의 능력에 날개를 달아보세요.'}
      </p>
      <div className="flex items-end justify-center mt-12">
        {role === 'USER' ? (
          <>
            <Image
              priority
              width={0}
              height={0}
              src="/images/user-signup-man.svg"
              alt="user-man"
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              priority
              width={0}
              height={0}
              src="/images/user-signup-woman.svg"
              alt="user-woman"
              style={{ width: 'auto', height: 'auto' }}
            />
          </>
        ) : (
          <Image
            priority
            width={0}
            height={0}
            src="/images/partner-signup.svg"
            alt="partner"
            style={{ width: 'auto', height: 'auto' }}
          />
        )}
      </div>
      <div className="absolute bottom-40 left-1/4 w-2/4 px-6">
        <button
          type="submit"
          onClick={() => handleSaveRole(role)}
          className="btn bg-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] border-none w-full text-black font-bold text-lg rounded-full"
        >
          <p>시작하기</p>
        </button>
      </div>
    </div>
  )
}
