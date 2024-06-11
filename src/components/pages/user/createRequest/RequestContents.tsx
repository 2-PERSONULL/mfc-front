import React from 'react'

export default function RequestContents({
  setDetail,
}: {
  setDetail: (value: string) => void
}) {
  return (
    <div>
      <p className="text-xs pb-1">
        요청 내용
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <textarea
        onChange={(e) => setDetail(e.target.value)}
        className="pl-2 border border-black w-full h-[6rem] py-1 rounded-lg"
        style={{ resize: 'none' }}
      />
    </div>
  )
}
