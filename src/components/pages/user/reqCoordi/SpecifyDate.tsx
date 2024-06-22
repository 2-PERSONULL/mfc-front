'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export default function SpecifyDate({
  deadline,
}: {
  deadline: (value: string) => void
}) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const formatDate = (value: Date | undefined): string => {
    if (!value) return ''
    const year = value.getFullYear()
    const month = `0${value.getMonth() + 1}`.slice(-2)
    const day = `0${value.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const handleSetDeadline = (value: Date | undefined) => {
    setDate(value)
    deadline(formatDate(value))
  }

  useEffect(() => {
    deadline(formatDate(date))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-white py-6 grid gap-2">
      <p>날짜지정</p>
      <Calendar mode="single" selected={date} onSelect={handleSetDeadline} />
    </div>
  )
}
