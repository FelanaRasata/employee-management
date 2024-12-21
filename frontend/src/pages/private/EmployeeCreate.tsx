import {FormEvent, useState} from "react"
import {IEmployee} from "../../shared/models/entities/employees.model.ts"
import {Link, useNavigate} from "react-router-dom"
import {createEmployee} from "../../shared/services/employee.service.ts"
import LinkReturn from "../../components/LinkReturn.tsx"
import {XMarkIcon} from "@heroicons/react/24/outline"


const EmployeeCreate = () => {

    const [employee, setEmployee] = useState<IEmployee>({
        fullName: "",
        dateOfBirth: ""
    })

    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null) // Réinitialise l'erreur

        try {

            const token = await createEmployee(employee)

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

            <form onSubmit={handleOnSubmit} className="mt-4">
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        {/* <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive
                            mail.</p>*/}

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
