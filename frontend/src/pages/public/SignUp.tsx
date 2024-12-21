import './Public.css'
import {Link} from "react-router-dom"
import {useState} from "react"


const SignUp = () => {

    const [username, setUsername] = useState('admin@gmail.com')
    const [password, setPassword] = useState('Admin@123')
    const [confirmPassword, setConfirmPassword] = useState('Admin@123')

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto"
                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                         alt="Your Company"/>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Registration </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm/6 font-medium text-gray-900">Username</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" autoComplete="email" required
                                       className="input" value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm/6 font-medium text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" autoComplete="current-password"
                                       required
                                       className="input"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Confirm
                                    Password</label>
                            </div>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" autoComplete="current-password"
                                       required
                                       className="input"
                                       value={confirmPassword}
                                       onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="block-button">Sign
                                up
                            </button>

                            <Link to="/signin"
                                  className="link-button">Sign
                                In
                            </Link>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default SignUp
