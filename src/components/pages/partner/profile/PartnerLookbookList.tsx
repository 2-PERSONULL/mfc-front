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

  useEffect(() => {
    setPostList(initialData)
    setIsLastData(isLast)
    setOffset(1)
  }, [initialData])

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
    // window.scrollTo(0, 100)
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
    return `/partner/posts`
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
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        onClick={() => router.push('/partner/posts/edit')}
        className="w-full h-[190px] border-dashed border-[3px] object-cover rounded-[10px] flex items-center justify-center"
      >
        <p className="text-[#dbdcdf]">+ Add</p>
      </button>

      {postList.map((post) => (
        <button
          key={post.postId}
          type="button"
          onClick={() => onClickPost(post.postId)}
          className="relative min-h-[190px] mb-1"
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
    </div>
  )
}
