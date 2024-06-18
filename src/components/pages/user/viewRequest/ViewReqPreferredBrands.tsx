import React from 'react'

export default function ViewReqPreferredBrands({
  brands,
}: {
  brands: string[]
}) {
  return (
    <div>
      <p className="text-base pb-3 text-gray-400">선호 브랜드</p>
      {brands.length === 0 ? (
        <p>선호 브랜드가 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-5">
          {brands.map((brand) => (
            <li key={brand}>
              <span className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
                {brand}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
