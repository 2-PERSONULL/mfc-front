import React from 'react'

export default function CoordinationRequest({
  title,
  situation,
  description,
}: {
  title: string
  situation: string
  description: string
}) {
  return (
    <div className="py-4 border border-gray-400 px-5 text-gray-500 rounded-md">
      <div className="flex gap-2">
        <p className="font-bold">{title}</p>
        <p className="border py-1 px-2 text-xs rounded-md bg-gray-300">
          {situation}
        </p>
      </div>
      <p className="text-xs pt-3">{description}</p>
    </div>
  )
}