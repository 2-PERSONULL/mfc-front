import React from 'react'

export default function ReqCodiSituation() {
  return (
    <div>
      <p className="text-xs pb-1">
        코디 상황
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <select name="situation" defaultValue="none" className="form-input">
        <option value="none">코디가 필요한 상황을 선택해주세요.</option>
        <option value="wedding">결혼식</option>
        <option value="daily">데일리</option>
        <option value="date">데이트</option>
        <option value="trip">여행</option>
        <option value="interview">면접</option>
        <option value="family-meeting">상견례</option>
        <option value="blind-date">소개팅</option>
      </select>
    </div>
  )
}
