import React from 'react'
import { redirect } from 'next/navigation'
import UserBodyInfoForm from '@/components/pages/user/profileManagement/UserBodyInfoForm'
import SectionTitle from '@/components/layouts/ProfileAdvice'
import { updateBodyInfo } from '@/actions/user/UserProfile'

export default async function EditBodyInfo() {
  const handleSave = async (formData: FormData) => {
    'use server'

    await updateBodyInfo({
      formData: {
        height: formData.get('height') as unknown as number,
        weight: formData.get('weight') as unknown as number,
        bodyType: formData.get('bodyType') as string,
      },
    })
    redirect('/user/mypage/profile')
  }
  return (
    <main className="min-h-full">
      <SectionTitle title="신체 정보를 입력해주세요." describe />
      <UserBodyInfoForm handleSave={handleSave} />
    </main>
  )
}
