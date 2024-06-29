import Image from 'next/image'

export default function SignInLogo() {
  return (
    <header className="flex flex-col items-center gap-2 bg-white w-full mb-20 mt-[45%]">
      <Image
        src="/icons/mfc-2.svg"
        alt="signInLogo"
        priority
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
    </header>
  )
}
