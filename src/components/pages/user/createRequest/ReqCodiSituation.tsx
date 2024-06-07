import React, { useState } from 'react'

export default function ReqCodiSituation({
  setSituation,
}: {
  setSituation: (value: string) => void
}) {
  const [selectedValue, setSelectedValue] = useState('select')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    setSituation(e.target.value)
  }
  return (
    <div>
      <p className="text-xs pb-1">
        코디 상황
        <span className="text-red-500 text-lg align-middle">*</span>
      </p>
      <select
        name="situation"
        value={selectedValue}
        onChange={handleChange}
        className="w-full border py-2 border-black rounded-lg pl-2"
      >
        <option value="select">코디가 필요한 상황을 선택해주세요.</option>
        <option value="daily">데일리</option>
        <option value="wedding">결혼식</option>
        <option value="date">데이트</option>
        <option value="trip">여행</option>
      </select>
    </div>
  )
}
