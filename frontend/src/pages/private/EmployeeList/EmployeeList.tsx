import {IEmployee} from "../../../shared/models/entities/employees.model.ts"
import {useEffect, useState} from "react"
import AddButton from "../../../components/AddButton.tsx"
import {getEmployees} from "../../../shared/services/employee.service.ts"
import {Link, useLocation} from "react-router-dom"
import './EmployeeList.css'
import Alert from "../../../components/Alert.tsx"
import Pagination from "../../../components/Pagination.tsx"
import {IPaginator} from "../../../shared/utils/interfaces.ts"


const EmployeeList = () => {

    const [employees, setEmployees] = useState<IEmployee[]>([])
    const [paginator, setPaginator] = useState<IPaginator | null>(null)

    const location = useLocation()

    const message = location.state?.message

    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchEmployees() {
            try {
                const data = await getEmployees() // Appelle l'API pour récupérer les données

                setEmployees(data.items ? data.items : [])
                setPaginator(data.paginator)
            } catch (error) {
                console.error('Erreur lors du chargement de l’employé', error)
            }
        }

        fetchEmployees()

    }, [])

    const handleOnChangePage = async (page: number) => {
        try {

            const data = await getEmployees(page)

            setEmployees(data.items ? data.items : [])
            setPaginator(data.paginator)

        } catch (err: any) {

            setError(err.message)

        }
    }


    return (
        <>
            {message && <Alert color="success">{message}</Alert>}

            <AddButton></AddButton>

            <table className="table-auto w-full  m-5">
                <thead>
                <tr>
                    <th className="table-cell">Full name</th>
                    <th className="table-cell">Date of birth</th>
                    <th className="table-cell"></th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr className="border-t border-gray-300" key={employee.id}>
                        <td className="table-cell">{employee.fullName}</td>
                        <td className="table-cell">{employee.dateOfBirth.toString()}</td>
                        <td className="table-cell ">
                            <Link
                                to={"/employees/update/" + employee.id}
                                className="link-blue">
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {paginator && <Pagination paginator={paginator} onChangePage={handleOnChangePage}></Pagination>}
        </>
    )

}

export default EmployeeList
