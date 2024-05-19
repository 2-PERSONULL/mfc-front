'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { RiHome3Fill } from 'react-icons/ri'
import { FaRankingStar } from 'react-icons/fa6'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { IoChatboxEllipses } from 'react-icons/io5'
import { GoPersonFill } from 'react-icons/go'

const BottomNav = () => {
  const role = 'partner'
  const pathname = usePathname()
  const active = pathname.replace(/\/(partner|user)/, '')

  return (
    <div className="w-full h-[82px] sticky bottom-0 pb-10 pt-4 px-2 drop-shadow-[0_-4px_3px_rgba(0,0,0,0.07)] bg-white flex flex-row justify-around items-center">
      <Link
        href={`/${role}`}
        className={`font-Pretendard  ${
          active === '' ? 'text-[#000000]' : 'text-[#969696]'
        }  flex-col text-[9px] flex items-center truncate font-medium`}
      >
        <RiHome3Fill size="23" color={active === '' ? '#000000' : '#969696'} />
        HOME
      </Link>
      <Link
        href={`/${role}/ranking`}
        className={`font-Pretendard  ${
          active === '/ranking' ? 'text-[#000000]' : 'text-[#969696]'
        }  flex-col text-[9px] flex items-center truncate font-medium`}
      >
        <FaRankingStar
          size="23"
          color={active === '/ranking' ? '#000000' : '#969696'}
        />
        RANK
      </Link>
      <Link
        href={`/${role}/explore`}
        className={`font-Pretendard  ${
          active === '/explore' ? 'text-[#000000]' : 'text-[#969696]'
        }  flex-col text-[9px] flex items-center truncate font-medium`}
      >
        <PiMagnifyingGlassBold
          size="23"
          color={active === '/explore' ? '#000000' : '#969696'}
        />
        EXPLORE
      </Link>
      <Link
        href={`/${role}/chats`}
        className={`font-Pretendard  ${
          active === '/chats' ? 'text-[#000000]' : 'text-[#969696]'
        }  flex-col text-[9px] flex items-center truncate font-medium`}
      >
        <IoChatboxEllipses
          size="23"
          color={active === '/chats' ? '#000000' : '#969696'}
        />
        CHAT
      </Link>
      <Link
        href={`/${role}/mypage`}
        className={`font-Pretendard  ${
          active === '/mypage' ? 'text-[#000000]' : 'text-[#969696]'
        }  flex-col text-[9px] flex items-center truncate font-medium`}
      >
        <GoPersonFill
          size="23"
          color={active === '/mypage' ? '#000000' : '#969696'}
        />
        MY
      </Link>
    </div>
  )
}

export default BottomNav
