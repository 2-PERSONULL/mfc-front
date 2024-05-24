'use client'

import React, { useEffect, useState } from 'react'

export default function ChangeRoleHeader() {
  // 세션에서 역할 가져오는 것으로 바꿔야함
  const role = 'partner'
  const [changeRole, setChangeRole] = useState<boolean>(true)

  useEffect(() => {
    if (!changeRole) {
      // 역할 변경 로직
      console.log('역할 변경 로직')
    }
  }, [changeRole])

  return (
    <div className="w-full h-[50px] bg-black flex items-center justify-between px-5">
      <h1 className="text-white text-[16px] align-middle flex items-center font-Pretendard">
        {role === 'partner' ? '고객으로' : '파트너로'} 전환
      </h1>

      <input
        onChange={() => setChangeRole(!changeRole)}
        type="checkbox"
        className="toggle "
        checked={changeRole}
      />
    </div>
  )
}
