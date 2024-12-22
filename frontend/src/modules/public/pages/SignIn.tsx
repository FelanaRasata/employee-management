import {FormEvent, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {signIn} from "../core/service/auth.service.ts"
import {SignInRequestDTO} from "../core/model/dto/SignInRequestDTO.ts"
import {useAlert} from "../../../layouts/context/AlertContext.tsx"


const SignIn = () => {

    const navigate = useNavigate()

    const {showAlert} = useAlert()

    /*
    * Gestion des variables pour le formulaire
    * */
    const [username, setUsername] = useState('admin@gmail.com')
    const [password, setPassword] = useState('Admin@123')


    /*
   * Appel de l'action de connexion
   * */
    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {

            const signUpRequestDTO: SignInRequestDTO = {username, password}
            const token = await signIn(signUpRequestDTO)

            localStorage.setItem('token', token)
            navigate('/employees')

        } catch (err) {
            const error = err as Error

            showAlert(error.message, 'error')

        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>


                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleOnSubmit} className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="input"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="block-button">Sign in
                            </button>

                            <Link to="/signup"
                                  className="link-button">
                                Sign up
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignIn
