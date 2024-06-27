'use client'

import React, { useEffect, useState } from 'react'
import ProgressBar from '@/components/ui/progress/ProgressBar'

export default function PartnerProfileProgress({
  progressPercent,
}: {
  progressPercent: number
}) {
  const [displayPercent, setDisplayPercent] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayPercent(progressPercent)
    }, 100) // Adding a slight delay to start the animation
    return () => clearTimeout(timeout)
  }, [progressPercent])

  return (
    <div className="relative w-full px-6 pt-3 pb-5 mb-3">
      <ProgressBar
        value={displayPercent}
        className="w-full"
        style={{ transition: 'width 2s ease-in-out' }}
      />
      <div
        className="absolute transition-all"
        style={{
          left: `calc(${displayPercent}% - 34px)`,
          transform: 'translateX(-50%)',
        }}
      >
        <div className="relative w-fit px-4 py-2 bg-black text-white text-sm rounded-full mt-2">
          {displayPercent}%
          <div
            className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-b-black border-l-transparent border-r-transparent"
            style={{
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
