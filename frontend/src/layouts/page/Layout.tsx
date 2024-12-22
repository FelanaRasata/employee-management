import {Outlet} from "react-router-dom"
import {TitleProvider} from "../context/TitleContext.tsx"
import Navbar from "../component/Navbar.tsx"
import {useUser} from "../context/UserContext.tsx"
import {useEffect} from "react"
import {getCurrentUser} from "../../modules/public/core/service/auth.service.ts"


const Layout = () => {

    const {setCurrentUser} = useUser()

    useEffect(() => {

        async function fetchEmployee() {
            try {
                const user = await getCurrentUser() // Appelle l'API pour récupérer les données
                setCurrentUser(user)

            } catch (error) {
                console.error('Erreur lors du chargement de l’employé', error)
            }
        }

        fetchEmployee()


    }, [setCurrentUser])

    return (
        <>
            <div className="min-h-full">
                <Navbar>

                </Navbar>

                <TitleProvider>
                    <Outlet/>
                </TitleProvider>
            </div>
        </>
    )
}

export default Layout
