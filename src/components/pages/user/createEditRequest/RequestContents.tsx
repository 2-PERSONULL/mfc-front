import React, { useState } from 'react'

export default function RequestContents({
  description,
}: {
  description?: string
}) {
  const [newDescription, setNewDescription] = useState<string>(
    description || '',
  )
  return (
    <section>
      <p className="text-xs pb-1">
        요청 내용
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <textarea
        name="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="form-input"
        style={{ resize: 'none', height: '6rem' }}
      />
    </section>
  )
}
