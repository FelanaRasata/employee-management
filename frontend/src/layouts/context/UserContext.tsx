import {createContext, ReactNode, useContext, useState} from "react"
import {IUser} from "../../modules/others/core/model/users.model.ts"


interface UserContextProps {
    currentUser: IUser | null;

    setCurrentUser: (user: IUser | null) => void;
}


const UserContext = createContext<UserContextProps | undefined>(undefined)

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}


interface UserProviderProps {
    children: ReactNode
}


export const UserProvider = ({children}: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(null)

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}
