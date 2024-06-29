import React from 'react'
import ViewRequest from '@/components/pages/user/viewRequest/ViewRequest'
import { getRequestDetail } from '@/actions/user/UserRequest'
import { RequestDetailProps } from '@/types/requestDetailType'

export default async function RequestDetail({
  params,
  searchParams,
}: {
  params: { requestid: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const result = await getRequestDetail(params.requestid)
  const data: RequestDetailProps = result as unknown as RequestDetailProps
  const type = searchParams?.type || ''
  const expired = searchParams?.expired || ''

  return (
    <main>
      <ViewRequest data={data} params={params} type={type} expired={expired} />
    </main>
  )
}
