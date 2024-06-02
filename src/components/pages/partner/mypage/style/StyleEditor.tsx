'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadStyle from '@/components/pages/partner/mypage/style/UploadStyle'
import StyleTagEditor from '@/components/pages/partner/mypage/style/StyleTagEditor'
import addPartnerPost from '@/app/api/partner/PartnerPost'
import useToast from '@/stores/toast'

export default function StyleEditor() {
  const router = useRouter()
  const { showToast } = useToast()
  const [image, setImage] = useState<string | null>('')
  const [tags, setTags] = useState<string[]>([])

  const uploadStyle = () => {
    if (!image) {
      showToast({ content: '이미지를 업로드해주세요.', type: 'warning' })
      return
    }

    addPartnerPost(image, tags)
    showToast({ content: '스타일이 업로드되었습니다.', type: 'success' })
    router.replace('/partner/mypage')
  }

  return (
    <div>
      <UploadStyle image={image} setImage={setImage} />
      <StyleTagEditor tags={tags} setTags={setTags} uploadStyle={uploadStyle} />
    </div>
  )
}
