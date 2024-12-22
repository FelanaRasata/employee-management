import {useAlert} from "../../../layouts/context/AlertContext.tsx"


const Alert = () => {
    const {alert, closeAlert} = useAlert()

    if (!alert) return null

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
