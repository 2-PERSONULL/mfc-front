import React from 'react'

export default function HomeSectionTitle({
  username = '',
  text,
}: {
  username?: string
  text: string
}) {
  return (
    <section>
      <p className="text-xl text-start font-semibold pt-8 pb-2 mb-2">
        <span className="text-slate-500">
          {username.length > 10 ? `${username.substring(0, 10)}...` : username}{' '}
        </span>
        {text}
      </p>
    </section>
  )
}
