import React from 'react'
import { ZodError, ZodIssue } from 'zod'
import { redirect } from 'next/navigation'
import RequestSchema from '@/schema/requestSchema'
import { editRequest, getRequestDetail } from '@/actions/user/UserRequest'
import EditRequestForm from '@/components/pages/user/createEditRequest/EditRequestForm'
import { RequestDetailProps } from '@/types/requestDetailType'

export default async function EditRequest({
  params,
}: {
  params: { requestid: string }
}) {
  const handleEdit = async (
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
      await editRequest(params.requestid, {
        title,
        description,
        situation,
        brandIds,
        categoryIds,
        budget,
        referenceImageUrls,
        myImageUrls,
      })
    } catch (error) {
      if (error instanceof ZodError) {
        return { error: error.issues }
      }
    }
    return redirect('/user/mypage/reqlist')
  }

  const requestContents: RequestDetailProps = await getRequestDetail(
    params.requestid,
  )
  return (
    <main>
      <EditRequestForm action={handleEdit} contents={requestContents} />
    </main>
  )
}
