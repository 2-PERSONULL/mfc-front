import React from 'react'

import GoBackHeader from '@/components/layouts/GoBackHeader'
import StyleEditor from '@/components/pages/partner/mypage/style/StyleEditor'

export default function PartnerStyleEditor() {
  return (
    <div>
      <GoBackHeader title="스타일 업로드" confirmExit />
      <StyleEditor />
    </div>
  )
}
