import {IBaseModel} from "../../../../shared/core/entities/base.model.ts"

export interface IEmployee extends IBaseModel {

    fullName: string

    dateOfBirth: Date | string

}