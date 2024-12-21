import {IEmployee} from "../shared/models/entities/employees.model.ts"
import {Link} from "react-router-dom"


interface Props {
    employee: IEmployee;

}


const EmployeeElementList = ({employee}: Props) => {

    return (
        <>


            <li className="flex justify-between gap-x-6 py-5" key={employee.id}>
                <div className="flex min-w-0 gap-x-4">

                    <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">{employee.fullName}</p>
                    </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">{employee.dateOfBirth.toString()}</p>
                </div>
                <div className="shrink-0 flex gap-1">
                    <Link to={"/employees/" + employee.id}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">
                            Card
                        </button>
                    </Link>
                </div>
            </li>
        </>
    )
}

export default EmployeeElementList
