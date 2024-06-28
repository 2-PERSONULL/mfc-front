import { useState, useEffect } from 'react'
import useClientSession from '@/hooks/useClientSession'

const useRole = () => {
  const { uuid } = useClientSession()
  const [role, setRole] = useState<string>('USER')

  useEffect(() => {
    const roleString = localStorage.getItem('role')

    if (!uuid) {
      return setRole('USER')
    }
    if (roleString) {
      return setRole(roleString)
    }
  }, [])

  return role
}

export default useRole
