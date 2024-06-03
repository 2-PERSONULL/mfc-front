'use client'

import React, { useState } from 'react'
import UploadStyle from '@/components/pages/partner/mypage/style/UploadStyle'
import StyleTagEditor from '@/components/pages/partner/mypage/style/StyleTagEditor'

export default function StyleEditor() {
  const [image, setImage] = useState<string | null>('')
  const [tags, setTags] = useState<string[]>([])

  const uploadStyle = () => {
    // fetch
    console.log(image, tags)
  }

  return (
    <div>
      <UploadStyle image={image} setImage={setImage} />
      <StyleTagEditor tags={tags} setTags={setTags} uploadStyle={uploadStyle} />
    </div>
  )
}
