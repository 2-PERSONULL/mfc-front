import React from 'react'

export default function ReqAddInfo() {
  return (
    <div>
      <textarea
        placeholder="추가 요청 내용을 입력해주세요."
        className="pl-2 border border-black w-full h-[6rem] py-1 rounded-lg"
        style={{ resize: 'none' }}
      />
    </div>
  )
}
