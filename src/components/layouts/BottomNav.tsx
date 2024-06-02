'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavigationType } from '@/types/navigationTypes'
import NavigationData from '@/libs/navigationData'

export interface SessionType {
  expires: string
  user: SessionUserType
}

export interface SessionUserType {
  uuid: string
  accessToken: string
  refreshToken: string
  role: string
}

const BottomNav = () => {
  const role = localStorage.getItem('role')

  const pathname = usePathname()
  const active = pathname.replace(/\/(partner|user)/, '')
  return (
    <div className="w-full h-[82px] fixed bottom-0 pb-10 pt-4 px-2 drop-shadow-[0_-4px_3px_rgba(0,0,0,0.07)] bg-white flex flex-row justify-around items-center">
      {NavigationData.map((nav: NavigationType) => (
        <Link
          href={
            nav.title === 'RANKING' || nav.title === 'SEARCH'
              ? `${nav.url}`
              : `/${role}${nav.url}`
          }
          key={nav.id}
          className={`font-Pretendard  ${
            active === nav.url ? 'text-[#000000]' : 'text-[#969696]'
          }  flex-col text-[9px] flex items-center truncate font-medium`}
        >
          <Image
            src={nav.icon}
            alt={nav.title}
            width={23}
            height={23}
            style={active === nav.url ? { filter: 'invert(100%)' } : {}}
          />
          {nav.title}
        </Link>
      ))}
    </div>
  )
}

export default BottomNav
