/**
 * Interface qui contient la structure des réponses uniformes
 *
 */
export interface IResponseType<T> {

    message: string;

    data: T

}

/**
 * Interface qui gère la pagination d'une liste
 *
 */
export interface IPaginationResult<T> {

    items?: T

    paginator: IPaginator

}

/**
 * Interface qui contient les éléments de la pagination d'une liste
 *
 */
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