import React from 'react'
import Image from 'next/image'
import HomeSectionTitle from './HomeSectionTitle'
import DummyTips from '@/libs/tipData'

export default function HomeEventSection({ username }: { username?: string }) {
  return (
    <section className="px-5 w-full min-h-full">
      <HomeSectionTitle username={username} text="을 위한 소식" />
      <ul className="flex flex-col gap-5 pt-3">
        {DummyTips.map((tip) => (
          <>
            <li
              key={tip.id}
              className="flex flex-row items-center justify-between gap-3"
            >
              <Image
                src={tip.imageUrl}
                alt={tip.title}
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-5 items-start justify-center">
                <p className="font-bold">{tip.title}</p>
                <p className="text-xs text-wrap">
                  {tip.context.length > 50
                    ? `${tip.context.substring(0, 50)}...`
                    : tip.context}
                </p>
              </div>
            </li>
            <div className="bg-gray-200 w-full h-[2px]" />
          </>
        ))}
      </ul>
    </section>
  )
}
