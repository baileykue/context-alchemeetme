import { useState, useContext, createContext, useEffect } from 'react'
import fetchUser from '../services/user'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])

  const UserValues = { user }

  return <UserContext.Provider value={UserValues}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider')
  }

  return context
}

export { UserProvider, useUser }
