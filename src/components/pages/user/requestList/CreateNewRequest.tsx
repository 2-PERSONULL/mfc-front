import React from 'react'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function CreateNewRequest() {
  return (
    <form className="grid gap-3 w-full px-5 pb-4">
      <div>
        <p className="text-xs pb-1">요청서 이름</p>
        <input
          type="text"
          className="pl-2 border border-black w-full py-1 rounded-lg"
        />
      </div>
      <div>
        <p className="text-xs pb-1">
          요청 내용
          <span className="text-red-500 text-lg align-middle">*</span>
        </p>
        <textarea
          className="pl-2 border border-black w-full h-[6rem] py-1 rounded-lg"
          style={{ resize: 'none' }}
        />
      </div>
      <div>
        <p className="text-xs pb-1">
          코디 상황
          <span className="text-red-500 text-lg align-middle">*</span>
        </p>
        <input
          type="text"
          className="pl-2 border border-black w-full py-1 rounded-lg"
        />
      </div>
      <div>
        <p className="text-xs pb-1">
          선호 브랜드(0/3)
          <span className="text-red-500 text-lg align-middle">*</span>
        </p>
        <input
          type="text"
          className="pl-2 border border-black w-full py-1 rounded-lg"
        />
      </div>
      <div>
        <p className="text-xs pb-1">
          코디 옵션
          <span className="text-red-500 text-lg align-middle">*</span>
        </p>
        <input
          type="text"
          className="pl-2 border border-black w-full py-1 rounded-lg"
        />
      </div>
      <div>
        <p className="text-xs pb-1">
          코디 예산
          <span className="text-red-500 text-lg align-middle">*</span>
        </p>
        <div className="flex items-center gap-1">
          <input
            type="text"
            className="pl-2 border border-black w-[30%] py-1 rounded-lg"
          />
          <p>₩</p>
        </div>
      </div>
      <div>
        <p className="text-xs pb-1">참고 스타일</p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="bg-gray-200 w-[30%] py-10 rounded-lg"
          >
            <p>+</p>
            <input
              type="file"
              accept="image/*"
              className="border border-gray-400 w-[30%] h-[20%] py-1 rounded-lg"
              style={{ display: 'none' }}
            />
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs pb-1">내 이미지</p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="bg-gray-200 w-[30%] py-10 rounded-lg"
          >
            <p>+</p>
            <input
              type="file"
              accept="image/*"
              className="border border-gray-400 w-[30%] h-[20%] py-1 rounded-lg"
              style={{ display: 'none' }}
            />
          </button>
        </div>
      </div>
      <div>
        {/* <p className="text-xs pb-1">요청 내용 *</p> */}
        <textarea
          placeholder="추가 요청 내용을 입력해주세요."
          className="pl-2 border border-black w-full h-[6rem]  pl-2 py-1 rounded-lg"
          style={{ resize: 'none' }}
        />
      </div>
      <StretchedRoundedButton
        comment="저장"
        clickHandler={() => console.log('asd')}
      />
    </form>
  )
}
