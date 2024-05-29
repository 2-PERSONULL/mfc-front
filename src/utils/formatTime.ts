const formatChatTime = (timeString: string): string => {
  const date = new Date(timeString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? '오후' : '오전'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${ampm} ${formattedHours}:${formattedMinutes}`
}

const formatTime = (hour: number): string => {
  if (hour === 0) {
    return `오전 12시`
  }
  if (hour < 12) {
    return `오전 ${hour}시`
  }
  if (hour === 12) {
    return `오후 12시`
  }
  return `오후 ${hour - 12}시`
}

export { formatTime, formatChatTime }
