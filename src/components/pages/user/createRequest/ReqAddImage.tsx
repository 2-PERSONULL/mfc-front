import React from 'react'

export default function ReqAddImage({
  title,
  // setRefImages,
  // setMyImage,
}: {
  title: string
  // setRefImages?: (value: string[]) => void
  // setMyImage?: (value: string) => void
}) {
  // const [refImg, setRefImgs] = useState<string[]>([])
  // const [myImgs, setMyImgs] = useState<string[]>([])

  return (
    <div>
      <p className="text-xs pb-1">{title}</p>
      <div className="flex-row flex items-center gap-1">
        <label
          htmlFor="file"
          className="w-[30%] h-[20%] py-10 rounded-lg border-dashed border-[2px] border-gray-600 object-cover flex items-center justify-center"
        >
          <p>+</p>
        </label>
        <input
          id="file"
          type="file"
          // onChange={ }
          accept="image/*"
          className="py-1"
          style={{ display: 'none' }}
        />
        <div className="flex justify-start overflow-x-scroll">
          <div className="flex whitespace-nowrap gap-3">
            {/* <p className="bg-red-400 w-[100px] min-h-[110px] border-black border">
              이미지
            </p>
            <p className="bg-red-400 w-[100px] min-h-[110px] border-black border">
              이미지
            </p>
            <p className="bg-red-400 w-[100px] min-h-[110px] border-black border">
              이미지
            </p> */}
            {/* <div className="rounded-[10px] w-[90%] h-[300px] relative">
              <Image
                src={image}
                alt="스타일 이미지"
                fill
                sizes="(max-width: 100px) 100vw, 100px"
                className="object-contain"
              />
              <button type="button" onClick={ }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
