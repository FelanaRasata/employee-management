import {FormEvent, useEffect, useState} from "react"
import {IEmployee} from "../core/model/employees.model.ts"
import {Link, useNavigate, useParams} from "react-router-dom"
import {deleteEmployee, getEmployee, updateEmployee} from "../core/service/employee.service.ts"
import ModalDanger from "../../../shared/core/component/ModalDanger.tsx"
import LinkReturn from "../../../shared/core/component/LinkReturn.tsx"
import {useTitle} from "../../../layouts/context/TitleContext.tsx"
import {useAlert} from "../../../layouts/context/AlertContext.tsx"

/**
 * Composant pour la modification d'un employé
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const EmployeeEdit = () => {

    const navigate = useNavigate()


    const {showAlert} = useAlert() // Pour l'affichage d'alert

    const {setTitle} = useTitle() // Pour le titre de page

    // Gestion de TitleContext
    useEffect(() => {
        setTitle('Employee Edit')
    }, [setTitle])


    const {id} = useParams() // param du path

    /*
    * On prend l'employée correspondant à l'id
    * */
    useEffect(() => {
        async function fetchEmployee() {
            try {
                const data = await getEmployee(+id!) // Appelle l'API pour récupérer les données

                if (data)
                    setEmployee(data)
                else
                    navigate('/employees')

            } catch (error) {
                console.error('Erreur lors du chargement de l’employé', error)
            }
        }

        fetchEmployee()

    }, [])

    /*
    * Gestion des variables pour le formulaire
    * */
    const [employee, setEmployee] = useState<IEmployee>({
        fullName: "",
        dateOfBirth: ""
    })


    /*
   * Appel de l'action de la modification de l'employée
   * */
    const handleOnUpdate = async (e: FormEvent) => {
        e.preventDefault()

        try {

            const message = await updateEmployee(+id!, employee!)
            showAlert(message, 'success')
            navigate('/employees')

        } catch (err) {

            const error = err as Error
            showAlert(error.message, 'error')

        }
    }

    // Variable l'affichage du Modal Delete
    const [isVisible, setIsVisible] = useState<boolean>(false)

    /*
   * Appel de l'action de la suppression de l'employée
   * */
    const handleOnDelete = async () => {

        try {

            const message = await deleteEmployee(employee!.id!)
            showAlert(message, 'success')
            navigate('/employees')

        } catch (err) {

            const error = err as Error
            showAlert(error.message, 'error')

        }

    }

    return (
        <>
            {/*Lien vers la page précedente*/}
            <LinkReturn link={"/employees"}>
                Employees
            </LinkReturn>

            {/*Modal pour confirmer la suppression*/}
            <ModalDanger
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                onConfirm={handleOnDelete}
                title={"Remove employee"}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </ModalDanger>

            {/*Formulaire de modification d'employé*/}
            <form onSubmit={handleOnUpdate}>
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="first-name" className="label">
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        value={employee?.fullName}
                                        onChange={(event) => {
                                            setEmployee(e => (
                                                {...e, fullName: event.target.value}
                                            ))
                                        }}
                                        className="input"
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="label">
                                    Date of birth
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="street-address"
                                        name="street-address"
                                        type="date"
                                        autoComplete="street-address"
                                        value={employee.dateOfBirth.toString()}
                                        onChange={(event) => setEmployee(e => (
                                            {...e, dateOfBirth: event.target.value}
                                        ))}
                                        className="input"
                                        required={true}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link to="/employees" className="cancel-button">
                        Cancel
                    </Link>

                    <a
                        onClick={() => setIsVisible(true)}
                        className="danger-button"
                    >
                        Delete
                    </a>

                    <button
                        type="submit"
                        className="confirm-button"
                    >
                        Update
                    </button>

                </div>
            </form>
        </>
    )
}

export default EmployeeEdit
