'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadStyle from '@/components/pages/partner/mypage/style/UploadStyle'
import StyleTagEditor from '@/components/pages/partner/mypage/style/StyleTagEditor'
import {
  addPartnerPost,
  updatePartnerPost,
} from '@/app/api/partner/PartnerPost'
import useToast from '@/stores/toast'
import useModal from '@/stores/modal'

export default function StyleEditor({
  postId,
  imageUrl,
  tagList,
}: {
  postId?: number
  imageUrl?: string
  tagList?: string[]
}) {
  const router = useRouter()
  const { showToast } = useToast()
  const { closeModal } = useModal()
  const [image, setImage] = useState<string | null>(imageUrl || null)
  const [tags, setTags] = useState<string[]>(tagList || [])

  const uploadStyle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!image) {
      showToast({ content: '이미지를 업로드해주세요.', type: 'warning' })
      return
    }

    if (postId) {
      // *** return 예외 처리 추가
      updatePartnerPost(postId, image, tags)
      // *** content, type 메시지 백엔드에서 받아서 처리하는 것을 추천
      showToast({ content: '스타일이 수정되었습니다.', type: 'success' })
      closeModal()
      return
    }

    addPartnerPost(image, tags)
    showToast({ content: '스타일이 업로드되었습니다.', type: 'success' })
    router.replace('/partner/mypage')
  }

  return (
    <form onSubmit={uploadStyle}>
      <UploadStyle image={image} setImage={setImage} />
      <StyleTagEditor tags={tags} setTags={setTags} />
    </form>
  )
}
