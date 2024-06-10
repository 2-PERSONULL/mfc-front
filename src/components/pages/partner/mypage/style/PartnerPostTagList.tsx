import React from 'react'

interface TagBadgeProps {
  tagId: number
  value: string
}

export default function PartnerPostTagList({
  tags,
}: {
  tags: TagBadgeProps[]
}) {
  return (
    <div className="p-3">
      <ul className="flex flex-wrap w-full h-auto">
        {tags.map((tag) => (
          <li
            key={tag.tagId}
            className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]"
          >
            <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
              #{tag.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
