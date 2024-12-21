import {AxiosError} from 'axios'
import {IPaginationResult, ResponseType} from "../utils/interfaces.ts"
import {IEmployee} from "../models/entities/employees.model.ts"
import axios from './api.service.ts'


const BASE_ENDPOINT = 'employee'

export const createEmployee = async (employee: IEmployee): Promise<ResponseType<IEmployee>> => {

    try {

        const url = `${BASE_ENDPOINT}`

        const response =
            await axios.post<ResponseType<IEmployee>>(url, employee)

        console.log(response)
        return response.data

    } catch (error) {
        const err = error as AxiosError
        console.log(err)
        throw new Error(err.message || 'Erreur lors de la connexion')
    }

}


export const getEmployee = async (id: number): Promise<IEmployee> => {
    try {

        const url = `${BASE_ENDPOINT}/${id}`
        const response =
            await axios.get<ResponseType<IEmployee>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError
        console.log(err)
        throw new Error(err.message || 'Erreur lors de la connexion')

    }
}


export const getEmployees = async (page: number = 1, keyword: string = ''): Promise<IPaginationResult<IEmployee[]>> => {
    try {

        let url = `${BASE_ENDPOINT}?page=${page}`
        if (keyword) url += `&keyword=${keyword}`

        const response =
            await axios.get<ResponseType<IPaginationResult<IEmployee[]>>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError
        console.log(err)
        throw new Error(err.message || 'Erreur lors de la connexion')

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

        const err = error as AxiosError
        console.log(err)
        throw new Error(err.message || 'Erreur lors de la connexion')

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

