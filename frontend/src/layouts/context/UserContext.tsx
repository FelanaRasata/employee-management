import {createContext, ReactNode, useContext, useState} from "react"
import {IUser} from "../../modules/others/core/model/users.model.ts"


interface UserContextProps {
    currentUser: IUser | null;

    setCurrentUser: (user: IUser | null) => void;
}

/**
 * Crée le contexte pour l'utilisateur en cours.
 */
const UserContext = createContext<UserContextProps | undefined>(undefined)




interface UserProviderProps {
    children: ReactNode
}

/**
 * Fournisseur du contexte de l'utilisateur en cours.
 *
 * Il permet à tous les composants enfants d'accéder à l'état de l'utilisateur en cours.
 *
 * @param {ReactNode} children - Les composants enfants qui auront accès au contexte de l'utilisateur en cours.
 * @returns {JSX.Element} Le fournisseur qui enveloppe les composants enfants.
 */
export const UserProvider = ({children}: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(null)

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

/**
 * Hook personnalisé pour accéder facilement à l'utilisateur en cours.
 *
 * Ce hook permet aux composants de gérer l'utilisateur en cours.
 *
 * @throws {Error} Si le hook est utilisé en dehors du UserProvider.
 * @returns {UserContext} L'état d'authentification et les fonctions login/logout.
 */
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}
