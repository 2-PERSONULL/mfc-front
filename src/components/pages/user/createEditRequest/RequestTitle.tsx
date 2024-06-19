import React, { useState } from 'react'

export default function RequestTitle({ title }: { title?: string }) {
  const [newtitle, setNewTitle] = useState<string>(title || '')
  return (
    <section>
      <p className="text-xs pb-1">
        요청서 이름
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <input
        type="text"
        name="title"
        value={newtitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="form-input"
      />
    </section>
  )
}
