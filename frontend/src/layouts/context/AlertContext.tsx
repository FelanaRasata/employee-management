import {createContext, ReactNode, useContext, useState} from "react"


interface Alert {
    message: string;

    color: "success" | "error" | "info";
}


interface AlertContextType {
    alert: Alert | null;

    showAlert: (message: string, color: "success" | "error" | "info") => void;

    closeAlert: () => void;
}

/**
 * Crée le contexte pour les alertes.
 */
const AlertContext = createContext<AlertContextType | undefined>(undefined)


interface AlertProviderProps {
    children: ReactNode
}

/**
 * Fournisseur du contexte d'alerte.
 *
 * Il permet à tous les composants enfants d'accéder à l'état des alertes disponibles
 *
 * @param {ReactNode} children - Les composants enfants qui auront accès au contexte d'alerte.
 * @returns {JSX.Element} Le fournisseur qui enveloppe les composants enfants.
 */
export const AlertProvider = ({children}: AlertProviderProps) => {
    const [alert, setAlert] = useState<Alert | null>(null)

    const showAlert = (message: string, color: "success" | "error" | "info") => {
        setAlert({message, color})
    }

    const closeAlert = () => {
        setAlert(null)
    }

    return (
        <AlertContext.Provider value={{alert, showAlert, closeAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

/**
 * Hook personnalisé pour accéder facilement aux alerts à afficher.
 *
 * Ce hook permet aux composants de récupérer les informations à alerter.
 *
 * @throws {Error} Si le hook est utilisé en dehors du AlertProvider.
 * @returns {AlertContext} L'état d'authentification et les fonctions login/logout.
 */
export const useAlert = () => {
    const context = useContext(AlertContext)
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider")
    }
    return context
}
