'use client'

import React, { useState } from 'react'
import TagBadge from '@/components/ui/TagBadge'
import useToast from '@/stores/toast'

export default function ReqPreferredBrands() {
  const [count, setCount] = useState<number>(0)
  const [inputText, setInputText] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const { showToast } = useToast()

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addBrand()
    }
  }

  const addBrand = () => {
    if (tags.includes(inputText)) {
      showToast({
        content: '이미 추가된 브랜드입니다.',
        type: 'warning',
      })
      setInputText('')
      return
    }

    const newTags = [...tags, inputText]
    setTags(newTags)
    setInputText('')
    setCount(count + 1)
  }

  const removeTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag)
    setTags(newTags)
    setCount(count - 1)
  }

  return (
    <section>
      <p className="text-xs pb-1">선호 브랜드({count}/3)</p>
      <input
        disabled={count === 3}
        type="text"
        name="brandInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => activeEnter(e)}
        className="form-input"
        style={{ height: '3rem' }}
      />
      <section className="mt-2 max-h-[50px] overflow-y-auto">
        <ul className="flex flex-wrap w-full h-auto">
          {tags.map((tag, index) => (
            <TagBadge key={index} word={tag} removeTag={removeTag} />
          ))}
        </ul>
      </section>
      <section>
        {tags.map((tag, index) => (
          <input key={index} type="hidden" name="brand" value={tag} />
        ))}
      </section>
    </section>
  )
}
