/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerPostsByCategoryType } from '@/types/partnerPostsByCategoryType'

export default function ExplorePosts({
  postsData,
}: {
  postsData: PartnerPostsByCategoryType
}) {
  return (
    <>
      <section className="w-full min-h-screen mt-3">
        <div className="grid grid-cols-2 w-full text-center gap-5">
          {postsData.posts.map((post) => (
            <Link
              href={`/user/coordinator/${post.partnerId}/posts/${post.postId}`}
              key={post.postId}
              className="w-[100%] relative min-h-[200px] "
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                objectFit="cover"
                className="absolute rounded-md"
              />
            </Link>
          ))}
        </div>
      </section>
      {/* {isModalOpen && (
        <Modal title="탐색" closeModal={() => setIsModalOpen(false)}>
          <ExplorePostDetail partnerId={partnerId} postId={postId} />
        </Modal>
      )} */}
    </>
  )
}
