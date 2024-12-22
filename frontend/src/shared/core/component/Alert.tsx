import {useAlert} from "../../../layouts/context/AlertContext.tsx"
import {useEffect} from "react"


interface Props {
    duration: number
}


/**
 * Composant pour les alertes
 * @param duration durée d'affichage
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const Alert = ({duration = 3000}: Props) => {

    const {alert, closeAlert} = useAlert()  // Pour la gestion d'alerte

    useEffect(() => {
        const timer = setTimeout(() => {
            closeAlert() // Fermer l'alerte après la durée spécifiée
        }, duration)

        // Nettoyer le timer si l'alerte est fermée avant la fin de la durée
        return () => clearTimeout(timer)
    }, [alert, closeAlert, duration])

    if (!alert) return null

    // Variable pour la couleur de l'alerte (le type de l'alerte)
    const alertStyles = {
        success: "bg-green-100 text-green-800 border border-green-300",
        error: "bg-red-100 text-red-800 border border-red-300",
        info: "bg-blue-100 text-blue-800 border border-blue-300"
    }


    return (
        <div
            className={`fixed top-4 right-4 z-50 max-w-sm w-full shadow-lg rounded-lg ${alertStyles[alert.color]} flex items-center justify-between p-4`}
        >
            <span>{alert.message}</span>
            <button
                className="ml-4 text-lg font-semibold text-opacity-70 hover:text-opacity-100"
                onClick={closeAlert}
            >
                &times;
            </button>
        </div>
    )
}

export default Alert
