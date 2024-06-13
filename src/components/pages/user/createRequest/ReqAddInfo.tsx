import React from 'react'

export default function ReqAddInfo() {
  return (
    <div>
      <textarea
        placeholder="추가 요청 내용을 입력해주세요."
        className="form-input"
        name="otherRequirements"
        style={{ resize: 'none', height: '6rem' }}
      />
    </div>
  )
}
