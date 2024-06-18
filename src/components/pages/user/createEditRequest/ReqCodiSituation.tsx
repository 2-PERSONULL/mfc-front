import React, { useState } from 'react'

export default function ReqCodiSituation({
  situation,
}: {
  situation?: string
}) {
  const [newSituation, setNewSituation] = useState<string>(situation || 'none')
  return (
    <div>
      <p className="text-xs pb-1">
        코디 상황
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <select
        name="situation"
        value={newSituation}
        onChange={(e) => setNewSituation(e.target.value)}
        className="form-input"
      >
        <option value="none">코디가 필요한 상황을 선택해주세요.</option>
        <option value="결혼식">결혼식</option>
        <option value="데일리">데일리</option>
        <option value="데이트">데이트</option>
        <option value="여행">여행</option>
        <option value="면접">면접</option>
        <option value="상견례">상견례</option>
        <option value="소개팅">소개팅</option>
      </select>
    </div>
  )
}
