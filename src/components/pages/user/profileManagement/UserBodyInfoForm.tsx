'use client'

import React from 'react'
import BodytypeList from './BodytypeList'

export default function UserBodyInfoForm({
  handleSave,
}: {
  handleSave: (formData: FormData) => void
}) {
  // const { showToast } = useToast(e)
  return (
    <form action={handleSave} className="w-full bg-white px-5">
      <section className="flex items-center gap-3 pb-5">
        <input
          type="number"
          id="height"
          name="height"
          placeholder="키를 입력해주세요"
          className="form-input relative text-start pl-3"
          style={{
            height: '53px',
            borderRadius: '3rem',
            paddingTop: '1.8rem',
            paddingLeft: '1.5rem',
          }}
        />
        <span className="absolute left-11 text-sm font-bold top-44 text-gray-500">
          키
        </span>
        <span className="absolute right-12 top-[195px] text-gray-500">cm</span>
      </section>
      <section className="flex items-center gap-3">
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="몸무게를 입력해주세요"
          className="form-input relative text-start pl-3"
          style={{
            height: '53px',
            borderRadius: '3rem',
            paddingTop: '1.8rem',
            paddingLeft: '1.5rem',
          }}
        />
        <span className="absolute left-11 text-sm font-bold top-[248px] text-gray-500">
          체중
        </span>
        <span className="absolute right-12 top-[268px] text-gray-500">kg</span>
      </section>
      <BodytypeList />
      <button
        type="submit"
        className="fixed bottom-5  rounded-full w-[90%] h-[50px] bg-black"
      >
        <span className="text-white">저장</span>
      </button>
    </form>
  )
}
