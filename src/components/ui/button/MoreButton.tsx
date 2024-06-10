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

interface MoreButtonType {
  text: string
  clickHandler: () => void
}

export default function MoreButton({ actions }: { actions: MoreButtonType[] }) {
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
        {actions && (
          <MenubarContent className="w-[50px]">
            {actions.map((action: MoreButtonType, index) => (
              <React.Fragment key={action.text}>
                <MenubarItem key={action.text} onClick={action.clickHandler}>
                  {action.text}
                </MenubarItem>
                {index < actions.length - 1 && <MenubarSeparator />}
              </React.Fragment>
            ))}
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>
  )
}
