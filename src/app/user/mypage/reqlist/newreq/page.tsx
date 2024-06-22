import React from 'react'
import { redirect } from 'next/navigation'
import { ZodError, ZodIssue } from 'zod'
import createNewRequest from '@/actions/user/UserCreateRequest'
import RequestSchema from '@/schema/requestSchema'
import RequestForm from '@/components/pages/user/createEditRequest/RequestForm'

export default function NewRequest() {
  const handleSubmit = async (
    formData: FormData,
  ): Promise<{ error: ZodIssue[] } | undefined> => {
    'use server'

    const parseBudget = (budget: string) => {
      return Number(budget.replace(/,/g, ''))
    }
    try {
      const {
        title,
        description,
        situation,
        brandIds,
        categoryIds,
        budget,
        referenceImageUrls,
        myImageUrls,
      } = RequestSchema.parse({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        situation: formData.get('situation') as string,
        brandIds: formData.getAll('brand') as string[],
        categoryIds: formData.getAll('category') as string[],
        budget: parseBudget(formData.get('budget') as string),
        referenceImageUrls: formData.getAll('referenceImages') as string[],
        myImageUrls: formData.getAll('myImages') as string[],
      })
      await createNewRequest({
        registerData: {
          title,
          description,
          situation,
          brandIds,
          categoryIds,
          budget,
          referenceImageUrls,
          myImageUrls,
        },
      })
    } catch (error) {
      if (error instanceof ZodError) {
        return { error: error.issues }
      }
    }
    return redirect('/user/mypage/reqlist')
  }
  return (
    <main>
      <RequestForm action={handleSubmit} />
    </main>
  )
}
