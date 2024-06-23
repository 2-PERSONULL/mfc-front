'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import StyleGuideTabs from './StyleGuideTabs'
import StyleGuideInfo from '@/types/styleGuideTypes'
import StyleGuideEditorForm from '@/components/pages/partner/styleGuide/StyleGuideForm'
import useToast from '@/stores/toast'
import submitStyleGuide from '@/actions/partner/Coordinates'

export default function StyleGuideEditor({ requestId }: { requestId: string }) {
  // 백엔드에서 받아올 데이터
  const optionList = [
    '상의',
    '하의',
    '원피스',
    '아우터',
    '신발',
    '가방',
    '액세서리',
    '코디리뷰',
  ]

  const router = useRouter()
  const { showToast } = useToast()
  const [tabs, setTabs] = useState<number[]>([0])
  const [active, setActive] = useState<number>(0)
  const [guideList, setGuideList] = useState<StyleGuideInfo[]>([
    {
      category: '상의',
      brand: '',
      budget: 0,
      url: '',
      comment: '',
      images: [],
    },
  ])

  const handleUpdateGuide = (index: number, updatedGuide: StyleGuideInfo) => {
    const newGuideList = [...guideList]
    newGuideList[index] = updatedGuide
    setGuideList(newGuideList)
  }

  const submitHandler = async () => {
    // 카테고리, 가격, 코멘트는 필수값
    if (
      guideList.some(
        (guide) =>
          guide.category === '' || guide.budget === 0 || guide.comment === '',
      )
    ) {
      return showToast({ content: '필수값을 입력해주세요', type: 'warning' })
    }

    // 스타일 가이드 제출 fetch
    const response = await submitStyleGuide(guideList, requestId)
    if (response.isSuccess) {
      showToast({
        content: '스타일 가이드가 제출되었습니다',
        type: 'success',
      })

      router.replace(`/partner/chats`)
    } else showToast({ content: '제출 실패', type: 'error' })
  }

  return (
    <div className="pb-[100px]">
      {/* 탭 */}
      <StyleGuideTabs
        guideList={guideList}
        setGuideList={setGuideList}
        tabs={tabs}
        setTabs={setTabs}
        active={active}
        setActive={setActive}
      />

      {/* 에디터 */}
      {guideList.map((guide, index) => (
        <div
          key={index}
          style={{ display: active === index ? 'block' : 'none' }}
        >
          <StyleGuideEditorForm
            guide={guide}
            optionList={optionList}
            onUpdateGuide={(updatedGuide) =>
              handleUpdateGuide(index, updatedGuide)
            }
          />
        </div>
      ))}

      <div className="fixed bottom-0 left-0 right-0 bg-white h-[100px] flex justify-center pt-5">
        <button
          type="button"
          onClick={submitHandler}
          className="w-[80vw] bg-black text-white font-semibold text-[17px] h-[60px] rounded-full"
        >
          제출
        </button>
      </div>
    </div>
  )
}
