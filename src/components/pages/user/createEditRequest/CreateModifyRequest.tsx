import React from 'react'
import CreateModifyReqContents from './CreateModifyReqContents'

export default function CreateModifyRequest({
  submit,
}: {
  submit: (formData: FormData) => void
}) {
  return (
    <section>
      <form action={submit} className="grid gap-7 w-full px-5 pb-4">
        <CreateModifyReqContents />
      </form>
    </section>
  )
}
