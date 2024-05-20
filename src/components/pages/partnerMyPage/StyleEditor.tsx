import React from 'react'
import UploadStyle from './UploadStyle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import StyleTagEditor from './StyleTagEditor'

export default function StyleEditor() {
  return (
    <div>
      <UploadStyle />
      <StyleTagEditor />
      <StretchedRoundedButton comment="저장" />
    </div>
  )
}
