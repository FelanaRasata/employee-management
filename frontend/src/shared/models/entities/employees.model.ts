import {IBaseModel} from "./base.model.ts"


export interface IEmployee extends IBaseModel {

    fullName: string

    dateOfBirth: Date | string

}