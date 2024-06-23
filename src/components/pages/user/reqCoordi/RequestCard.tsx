import React from 'react'
import { RequestDetailProps } from '@/types/requestDetailType'

export default function RequestCard({
  reqDetail,
}: {
  reqDetail: RequestDetailProps | null
}) {
  return (
    <section>
      {reqDetail ? (
        <article>
          <div className="border border-gray-300 gap-3 grid px-3 py-3 rounded-lg">
            <header className="text-sm flex items-center justify-between">
              <p className="text-gray-600 font-semibold text-sm">
                {reqDetail.title}
              </p>
              <p className="font-bold text-gray-400">{reqDetail.situation}</p>
            </header>
            <section>
              <p className="text-xs text-gray-400">
                {reqDetail.description.length > 10
                  ? `${reqDetail.description.substring(0, 10)}...`
                  : reqDetail.description}
              </p>
            </section>
            <section className="text-xs w-full min-h-full grid grid-cols-4">
              {reqDetail.categoryIds.map((value, idx) => (
                <span
                  key={idx}
                  className="bg-gray-300 mr-3 px-3 py-1 rounded-md mt-3 text-center"
                >
                  {value}
                </span>
              ))}
            </section>
          </div>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
