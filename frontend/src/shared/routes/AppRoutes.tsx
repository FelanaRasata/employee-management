import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignIn from '../../pages/public/SignIn.tsx'
import SignUp from '../../pages/public/SignUp.tsx'
import EmployeeCreate from '../../pages/private/EmployeeCreate.tsx'
import EmployeeUpdate from '../../pages/private/EmployeeUpdate.tsx'
import EmployeeList from "../../pages/private/EmployeeList/EmployeeList.tsx"
import Layout from "../../layout/Layout.tsx"
import Home from "../../pages/private/Home.tsx"


const routes = [
    {
        path: '/',
        element: <SignIn/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: "/home",
        element: <Layout/>, // Layout commun
        children: [
            {
                index: true, // Route par défaut
                element: <Home/>
            }
        ]
    },
    {
        path: "/employees",
        element: <Layout/>, // Layout commun
        children: [
            {
                index: true, // Route par défaut
                element: <EmployeeList/>
            },
            {
                path: "create",
                element: <EmployeeCreate/>
            },
            {
                path: "update/:id",
                element: <EmployeeUpdate/>
            }
        ]
    }
]

// Créer le routeur avec `createBrowserRouter`
const router = createBrowserRouter(routes)

export default function AppRoutes() {
    return <RouterProvider router={router}/>
}