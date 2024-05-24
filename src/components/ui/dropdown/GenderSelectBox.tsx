import React from 'react'

export default function GenderSelectBox() {
  return (
    <select
      defaultValue="none"
      className="select select-bordered w-full max-w-xs"
    >
      <option value="none" disabled>
        성별을 선택하세요.
      </option>
      <option value="남성">남성</option>
      <option value="여성">여성</option>
    </select>
  )
}
