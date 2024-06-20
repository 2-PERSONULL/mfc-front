import React from 'react'

export default function ViewReqPreferredBrands({
  brands,
}: {
  brands: string[]
}) {
  return (
    <section>
      <p className="text-sm pb-3 text-black font-semibold">선호 브랜드</p>
      {brands.length === 0 ? (
        <p className="text-lg">선호 브랜드가 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-5">
          {brands.map((brand) => (
            <li key={brand}>
              <p className="bg-gray-200 py-2 px-5 rounded-lg text-sm">
                {brand}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
