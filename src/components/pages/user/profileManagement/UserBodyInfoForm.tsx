import React from 'react'
import BodytypeList from './BodytypeList'

export default function UserBodyInfoForm({
  handleSave,
}: {
  handleSave: (formData: FormData) => void
}) {
  return (
    <form
      action={handleSave}
      className="w-full bg-white min-h-[85dvh] grid gap-8 py-3 px-5"
    >
      <div className="flex items-center gap-3">
        <span className="flex-shrink-0 text-lg font-semibold">키 : </span>
        <input
          type="number"
          id="height"
          name="height"
          placeholder="키를 입력해주세요"
          className="form-input relative text-end"
        />
        <span className="text-gray-500">cm</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex-shrink-0 text-lg font-semibold">몸무게 : </span>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="몸무게를 입력해주세요"
          className="form-input relative text-end"
        />
        <span className="text-gray-500">kg</span>
      </div>
      <BodytypeList />
      <button
        type="submit"
        className="sticky bottom-3 rounded-full w-full h-[50px] bg-black"
      >
        <span className="text-white">저장</span>
      </button>
    </form>
  )
}
