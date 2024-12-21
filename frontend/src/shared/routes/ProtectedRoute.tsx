import {Navigate} from "react-router-dom"
import {ReactNode} from "react"


interface Props {
    children: ReactNode;
}


/**
 * Protection
 * */
const ProtectedRoute = ({children}: Props) => {

    const isAuthenticated = Boolean(localStorage.getItem("token")) // Récupère le token JWT depuis localStorage

    return isAuthenticated ? <>{children}</> : <Navigate to="/" replace/>
}

export default ProtectedRoute
