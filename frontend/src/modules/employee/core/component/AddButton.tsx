import {Link} from "react-router-dom"


const AddButton = () => {
    return (
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="/employees/create">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                    Add Employee
                </button>
            </Link>
        </div>
    )
}

export default AddButton
