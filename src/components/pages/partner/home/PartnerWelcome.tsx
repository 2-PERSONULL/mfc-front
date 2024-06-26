import React from 'react'

export default function PartnerWelcome({ nickname }: { nickname: string }) {
  return (
    <div className="px-3 flex items-center justify-between">
      <strong className="fadeIn text-[28px]">
        <span className="text-[#BDBDBD]">안녕하세요, </span>
        <br />
        <span>
          {nickname.length > 10 ? `${nickname.substring(0, 10)}...` : nickname}{' '}
          파트너님
        </span>
      </strong>
    </div>
  )
}
