import React from 'react'

export default function RequestContents() {
  return (
    <div>
      <p className="text-xs pb-1">
        요청 내용
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <textarea
        required
        name="description"
        className="form-input"
        style={{ resize: 'none', height: '6rem' }}
      />
    </div>
  )
}
