import React, { useState } from 'react'
import { TagsInput } from 'react-tag-input-component'

export default function StyleTagEditor() {
  const [tags, setTags] = useState<string[]>([])

  return (
    <div className="px-5 mt-8">
      <h1 className="font-semibold pl-1">스타일 키워드 ✨</h1>
      <div className="mt-[10px]">
        <TagsInput
          value={tags}
          onChange={setTags}
          // onExisting={(tag: string) => {
          //   console.log(tag)
          // }}

          beforeAddValidate={(tag: string, existingTags: string[]) => {
            if (existingTags.length >= 3) {
              return false
            }

            return true
          }}
          placeHolder="#태그입력(최대10개)"
        />
      </div>
    </div>
  )
}
