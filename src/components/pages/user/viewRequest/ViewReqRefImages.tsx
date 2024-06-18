import React from 'react'

export default function ViewReqRefImages({
  title,
  refImgs,
}: {
  title: string
  refImgs: string[]
}) {
  return (
    <>
      <p className="text-base text-gray-400">{title}</p>
      <div className="flex overflow-x-scroll whitespace-nowrap">
        {refImgs ? (
          <ul className="flex justify-start gap-2">
            {refImgs.map((img, idx) => (
              <li key={idx} className=" w-[112px] h-[110px]">
                <p>이미지</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>참고 스타일 이미지가 없습니다.</p>
        )}
      </div>
    </>
  )
}
