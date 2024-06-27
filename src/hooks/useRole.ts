import { useState, useEffect } from 'react'

const useRole = () => {
  const [role, setRole] = useState<string>('USER')

  useEffect(() => {
    const roleString = localStorage.getItem('role')
    if (roleString) {
      setRole(roleString)
    }
  }, [])

  return role
}

export default useRole
