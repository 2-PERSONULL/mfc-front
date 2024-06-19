'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { PartnerPostListType } from '@/types/partnerPostTypes'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import useObserver from '@/hooks/useObserver'

export default function PartnerLookbookList({
  initialData,
  isLast,
  fetchNum,
}: {
  initialData: PartnerPostListType[]
  isLast: boolean
  fetchNum: number
}) {
  const router = useRouter()
  const pathName = usePathname()
  const [offset, setOffset] = useState(1)
  const [postList, setPostList] = useState<PartnerPostListType[]>(initialData)
  const [isLastData, setIsLastData] = useState(isLast)
  const [isScrollable, setIsScrollable] = useState(false)

  const setStoredData = async () => {
    const savedPosts = sessionStorage.getItem('POSTS')
    const savedCurrentPage = sessionStorage.getItem('CURRENT_PAGE')
    if (!savedCurrentPage || !savedPosts) return

    setPostList(JSON.parse(savedPosts))
    setOffset(parseInt(savedCurrentPage, 10))
    sessionStorage.removeItem('POSTS')
    sessionStorage.removeItem('CURRENT_PAGE')
  }

  useEffect(() => {
    setStoredData()
    setIsScrollable(true)
  }, [])

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('SCROLL_HEIGHT')
    if (!isScrollable || !savedScrollPosition) return
    window.scrollTo(0, parseInt(savedScrollPosition, 10))
    sessionStorage.removeItem('SCROLL_HEIGHT')
  }, [isScrollable])

  const getPathName = () => {
    if (pathName.startsWith('/user')) {
      return `${pathName.replace('/profile', '/posts')}`
    }
    return `/partner/mypage/styles`
  }

  const loadMorePosts = async () => {
    if (isLastData) return

    const { posts, last } = await getPartnerPost('', offset, fetchNum)

    setIsLastData(last)
    setPostList((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: !isLastData,
  })

  const onClickPost = (postId: number) => {
    sessionStorage.setItem('POSTS', JSON.stringify(postList))
    sessionStorage.setItem('SCROLL_HEIGHT', window.scrollY.toString())
    sessionStorage.setItem('CURRENT_PAGE', offset.toString())
    setIsScrollable(false)

    router.push(`${getPathName()}/${postId}`)
  }

  return (
    <section className="grid grid-cols-2 gap-1">
      {postList.map((post) => (
        <button
          key={post.postId}
          type="button"
          onClick={() => onClickPost(post.postId)}
          className="relative h-[190px] mb-1"
        >
          <Image
            src={post.imageUrl}
            alt={post.alt}
            fill
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover rounded-[12px] h-full w-full"
          />
        </button>
      ))}
      <div ref={observerRef} />
    </section>
  )
}
