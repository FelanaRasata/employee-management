import axios from './api.service.ts'
import {AxiosError} from 'axios'
import {ResponseType} from "../utils/interfaces.ts"
import {SignUpRequestDTO} from "../models/dto/SignInRequestDTO.ts"
import {createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee} from "./employee.service.ts"


interface JwtResponseDTO {

    username: string;

    token: string;

}


const signIn = async (signUpRequestDTO: SignUpRequestDTO): Promise<string> => {

    try {

        const response =
            await axios.post<ResponseType<JwtResponseDTO>>('/auth/sign-in', signUpRequestDTO)

        console.log(response)
        return response.data.data.token // Retourne le token JWT

    } catch (error) {

        const err = error as AxiosError
        throw new Error(err.message || 'Erreur lors de la connexion')

    }

}

const signUp = 'null'


const authService = {

    signIn,

    signUp,


}

export default { authService}