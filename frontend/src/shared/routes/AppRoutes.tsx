import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignIn from '../../modules/public/pages/SignIn.tsx'
import SignUp from '../../modules/public/pages/SignUp.tsx'
import EmployeeCreate from '../../modules/employee/page/EmployeeCreate.tsx'
import EmployeeEdit from '../../modules/employee/page/EmployeeEdit.tsx'
import EmployeeList from "../../modules/employee/page/EmployeeList/EmployeeList.tsx"
import Layout from "../../layouts/page/Layout.tsx"
import Home from "../../modules/others/page/Home.tsx"
import Profile from "../../modules/others/page/Profile.tsx"
import ProtectedRoute from "./ProtectedRoute.tsx"


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
                element: (
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "/profile",
        element: <Layout/>, // Layout commun
        children: [
            {
                index: true, // Route par défaut
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "/employees",
        element: <Layout/>, // Layout commun
        children: [
            {
                index: true, // Route par défaut
                element: (
                    <ProtectedRoute>
                        <EmployeeList/>
                    </ProtectedRoute>
                )
            },
            {
                path: "create",
                element: (
                    <ProtectedRoute>
                        <EmployeeCreate/>
                    </ProtectedRoute>
                )
            },
            {
                path: "update/:id",
                element: (
                    <ProtectedRoute>
                        <EmployeeEdit/>
                    </ProtectedRoute>
                )
            }
        ]
    }
]

// Créer le routeur avec `createBrowserRouter`
const router = createBrowserRouter(routes)

export default function AppRoutes() {
    return <RouterProvider router={router}/>
}