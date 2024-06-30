'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavigationType } from '@/types/navigationTypes'
import NavigationData from '@/libs/navigationData'

const BottomNav = () => {
  const [role, setRole] = useState<string>('user')

  useEffect(() => {
    const memberRole = localStorage.getItem('role')?.toLowerCase()

    if (memberRole) {
      setRole(memberRole)
    } else {
      setRole(role)
    }
  }, [])

  const pathname = usePathname()
  const active = pathname.replace(/\/(partner|user)/, '')
  return (
    <nav className="w-full z-[30] fixed bottom-0 pb-10 pt-5 px-2 drop-shadow-[0_-4px_3px_rgba(0,0,0,0.07)] bg-white flex flex-row justify-around items-center">
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
    </nav>
  )
}

export default BottomNav
