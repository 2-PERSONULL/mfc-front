import React from 'react'

export default function SignUpTitle({ comment }: { comment: string }) {
  return (
    <div>
      <p className="text-3xl font-extrabold">SIGN UP</p>
      <p className="text-lg font-extrabold pt-2">{comment}</p>
    </div>
  )
}
