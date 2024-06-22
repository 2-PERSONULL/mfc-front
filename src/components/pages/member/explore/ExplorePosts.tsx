/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { PartnerPostsByCategoryType } from '@/types/partnerPostsByCategoryType'
import Modal from '@/components/common/Modal'
import ExplorePostDetail from './ExplorePostDetail'

export default function ExplorePosts({
  postsData,
}: {
  postsData: PartnerPostsByCategoryType
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [partnerId, setPartnerId] = useState<string>('')
  const [postId, setPostId] = useState<number>(0)

  const handleClickPost = (partnerValue: string, postValue: number) => {
    setPartnerId(partnerValue)
    setPostId(postValue)
    setIsModalOpen(true)
  }
  return (
    <>
      <section className="w-full min-h-screen mt-3">
        <div className="grid grid-cols-2 w-full text-center gap-5">
          {postsData.posts.map((post) => (
            <div
              key={post.postId}
              onClick={() => handleClickPost(post.partnerId, post.postId)}
              className="w-[100%] relative min-h-[200px] "
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                objectFit="cover"
                className="absolute rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && (
        <Modal title="탐색" closeModal={() => setIsModalOpen(false)}>
          <ExplorePostDetail partnerId={partnerId} postId={postId} />
        </Modal>
      )}
    </>
  )
}
