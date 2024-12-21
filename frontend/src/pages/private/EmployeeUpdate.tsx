import {FormEvent, useEffect, useState} from "react"
import {IEmployee} from "../../shared/models/entities/employees.model.ts"
import {Link, useNavigate, useParams} from "react-router-dom"
import {deleteEmployee, getEmployee, updateEmployee} from "../../shared/services/employee.service.ts"
import ModalDelete from "../../components/ModalDelete.tsx"
import LinkReturn from "../../components/LinkReturn.tsx"


const EmployeeUpdate = () => {
    const {id} = useParams()

    const [employee, setEmployee] = useState<IEmployee>({
        fullName: "",
        dateOfBirth: ""
    })

    const [isVisible, setIsVisible] = useState<boolean>(false)


    const navigate = useNavigate()

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

    const [error, setError] = useState<string | null>(null)

    const handleOnUpdate = async (e: FormEvent) => {
        e.preventDefault()
        setError(null) // Réinitialise l'erreur

        try {

            const message = await updateEmployee(+id!, employee!)

            navigate('/employees', {
                state: {message: message}
            })

        } catch (err: any) {

            setError(err.message)

        }
    }

    const handleOnDelete = async () => {
        setError(null) // Réinitialise l'erreur

        try {

            const message = deleteEmployee(employee!.id!)
            console.log(message)
            navigate('/employees')

        } catch (err: any) {

            setError(err.message)

        }
    }

    return (
        <>
            <LinkReturn link={"/employees"}>
                Employees
            </LinkReturn>

            <ModalDelete
                employee={employee!}
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                onDelete={handleOnDelete}>
            </ModalDelete>

            <form onSubmit={handleOnUpdate}>
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        {/*<h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive
                            mail.</p>*/}

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

export default EmployeeUpdate
