import React from 'react'

import NotificationIcon from '../ui/icons/NotificationIcon'
import MenuLineIcon from '../ui/icons/MenuLineIcon'

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <div className="sticky z-[200] top-0 h-[60px] px-5 py-[15px] flex justify-between bg-black">
      <h1 className="text-white text-[18px] font-bold align-middle flexitems-center">
        {title}
      </h1>
      <div className="flex gap-2">
        <NotificationIcon />
        <MenuLineIcon />
      </div>
    </div>
  )
}

export default TitleHeader
