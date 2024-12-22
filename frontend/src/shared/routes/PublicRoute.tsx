import {Navigate} from "react-router-dom"
import {ReactNode} from "react"


interface Props {
    children: ReactNode;
}


/**
 * Protection
 * */
const PublicRoute = ({children}: Props) => {

    const isAuthenticated = Boolean(localStorage.getItem("token")) // Récupère le token JWT depuis localStorage

    return isAuthenticated ? <Navigate to="/employees" replace/> : <>{children}</>
}

export default PublicRoute
