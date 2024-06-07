import React from 'react'

export default function RequestTitle({
  setTitle,
}: {
  setTitle: (value: string) => void
}) {
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <p className="text-xs pb-1">요청서 이름</p>
      <input
        type="text"
        onChange={handlechange}
        className="pl-2 border border-black w-full py-1 rounded-lg"
      />
    </div>
  )
}
