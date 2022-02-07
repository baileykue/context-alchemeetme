import { useState, useContext, createContext } from "react";

const UserContext = createContext();

function UserProvider({children}) {
    const [user, setUser] = useState({})

    const UserValues = {user, setUser}

    return <UserContext.Provider value={UserValues}>{children}</UserContext.Provider>
}

const useUser = () => {
const context = useContext(UserContext)

if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider')
  }

  return context
}

export {UserProvider, useUser}