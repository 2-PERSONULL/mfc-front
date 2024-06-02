import React from 'react'
import { Progress } from '@/components/ui/progress/progress'

export default function PartnerProfileProgress({
  progress,
}: {
  progress: number
}) {
  return (
    <div className="w-full px-5 pt-3 pb-5 mb-3 ">
      <p className="text-[14px] mb-1">
        완성도 <strong>{progress}%</strong>
      </p>
      <Progress value={progress} className="bg-[#F5F5F5]" />
    </div>
  )
}
