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
    const scrollContainer = scrollContainerRef.current // 이 줄은 유지
    if (scrollContainer) {
      // 초기 스크롤 상태를 계산
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      const initialScrollPercentage =
        (scrollContainer.scrollLeft / maxScrollLeft) * 100
      setScrollProgress(initialScrollPercentage)

      // 스크롤 가능 여부를 설정
      setIsScrollable(maxScrollLeft > 0)

      // 스크롤 이벤트 리스너 추가
      scrollContainer.addEventListener('scroll', handleScroll)
    }

    return () => {
      // 이 부분에서는 scrollContainer 변수를 새로 선언할 필요가 없습니다.
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
