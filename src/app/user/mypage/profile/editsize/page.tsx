import React from 'react'

export default function EditClothesSize() {
  const clothesSizeData = [
    {
      id: 1,
      name: 'XXS',
    },
    {
      id: 2,
      name: 'XS',
    },
    {
      id: 3,
      name: 'S',
    },
    {
      id: 4,
      name: 'M',
    },
    {
      id: 5,
      name: 'L',
    },
    {
      id: 6,
      name: 'XL',
    },
    {
      id: 7,
      name: 'XXL',
    },
  ]
  return (
    <main>
      <h1 className="font-semibold text-xl px-6 mt-5">
        나의 옷 사이즈를 입력해주세요.
      </h1>
      <section className="grid gap-10 px-6 mt-5">
        <div className="grid gap-3">
          <p className="text-base font-semibold">상의</p>
          <div className="grid grid-cols-4 gap-3">
            {clothesSizeData.map((data) => (
              <button
                key={data.id}
                type="button"
                className="py-2 px-2 bg-gray-300 rounded-full"
              >
                <p className="text-gray-500">{data.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <p className="text-base font-semibold">하의</p>
          <div className="grid grid-cols-4 gap-3">
            {clothesSizeData.map((data) => (
              <button
                key={data.id}
                type="button"
                className="py-2 px-2 bg-gray-300 rounded-full"
              >
                <p className="text-gray-500">{data.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 font-semibold">신발 : </span>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="신발 사이즈를 입력해주세요"
            className="form-input relative text-end"
          />
          <span className="text-gray-500">mm</span>
        </div>
        {/* <div className="fixed bottom-0 h-[90px] w-full left-0 right-0 px-6 bg-white">
          <StretchedRoundedButton comment="저장" clickHandler={saveHandler} />
        </div> */}
      </section>
    </main>
  )
}
