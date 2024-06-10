import React from 'react'
import CommonSelectBox from '@/components/ui/select/CommonSelectBox'
import StyleGuideImageUpload from '@/components/pages/partner/styleGuide/StyleGuideImageUpload'
import { StyleGuideInfo } from '@/types/styleGuideTypes'
import FormLabel from '@/components/ui/input/FormLabel'
import FormIntput from '@/components/ui/input/FormInput'
import FormPriceInput from '@/components/ui/input/FormPriceInput'
import FormTextArea from '@/components/ui/input/FormTextArea'

interface StyleGuideEditorFormProps {
  guide: StyleGuideInfo
  optionList: string[]
  onUpdateGuide: (updatedGuide: StyleGuideInfo) => void
}

export default function StyleGuideEditorForm({
  guide,
  optionList,
  onUpdateGuide,
}: StyleGuideEditorFormProps) {
  const [description, setDescription] = React.useState(guide.comment)

  const handleCategoryChange = (value: string) => {
    const updatedGuide = { ...guide, category: value }
    onUpdateGuide(updatedGuide)
  }

  const handleImageChange = (images: string[]) => {
    const updatedGuide = { ...guide, image: images }
    onUpdateGuide(updatedGuide)
  }

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value)
    const updatedGuide = { ...guide, comment: e.target.value }
    onUpdateGuide(updatedGuide)
  }

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <FormLabel text="카테고리" required />
        <CommonSelectBox
          optionList={optionList}
          selectedOption={guide.category}
          setSelectedOption={handleCategoryChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel text="구매처(브랜드 및 쇼핑몰)" />
        <FormIntput
          type="text"
          value={guide.brand}
          onChange={(e) => {
            const updatedGuide = { ...guide, brand: e.target.value }
            onUpdateGuide(updatedGuide)
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel text="가격" required />
        <FormPriceInput
          type="text"
          value={guide.budget.toLocaleString()}
          onChange={(e) => {
            const { value } = e.target
            const updatedGuide = {
              ...guide,
              budget: Number(value.replace(/[^0-9]/g, '')),
            }
            onUpdateGuide(updatedGuide)
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel text="URL" />
        <FormIntput
          type="text"
          placeholder="아이템을 확인할 수 있는 링크를 입력해주세요."
          value={guide.url}
          onChange={(e) => {
            const updatedGuide = { ...guide, url: e.target.value }
            onUpdateGuide(updatedGuide)
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel text="코멘트" required />
        <FormTextArea
          value={description}
          maxLength={1000}
          placeholder="해당 아이템 선정 이유 및 코멘트를 입력해주세요."
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel text="이미지 업로드" />
        <StyleGuideImageUpload
          images={guide.image}
          setImages={handleImageChange}
        />
      </div>
    </div>
  )
}
