import React from 'react'
import { redirect } from 'next/navigation'
import UserBodyInfoForm from '@/components/pages/user/profileManagement/UserBodyInfoForm'

export default async function EditBodyInfo() {
  const handleSave = async (formData: FormData) => {
    'use server'

    console.log('Save body info', formData)
    redirect('/user/mypage/profile')
  }
  return (
    <main>
      <h1 className="font-extrabold text-xl px-6 my-5">
        나의 신체 정보를 입력해주세요.
      </h1>
      <UserBodyInfoForm handleSave={handleSave} />
    </main>
  )
}
