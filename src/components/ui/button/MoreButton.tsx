import React from 'react'
import Image from 'next/image'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'

export default function MoreButton() {
  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger>
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}icon/more.svg`}
            alt="more menu icon"
            width={25}
            height={25}
          />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>수정</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>삭제</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
