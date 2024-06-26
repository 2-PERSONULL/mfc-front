import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { HomePostsType } from '@/types/HomePostsType'

export default function HomePartnerPost({
  content,
}: {
  content: HomePostsType
}) {
  return (
    <Link href="/user" className="relative h-full rounded-lg shadow-xl">
      <figure className="relative w-full min-h-[200px] pr-2 rounded-t-lg">
        <Image
          src={content.imageUrl}
          alt={content.imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="absolute rounded-t-lg"
        />
      </figure>
      <figure className="flex pl-3 gap-2 items-center pt-2">
        <Image
          src={content.profileImage}
          alt={content.profileImage}
          width={30}
          height={30}
          className="rounded-full"
        />
        <p>{content.nickname}</p>
      </figure>
      <ul className="w-wull h-[30px] ml-3 mt-2 mb-2 flex flex-row items-center">
        {content.tags.map((tag) => (
          <li
            key={tag.tagId}
            className="text-[10px] text-gray-600 bg-gray-200 rounded-full font-semibold mr-[5px] px-2 py-1"
          >
            {tag.value}
          </li>
        ))}
      </ul>
    </Link>
  )
}
