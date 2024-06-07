import React from 'react'

export default function ReqAddImage({ title }: { title: string }) {
  return (
    <div>
      <p className="text-xs pb-1">{title}</p>
      <div className="flex items-center gap-1">
        <button type="button" className="bg-gray-200 w-[30%] py-10 rounded-lg">
          <p>+</p>
          <input
            type="file"
            accept="image/*"
            className="border border-gray-400 w-[30%] h-[20%] py-1 rounded-lg"
            style={{ display: 'none' }}
          />
        </button>
      </div>
    </div>
  )
}
