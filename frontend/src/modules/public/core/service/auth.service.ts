import axiosInstance from '../../../../shared/core/services/api.service.ts'
import {AxiosError} from 'axios'
import {IResponseType} from "../../../../shared/core/utils/interfaces.ts"
import {UserRequestDTO} from "../model/dto/UserRequestDTO.ts"
import {IUser} from "../../../others/core/model/users.model.ts"


const BASE_ENDPOINT = 'auth'


interface JwtResponseDTO {

    username: string;

    token: string;

}


export const signIn = async (signUpRequestDTO: UserRequestDTO): Promise<string> => {

    try {

        const url = `${BASE_ENDPOINT}/sign-in`

        const response =
            await axiosInstance.post<IResponseType<JwtResponseDTO>>(url, signUpRequestDTO)

        console.log(response)
        return response.data.data.token // Retourne le token JWT

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>

        throw new Error(err.response?.data.message || 'Sign-in failed')

    }

}

export const signUp = async (userRequestDTO: UserRequestDTO): Promise<string> => {

    try {

        const url = `${BASE_ENDPOINT}/sign-up`

        const response =
            await axiosInstance.post<IResponseType<IUser>>(url, userRequestDTO)

        console.log(response)
        return response.data.message

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>

        throw new Error(err.response?.data.message || 'Sign-up failed')

    }

}

export const getCurrentUser = async (): Promise<IUser> => {
    try {

        const url = `${BASE_ENDPOINT}/current`

        const response =
            await axiosInstance.get<IResponseType<IUser>>(url)

        return response.data.data

    } catch (error) {

        const err = error as AxiosError<IResponseType<null>>

        throw new Error(err.response?.data.message || 'No Current user')

    }
}


const authService = {

    signIn,

    signUp

}

export default {authService}