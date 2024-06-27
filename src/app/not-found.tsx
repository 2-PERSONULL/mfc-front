'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="bg-white w-full h-screen justify-center items-center flex flex-col">
      <Image src="/icons/mfc-2.svg" alt="404" width={100} height={100} />
      <p className="font-Pretendard font-bold text-[20px] mt-[30px] text-center">
        원하셨던
        <br />
        페이지가 아닌가요?
      </p>
      <p className="font-Pretendard text-[#969696] text-[15px] mt-[15px] text-center">
        방문하신 페이지가
        <br />
        변경 혹은 삭제되었을 수 있어요.
        <br />
        이전 페이지에서 다시 한번 시도해 주세요.
      </p>

      <div className="mt-[30px] justify-center flex">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-white px-[50px] py-[20px] bg-[#000000] text-[15px] rounded-lg font-Pretendard"
        >
          이전으로 돌아가기
        </button>
      </div>
    </div>
  )
}
