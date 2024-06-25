import React from 'react'

export default function HomeSectionTitle({
  username,
  text,
}: {
  username: string
  text: string
}) {
  return (
    <section>
      <p className="text-2xl text-start font-semibold pt-8 pb-2">
        <span className="text-slate-500">{username}</span>
        {text}
      </p>
    </section>
  )
}
