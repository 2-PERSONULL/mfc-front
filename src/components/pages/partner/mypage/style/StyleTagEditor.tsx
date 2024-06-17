'use client'

import React, { useState } from 'react'
import useToast from '@/stores/toast'
import TagBadge from '@/components/ui/TagBadge'

export default function StyleTagEditor({
  tags,
  setTags,
}: {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const [inputText, setInputText] = useState('')
  const { showToast } = useToast()

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTag()
    }
  }

  const addTag = () => {
    if (inputText.length === 0) return

    // 특수문자 체크
    if (inputText.match(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/)) {
      showToast({ content: '특수문자는 입력할 수 없습니다.', type: 'warning' })
      setInputText('')
      return
    }

    // 태그가 10개 이상일 경우 추가하지 않는다.
    if (tags.length >= 10) {
      showToast({
        content: '태그는 최대 10개까지만 추가할 수 있습니다.',
        type: 'warning',
      })

      setInputText('')
      return
    }

    // 동일한 태그가 있는지 확인한다.
    if (tags.includes(inputText)) {
      showToast({
        content: '이미 추가된 태그입니다.',
        type: 'warning',
      })
      setInputText('')
      return
    }

    setTags([...tags, inputText])
    setInputText('')
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <div className="w-full h-full py-5  px-5 overflow-hidden">
      <h1 className="font-semibold pl-1">스타일 키워드 ✨</h1>

      <input
        maxLength={30}
        className="flex-1 border-none h-11 w-full text-sm p-2 focus:outline-none mb-[10px] mt-[10px]"
        type="text"
        value={inputText}
        placeholder="#태그입력(최대10개)"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            activeEnter(e)
          }
        }}
      />

      {/* 태그 박스 */}
      <div className="min-h-[170px] max-h-[170px] overflow-y-auto">
        <div className="flex flex-wrap w-full h-auto">
          {tags.map((tag, index) => (
            <TagBadge key={index} word={tag} removeTag={removeTag} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <button type="submit" className="rounded-full w-full h-[50px] bg-black">
          <span className="text-white">저장</span>
        </button>
      </div>
    </div>
  )
}
