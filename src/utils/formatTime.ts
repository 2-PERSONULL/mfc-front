const formatTime = (timeString: string): string => {
  const date = new Date(timeString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? '오후' : '오전'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${ampm} ${formattedHours}:${formattedMinutes}`
}

export default formatTime
