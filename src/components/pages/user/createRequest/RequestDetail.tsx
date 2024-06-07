import React from 'react'

export default function RequestDetail({
  setDetail,
}: {
  setDetail: (value: string) => void
}) {
  const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value)
  }
  return (
    <div>
      <p className="text-xs pb-1">
        요청 내용
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <textarea
        onChange={handlechange}
        className="pl-2 border border-black w-full h-[6rem] py-1 rounded-lg"
        style={{ resize: 'none' }}
      />
    </div>
  )
}
