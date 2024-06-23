'use client'

import { useEffect, useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format, isBefore, startOfDay } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

import cn from '@/lib/utils'

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

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate && !isBefore(selectedDate, startOfDay(new Date()))) {
      setDate(selectedDate)
    }
  }

  useEffect(() => {
    deadline(formatDate(date))
  }, [date])

  return (
    <div className="bg-white py-6 grid gap-2">
      <p>마감 기한</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'form-input w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'yyyy-MM-dd') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
