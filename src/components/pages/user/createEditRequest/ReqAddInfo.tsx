import React from 'react'

export default function ReqAddInfo() {
  return (
    <div>
      <p className="text-xs pb-1">추가 요청 내용</p>
      <textarea
        placeholder="추가 요청 내용을 입력해주세요."
        className="form-input"
        name="otherRequirements"
        style={{ resize: 'none', height: '6rem' }}
      />
    </div>
  )
}
