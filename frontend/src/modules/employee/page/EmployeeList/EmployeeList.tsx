import {IEmployee} from "../../core/model/employees.model.ts"
import {useEffect, useState} from "react"
import AddButton from "../../core/component/AddButton.tsx"
import {getEmployees} from "../../core/service/employee.service.ts"
import {Link} from "react-router-dom"
import './EmployeeList.css'
import Pagination from "../../core/component/Pagination.tsx"
import {IPaginator} from "../../../../shared/core/utils/interfaces.ts"
import {useTitle} from "../../../../layouts/context/TitleContext.tsx"
import {useAlert} from "../../../../layouts/context/AlertContext.tsx"


/**
 * Composant pour la liste ds employés
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const EmployeeList = () => {

    const {showAlert} = useAlert() // Pour l'affichage d'alert

    const {setTitle} = useTitle() // Pour le titre de page

    // Gestion de TitleContext
    useEffect(() => {
        setTitle('Employee List')
    }, [setTitle])

    /*
    * Gestion des variables pour la liste des employés paginés
    * */
    const [employees, setEmployees] = useState<IEmployee[]>([])
    const [paginator, setPaginator] = useState<IPaginator | null>(null)

    /*
   * Appel de l'action pour récupérer la liste des employés
   * */
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

    /*
   * Fonction pour changer de page
   * */
    const handleOnChangePage = async (page: number) => {
        try {

            console.log("!!!!!",page)

            const data = await getEmployees(page)

            setEmployees(data.items ? data.items : [])
            setPaginator(data.paginator)

        } catch (err) {
            const error = err as Error
            showAlert(error.message, 'error')

        }
    }


    return (
        <>
            <AddButton></AddButton>

            {/*Table des employés*/}
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

            {/*Pagination des employés*/}
            {paginator && <Pagination paginator={paginator} onChangePage={(page)=>handleOnChangePage(page)}></Pagination>}
        </>
    )

}

export default EmployeeList
