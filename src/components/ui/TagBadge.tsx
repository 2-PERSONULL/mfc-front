import React from 'react'

const TagBadge = ({
  word,
  removeTag,
}: {
  word: string
  removeTag: (tag: string) => void
}) => {
  return (
    <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
      <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
        #{word}
      </p>
      <button type="button" onClick={() => removeTag(word)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  )
}

export default TagBadge
