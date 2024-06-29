'use client'

import React, { useEffect, useRef, useState } from 'react'
import HomePartnerPost from './HomePartnerPost'
import HomeSectionTitle from './HomeSectionTitle'
import { HomePostsType } from '@/types/HomePostsType'
import { PopularPartnerPostsType } from '@/types/popularPartnerPostsType'

export default function HomePartnerPosts({
  posts,
  username,
}: {
  posts: HomePostsType[] | PopularPartnerPostsType[]
  username?: string
}) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollable, setIsScrollable] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const { scrollLeft } = scrollContainer
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      const scrollPercentage = (scrollLeft / maxScrollLeft) * 100
      setScrollProgress(scrollPercentage)
    }
  }
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      const initialScrollPercentage =
        (scrollContainer.scrollLeft / maxScrollLeft) * 100
      setScrollProgress(initialScrollPercentage)
      setIsScrollable(maxScrollLeft > 0)
      scrollContainer.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [posts])

  return (
    <section className="px-5 w-full min-h-full bg-white">
      <HomeSectionTitle
        username={username || undefined}
        text={username ? '님이 팔로우한 파트너' : '금주의 인기 파트너'}
      />
      <div className="relative">
        <section
          className="flex flex-col gap-5 overflow-x-scroll pb-5"
          ref={scrollContainerRef}
        >
          {posts.length !== 0 ? (
            <ul className="flex gap-5 whitespace-nowrap">
              {posts.map((info: HomePostsType) => (
                <li
                  key={info.postId}
                  className="min-w-[200px] shadow-lg rounded-lg"
                >
                  <HomePartnerPost content={info} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center mt-8 text-gray-500">
              조회된 데이터가 없습니다.
            </p>
          )}
        </section>
        {isScrollable && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
            <div
              className="h-1 bg-black"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
