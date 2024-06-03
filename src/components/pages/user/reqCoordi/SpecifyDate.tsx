'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export default function SpecifyDate() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-white py-4 px-6 grid gap-2">
      <p>날짜지정</p>
      <Calendar mode="single" selected={date} onSelect={setDate} />{' '}
    </div>
  )
}
