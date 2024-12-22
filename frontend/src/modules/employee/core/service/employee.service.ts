import {AxiosError} from 'axios'
import {IPaginationResult, IResponseType} from "../../../../shared/core/utils/interfaces.ts"
import {IEmployee} from "../model/employees.model.ts"
import axios from "../../../../shared/core/services/api.service.ts"


const BASE_ENDPOINT = 'employee'
const LIMIT_LIST = 10

/**
 * Fonction pour créer un employé via une requête POST à l'API backend.
 */
export const createEmployee = async (employee: IEmployee): Promise<IResponseType<IEmployee>> => {

    try {

        const url = `${BASE_ENDPOINT}`

        const response =
            await axios.post<IResponseType<IEmployee>>(url, employee)

        return response.data

    } catch (error) {
        const err = error as AxiosError<IResponseType<null>>


        throw new Error(err.response?.data.message || 'Save employee failed')
    }

}

/**
 * Fonction pour récupérer un employé via une requête GET avec son ID.
 */
export const getEmployee = async (id: number): Promise<IEmployee> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.get<IResponseType<IEmployee>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>
        throw new Error(err.response?.data.message || 'Get employee failed')

    }
}

/**
 * Fonction pour récupérer une liste d'employé via une requête GET avec les détails de pagination.
 */
export const getEmployees = async (page: number = 1): Promise<IPaginationResult<IEmployee[]>> => {
    try {

        const url = `${BASE_ENDPOINT}?page=${page}&limit=${LIMIT_LIST}`

        const response =
            await axios.get<IResponseType<IPaginationResult<IEmployee[]>>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>
        throw new Error(err.response?.data.message || 'Get employees failed')

    }
}

/**
 * Fonction pour modifier un employé via une requête PUT.
 */
export const updateEmployee = async (id: number, employee: IEmployee): Promise<string> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.put<IResponseType<null>>(url, employee)


        return response.data.message

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>
        throw new Error(err.response?.data.message || 'Update employee failed')

    }
}

/**
 * Fonction pour supprimer un employé via une requête DELETE.
 */
export const deleteEmployee = async (id: number): Promise<string> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.delete<IResponseType<null>>(url)

        return response.data.message

    } catch (error) {

        const err = error as AxiosError
        throw new Error(err.message || 'Erreur lors de la connexion')

    }
}

const employeeService = {

    createEmployee,

    getEmployee,

    getEmployees,

    updateEmployee,

    deleteEmployee

}

export default {employeeService}

