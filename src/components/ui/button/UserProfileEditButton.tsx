import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function UserProfileEditButton({ href }: { href: string }) {
  return (
    <button type="button" className="py-1 px-1 rounded-full">
      <Link href={href}>
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/pencil-icon.svg"
          alt="edit"
          width={0}
          height={0}
          style={{ width: '1.3rem', height: '1.3rem' }}
        />
      </Link>
    </button>
  )
}
