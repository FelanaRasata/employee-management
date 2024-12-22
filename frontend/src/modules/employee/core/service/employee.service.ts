import {AxiosError} from 'axios'
import {IPaginationResult, ResponseType} from "../../../../shared/core/utils/interfaces.ts"
import {IEmployee} from "../model/employees.model.ts"
import axios from "../../../../shared/core/services/api.service.ts"


const BASE_ENDPOINT = 'employee'
const LIMIT_LIST = 10

export const createEmployee = async (employee: IEmployee): Promise<ResponseType<IEmployee>> => {

    try {

        const url = `${BASE_ENDPOINT}`

        const response =
            await axios.post<ResponseType<IEmployee>>(url, employee)

        console.log(response)
        return response.data

    } catch (error) {
        const err = error as AxiosError<ResponseType<null>>
        throw new Error(err.response?.data.message || 'Save employee failed')
    }

}


export const getEmployee = async (id: number): Promise<IEmployee> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.get<ResponseType<IEmployee>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError<ResponseType<null>>
        throw new Error(err.response?.data.message || 'Get employee failed')

    }
}


export const getEmployees = async (page: number = 1, keyword: string = ''): Promise<IPaginationResult<IEmployee[]>> => {
    try {

        let url = `${BASE_ENDPOINT}?page=${page}&limit=${LIMIT_LIST}`
        if (keyword) url += `&keyword=${keyword}`

        const response =
            await axios.get<ResponseType<IPaginationResult<IEmployee[]>>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError<ResponseType<null>>
        throw new Error(err.response?.data.message || 'Get employees failed')

    }
}


export const updateEmployee = async (id: number, employee: IEmployee): Promise<string> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.put<ResponseType<null>>(url, employee)

        console.log(response)

        return response.data.message

    } catch (error) {

        const err = error as AxiosError<ResponseType<null>>
        throw new Error(err.response?.data.message || 'Update employee failed')

    }
}


export const deleteEmployee = async (id: number): Promise<string> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.delete<ResponseType<null>>(url)

        return response.data.message

    } catch (error) {

        const err = error as AxiosError
        console.log(err)
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

