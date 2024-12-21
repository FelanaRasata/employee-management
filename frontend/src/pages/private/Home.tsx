import {Link} from "react-router-dom"


const Home = () => {
    return (
        <div className="mx-auto max-w-2xl py-20 sm:py-30 lg:py-40">
            <div className="text-center">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Welcome to the Employee Management
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet
                    fugiat veniam occaecat.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to={"/employees"}
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get started

                    </Link>
                  
                </div>
            </div>
        </div>
    )
}

export default Home
