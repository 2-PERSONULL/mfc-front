import React from 'react'
import { redirect } from 'next/navigation'
import UserBodyInfoForm from '@/components/pages/user/profileManagement/UserBodyInfoForm'
import SectionTitle from '@/components/layouts/SectionTitle'

export default async function EditBodyInfo() {
  const handleSave = async (formData: FormData) => {
    'use server'

    console.log('Save body info', formData)
    redirect('/user/mypage/profile')
  }
  return (
    <main className="min-h-full">
      <SectionTitle title="나의 신체 정보를 입력해주세요." describe />
      <UserBodyInfoForm handleSave={handleSave} />
    </main>
  )
}
