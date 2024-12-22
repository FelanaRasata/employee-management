import {IBaseModel} from "../../../../shared/core/entities/base.model.ts"


export interface IUser extends IBaseModel {

    username: string

    password?: string

}