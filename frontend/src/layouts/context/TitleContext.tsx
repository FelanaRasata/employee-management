import {createContext, ReactNode, useContext, useState} from 'react'


interface TitleContextProps {
    setTitle: (title: string) => void;
}


const TitleContext = createContext<TitleContextProps | undefined>(undefined)


interface TitleProviderProps {
    children: ReactNode
}


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


export const useTitle = () => {
    const context = useContext(TitleContext)
    if (!context) {
        throw new Error('useTitle must be used within a TitleProvider')
    }
    return context
}