export enum fetchMethods {
    GET = "GET", 
    POST = "POST", 
    DELETE = "DELETE", 
    PUT = "PUT"
}

export interface IAuthParams {
    username: string
    password: string
}