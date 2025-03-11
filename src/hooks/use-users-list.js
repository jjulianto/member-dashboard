import { useState, useEffect } from 'react'
import { fetchUsers } from '../lib/api'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response.data.results)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return { users, loading }
}
