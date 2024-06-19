import React from 'react'

export default function ViewReqMyImages({
  title,
  myImgs,
}: {
  title: string
  myImgs: string[]
}) {
  return (
    <section>
      <p className="text-base text-gray-400">{title}</p>
      <div className="flex overflow-x-scroll whitespace-nowrap">
        {myImgs ? (
          <ul className="flex justify-start gap-2">
            {myImgs.map((img, idx) => (
              <li key={idx} className=" w-[112px] h-[110px]">
                <p>이미지</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>참고 스타일 이미지가 없습니다.</p>
        )}
      </div>
    </section>
  )
}
