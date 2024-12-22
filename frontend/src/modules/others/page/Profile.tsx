import {useEffect} from "react"
import {useTitle} from "../../../layouts/context/TitleContext.tsx"
import {useUser} from "../../../layouts/context/UserContext.tsx"


/**
 * Composant pour le profil d'utilisateur en cours
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const Profile = () => {

    const {currentUser} = useUser() // Pour l'utilisateur en cours

    const {setTitle} = useTitle() // Pour le titre de page

    // Gestion de TitleContext
    useEffect(() => {
        setTitle('Profile')
    }, [setTitle])


    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900">User Information</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Username</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{currentUser?.username}</dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}

export default Profile
