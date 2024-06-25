'use client'

import React from 'react'
import Link from 'next/link'

export default function BottomFixedTransButton({
  title,
  link,
  clickHandler,
}: {
  title: string
  link?: string
  clickHandler?: () => void
}) {
  return (
    <section className="fixed bottom-0 left-0 right-0 h-[100px] flex justify-center pt-5 z-10">
      {clickHandler && (
        <button
          type="button"
          onClick={clickHandler}
          className="w-[90%] bg-black h-[60px] rounded-full"
        >
          <div className="h-full flex justify-center items-center">
            <span className="text-[17px] text-white font-semibold ">
              {title}
            </span>
          </div>
        </button>
      )}

      {link && (
        <Link href={link} className="w-[90%] bg-black h-[60px] rounded-full">
          <div className="h-full flex justify-center items-center">
            <span className="text-[17px] text-white font-semibold ">
              {title}
            </span>
          </div>
        </Link>
      )}
    </section>
  )
}
