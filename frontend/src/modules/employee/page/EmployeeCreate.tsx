import {FormEvent, useEffect, useState} from "react"
import {IEmployee} from "../core/model/employees.model.ts"
import {Link, useNavigate} from "react-router-dom"
import {createEmployee} from "../core/service/employee.service.ts"
import LinkReturn from "../../../shared/core/component/LinkReturn.tsx"
import {useTitle} from "../../../layouts/context/TitleContext.tsx"
import {useAlert} from "../../../layouts/context/AlertContext.tsx"


const EmployeeCreate = () => {

    const navigate = useNavigate()

    const {showAlert} = useAlert()

    const {setTitle} = useTitle()

    useEffect(() => {
        setTitle('Employee Add')
    }, [setTitle])


    /*
    * Gestion des variables pour le formulaire
    * */
    const [employee, setEmployee] = useState<IEmployee>({
        fullName: "",
        dateOfBirth: ""
    })

    /*
   * Appel de l'action de l'enregistrement de l'employée
   * */
    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {

            const saved = await createEmployee(employee)
            const message = saved.message + " : " + saved.data.fullName
            showAlert(message, 'success')
            navigate('/employees')

        } catch (err) {

            const error = err as Error
            showAlert(error.message, 'error')

        }
    }

    return (
        <>
            <LinkReturn link={"/employees"}>
                Employees
            </LinkReturn>

            <form onSubmit={handleOnSubmit} className="mt-4">
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        value={employee.fullName}
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
                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                    Street address
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
                    <button
                        type="submit"
                        className="confirm-button"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default EmployeeCreate
