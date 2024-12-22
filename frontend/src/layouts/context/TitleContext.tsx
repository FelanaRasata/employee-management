import {createContext, ReactNode, useContext, useState} from 'react'


interface TitleContextProps {
    setTitle: (title: string) => void;
}

/**
 * Crée le contexte pour le titre de page.
 */
const TitleContext = createContext<TitleContextProps | undefined>(undefined)


interface TitleProviderProps {
    children: ReactNode
}

/**
 * Fournisseur du contexte de titre.
 *
 * Il permet à tous les composants enfants d'accéder à l'état du titre de page
 *
 * @param {ReactNode} children - Les composants enfants qui auront accès au contexte de titre.
 * @returns {JSX.Element} Le fournisseur qui enveloppe les composants enfants.
 */
export const TitleProvider = ({children}: TitleProviderProps) => {

    const [title, setTitle] = useState('Default Title')

    return (
        <TitleContext.Provider value={{setTitle}}>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                </div>
            </header>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </TitleContext.Provider>
    )
}

/**
 * Hook personnalisé pour accéder facilement au titre de page.
 *
 * Ce hook permet aux composants de gérer le titre à afficher dans la page
 *
 * @throws {Error} Si le hook est utilisé en dehors du TitleProvider.
 * @returns {TitleContext} L'état d'authentification et les fonctions login/logout.
 */
export const useTitle = () => {
    const context = useContext(TitleContext)
    if (!context) {
        throw new Error('useTitle must be used within a TitleProvider')
    }
    return context
}