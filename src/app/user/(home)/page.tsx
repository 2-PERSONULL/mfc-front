import React from 'react'
import HomeBanner from '@/components/pages/member/home/HomeBanner'

export default async function UserHome() {
  return (
    <main className="w-full min-h-screen">
      <HomeBanner />
      <section className="px-5 w-full h-[500px] bg-red-300">
        <div>
          <p className="text-lg text-end">이런 스타일 어떠신가요?</p>
        </div>
      </section>
      <section className="px-5 w-full h-[500px] bg-blue-300">
        <div>
          <p className="text-lg text-start">이벤트 파트</p>
        </div>
      </section>
      <section className="px-5 w-full h-[500px] bg-green-300">
        <div>
          <p className="text-lg text-start">팔로우한 파트너 소식?</p>
        </div>
      </section>
    </main>
  )
}
