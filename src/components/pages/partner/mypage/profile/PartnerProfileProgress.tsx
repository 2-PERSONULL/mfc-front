import React from 'react'
import ProgressBar from '@/components/ui/progress/ProgressBar'

export default function PartnerProfileProgress({
  progressPercent,
}: {
  progressPercent: number
}) {
  return (
    <div className="w-full px-5 pt-3 pb-5 mb-3 ">
      <p className="text-[14px] mb-1">
        완성도 <strong>{progressPercent}%</strong>
      </p>
      <ProgressBar value={progressPercent} className="bg-[#F5F5F5]" />
    </div>
  )
}
