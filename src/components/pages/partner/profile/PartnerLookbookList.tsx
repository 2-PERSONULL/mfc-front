import React from 'react'
import Image from 'next/image'

interface IPost {
  postId: number
  imageUrl: string
  alt: string
}

export default function PartnerLookbookList({
  postList,
}: {
  postList: IPost[]
}) {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {postList.map((post) => (
        <div key={post.postId} className="relative h-[190px] mb-1">
          <Image
            src={post.imageUrl}
            alt={post.alt}
            fill
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover rounded-[12px] h-full w-full"
          />
        </div>
      ))}
    </ul>
  )
}
