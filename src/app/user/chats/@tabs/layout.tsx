import React from 'react'

export default function UserChatListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="mt-[50px] mb-[120px]">{children}</main>
}
