export interface ResponseType<T> {

    message: string;

    data: T

}


export interface IPaginationResult<T> {

    items?: T

    paginator: IPaginator

}


export interface IPaginator {

    totalItems: number

    itemsPerPage: number

    limit: number

    page: number

    totalPages: number

    prevPage: number | null

    nextPage: number | null

    hasNextPage: boolean

    hasPrevPage: boolean

    offset: number

}


export interface IPaginationData {

    page: number;

    limit: number;

    totalItems: number;

}