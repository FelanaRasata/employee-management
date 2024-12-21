import {IBaseModel} from "./base.model.ts"


export interface IUser extends IBaseModel {

    username: string

    password?: string

}