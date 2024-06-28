import React from 'react'
import ProgressBar from '@/components/ui/progress/ProgressBar'

export default function PartnerProfileProgress({
  progressPercent,
  leftLength,
}: {
  progressPercent: number
  leftLength: number
}) {
  return (
    <div className="w-full px-6 pt-3 pb-5 mb-3 ">
      <div className="flex justify-between text-[14px] mb-1">
        <p>
          완성도 <strong>{progressPercent}%</strong>
        </p>
        {leftLength > 0 && (
          <p>
            <strong>{leftLength}</strong>개 남음
          </p>
        )}
      </div>
      <ProgressBar value={progressPercent} className="bg-[#F5F5F5]" />
    </div>
  )
}
