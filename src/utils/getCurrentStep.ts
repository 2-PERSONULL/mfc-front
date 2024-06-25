const getCurrentStep = (status: string) => {
  switch (status) {
    case 'NONERESPONSE':
      return 1
    case 'RESPONSEACCEPT':
      return 2
    case 'WAITING':
      return 2
    case 'CONFIRMED':
      return 3
    case 'COORDINATE_RECEIVED':
      return 4
    case 'CLOSED':
      return 4
    default:
      return 0
  }
}

export default getCurrentStep
