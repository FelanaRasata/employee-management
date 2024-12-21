import {FormEvent, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import signIn from "../../shared/services/auth.service.ts"
import {SignUpRequestDTO} from "../../shared/models/dto/SignInRequestDTO.ts"


const SignIn = () => {

    const [username, setUsername] = useState('admin@gmail.com')
    const [password, setPassword] = useState('Admin@123')

    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null) // Réinitialise l'erreur

        try {

            const signUpRequestDTO: SignUpRequestDTO = {username, password}
            const token = await signIn(signUpRequestDTO)

            localStorage.setItem('token', token)

            navigate('/employees')

        } catch (err: any) {

            setError(err.message)

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
                                    className="block-button">Sign
                                in
                            </button>

                            <Link to='/signup'
                                  className="link-button">Sign
                                up
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignIn
