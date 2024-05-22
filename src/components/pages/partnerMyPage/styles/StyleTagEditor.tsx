'use client'

import React, { useState } from 'react'

import TagBadge from '@/components/ui/TagBadge'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function StyleTagEditor({
  tags,
  setTags,
  uploadStyle,
}: {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  uploadStyle: () => void
}) {
  const [inputText, setInputText] = useState('')

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTag()
    }
  }

  const addTag = () => {
    if (inputText.length === 0) return

    // 특수문자 체크
    if (inputText.match(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/)) {
      alert('특수문자는 입력할 수 없습니다.')
      setInputText('')
      return
    }

    // 태그가 10개 이상일 경우 추가하지 않는다.
    if (tags.length >= 10) {
      alert('태그는 최대 10개까지만 추가할 수 있습니다.')
      setInputText('')
      return
    }

    // 동일한 태그가 있는지 확인한다.
    if (tags.includes(inputText)) {
      alert('이미 추가된 태그입니다.')
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
    <div className="w-full h-full py-5 overflow-hidden">
      <div className="px-5">
        <h1 className="font-semibold pl-1">스타일 키워드 ✨</h1>

        <input
          maxLength={30}
          className="flex-1 border-none h-11 w-full text-sm p-2 focus:outline-none mb-[10px] mt-[10px]"
          type="text"
          value={inputText}
          placeholder="#태그입력(최대10개)"
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent) => activeEnter(e)}
        />

        {/* 태그 박스 */}
        <div className="min-h-[170px] max-h-[170px] overflow-y-auto">
          <div className="flex flex-wrap w-full h-auto">
            {tags.map((tag, index) => (
              <TagBadge key={index} word={tag} removeTag={removeTag} />
            ))}
          </div>
        </div>
      </div>
      <StretchedRoundedButton clickHandler={uploadStyle} comment="저장" />
    </div>
  )
}
