import {Link} from "react-router-dom"
import {useTitle} from "../../../layouts/context/TitleContext.tsx"
import {useEffect} from "react"


/**
 * Composant pour la page d'accueil'
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const Home = () => {


    const {setTitle} = useTitle() // Pour le titre de page

    // Gestion de TitleContext
    useEffect(() => {
        setTitle('Home')
    }, [setTitle])

    return (
        <div className="mx-auto max-w-2xl py-14 sm:py-24 lg:py-32">
            <div className="text-center">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Welcome 😊
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet
                    fugiat veniam occaecat.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to={"/employees"}
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get started <span aria-hidden="true">→</span>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Home
