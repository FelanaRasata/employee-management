import {useState} from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import {UserCircleIcon} from "@heroicons/react/24/solid"
import ModalDanger from "../../shared/core/component/ModalDanger.tsx"
import {useUser} from "../context/UserContext.tsx"

// La liste à afficher dans la navigation
const navigation = [
    {name: 'Home', href: '/home'},
    {name: 'Employee', href: '/employees'}
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

/**
 * Composant fonctionnel qui affiche le NavBar du template.
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const Navbar = () => {

    const navigate = useNavigate()

    const {currentUser} = useUser() // Pour l'utilisateur en cours

    /**
     * Fonction qui sera appelée de la confirmation de la déconnexion
     */
    const handleSignOut = () => {

        localStorage.removeItem("token")
        navigate("/")

    }

    // Variable qui conditionne l'affichage du Modal de déconnexion
    const [isVisible, setIsVisible] = useState<boolean>(false)


    return (
        <>
            {/* Modal pour confirmer la déconnexion */}
            <ModalDanger
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                onConfirm={handleSignOut}
                title={"Sign Out"}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </ModalDanger>

            {/* Navbar */}
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                    className="size-8"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({isActive}) =>
                                                classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white ', 'rounded-md px-3 py-2 text-sm font-medium')
                                            }
                                        >

                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">

                                {/* Profile.tsx dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton
                                            className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5"/>
                                            <span className="sr-only">Open user menu</span>
                                            <UserCircleIcon className="size-8 rounded-full bg-white"/>
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <MenuItem>
                                            <a
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                            >
                                                Your profile
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                onClick={() => setIsVisible(true)}
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                            >
                                                Sign Out
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            {/* Mobile menu button */}
                            <DisclosureButton
                                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block"/>
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({isActive}) =>
                                    classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium')
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <UserCircleIcon className="size-10 rounded-full bg-white"/>
                            </div>
                            <div className="ml-3">
                                {/*<div className="text-base/5 font-medium text-white">{user.name}</div>*/}
                                <div className="text-sm font-medium text-gray-400">{currentUser?.username}</div>
                            </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            <DisclosureButton
                                as="a"
                                href="/profile"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Your profile
                            </DisclosureButton>
                            <DisclosureButton
                                as="a"
                                onClick={() => setIsVisible(true)}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Sign Out
                            </DisclosureButton>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

export default Navbar
