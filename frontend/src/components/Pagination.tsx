import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid"
import {IPaginator} from "../shared/utils/interfaces.ts"


interface Props {
    paginator: IPaginator,

    onChangePage: (page: number) => void
}


const Pagination = ({paginator, onChangePage}: Props) => {

    const total = paginator.totalItems
    const start = paginator.offset
    const end = (paginator.offset + paginator.itemsPerPage) > total ? total : (paginator.offset + paginator.itemsPerPage)

    const handlePreviousPage = () => {
        onChangePage(paginator.page--)
    }

    const handleNextPage = () => {
        onChangePage(paginator.page++)
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{start}</span> to{" "}
                        <span className="font-medium">{end}</span> of{" "}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex gap-2 rounded-md shadow-sm"
                    >
                        <button
                            className={paginator.hasPrevPage ? "pagination-button rounded-l-md" : "pagination-button-disable rounded-l-md"}
                            disabled={!paginator.hasPrevPage}
                            onClick={handlePreviousPage}
                        >

                            <ChevronLeftIcon aria-hidden="true" className="size-5"/>
                            Previous
                        </button>

                        <button
                            className={paginator.hasNextPage ? "pagination-button rounded-r-md" : "pagination-button-disable rounded-r-md"}
                            disabled={!paginator.hasNextPage}

                            onClick={handleNextPage}

                        >
                            Next
                            <ChevronRightIcon aria-hidden="true" className="size-5"/>

                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination
