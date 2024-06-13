import React from 'react'

export default function RequestTitle() {
  return (
    <div>
      <p className="text-xs pb-1">
        요청서 이름
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <input required type="text" name="title" className="form-input" />
    </div>
  )
}
