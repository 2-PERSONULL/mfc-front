'use client'

import React, { useState } from 'react'
import TagBadge from '@/components/ui/TagBadge'
import useToast from '@/stores/toast'

export default function ReqPreferredStyle({
  setBrands,
}: {
  setBrands: (value: string[]) => void
}) {
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const { showToast } = useToast()

  const activeEnter = (e: React.KeyboardEvent) => {
    e.preventDefault()
    if (e.key === 'Enter') {
      addBrand()
    }
  }

  const addBrand = () => {
    if (count >= 3) {
      showToast({
        content: '브랜드는 3개까지만 선택 가능합니다.',
        type: 'warning',
      })
      setInputText('')
      return
    }

    if (tags.includes(inputText)) {
      showToast({
        content: '이미 추가된 브랜드입니다.',
        type: 'warning',
      })
      setInputText('')
      return
    }

    setTags([...tags, inputText])
    setBrands([...tags, inputText])
    setInputText('')
    setCount(count + 1)
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
    setCount(count - 1)
  }

  return (
    <div>
      <p className="text-xs pb-1">
        선호 브랜드({count}/3)
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => activeEnter(e)}
        className="pl-2 border border-black w-full py-1 rounded-lg"
      />
      <div className="mt-2 max-h-[50px] overflow-y-auto">
        <div className="flex flex-wrap w-full h-auto">
          {tags.map((tag, index) => (
            <TagBadge key={index} word={tag} removeTag={removeTag} />
          ))}
        </div>
      </div>
    </div>
  )
}
