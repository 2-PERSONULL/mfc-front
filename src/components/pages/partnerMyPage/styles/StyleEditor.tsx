'use client'

import React, { useState } from 'react'
import UploadStyle from '@/components/pages/partnerMyPage/styles/UploadStyle'
import StyleTagEditor from '@/components/pages/partnerMyPage/styles/StyleTagEditor'
import useToast from '@/stores/toast'

export default function StyleEditor() {
  const { showToast } = useToast()
  const [image, setImage] = useState<string | null>('')
  const [tags, setTags] = useState<string[]>([])

  const uploadStyle = () => {
    // fetch
    console.log(image, tags)
    showToast({ content: '스타일이 등록되었습니다.', type: 'success' })
  }

  return (
    <div>
      <UploadStyle image={image} setImage={setImage} />
      <StyleTagEditor tags={tags} setTags={setTags} uploadStyle={uploadStyle} />
    </div>
  )
}
