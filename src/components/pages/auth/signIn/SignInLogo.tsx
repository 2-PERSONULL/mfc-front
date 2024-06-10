import Image from 'next/image'

export default function SignInLogo({ title }: { title?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white w-full mb-14 mt-[45%]">
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/logo/signInLogo.svg"
        alt="signInLogo"
        priority
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <span className="font-black text-xl">{title}</span>
    </div>
  )
}
