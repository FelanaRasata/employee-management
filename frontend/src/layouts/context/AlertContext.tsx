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


const AlertContext = createContext<AlertContextType | undefined>(undefined)


interface AlertProviderProps {
    children: ReactNode
}


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

export const useAlert = () => {
    const context = useContext(AlertContext)
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider")
    }
    return context
}
