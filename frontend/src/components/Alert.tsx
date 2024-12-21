import React from "react"


interface Props {
    children: string,

    color: 'error' | 'success' | 'info',
}


const Alert = ({children, color}: Props) => {
    const alertStyles = {
        success: 'bg-green-100 text-green-800 border border-green-300',
        error: 'bg-red-100 text-red-800 border border-red-300',
        info: 'bg-blue-100 text-blue-800 border border-blue-300'
    }

    return (
        <div
            className={`p-4 mb-4 rounded-lg ${alertStyles[color]} flex items-center justify-between`}
        >
            <span>{children}</span>
            <button
                className="ml-4 text-lg font-semibold text-opacity-70 hover:text-opacity-100"
                onClick={() => {
                } /* Logique pour fermer l'alerte */}
            >
                &times;
            </button>
        </div>
    )
}

export default Alert
