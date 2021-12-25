export interface IAuthState {
    username?: string | null
    avatar?: string
    token?: string | null
    error?: string
}

export interface IAuthAction {
    type: AuthActionTypes,
    payload: IAuthPayload
}

export interface IAuthPayload {
    username?: string,
    avatar?: string,
    token?: string | null
    error?: string
}

export interface IAuthInput {
    username: string,
    password: string,
    redirect?: any
}

export interface IAuthSagaAction {
    type: AuthSagasTypes
    payload: IAuthInput
}

export enum AuthActionTypes {
    AUTH = "AUTH",
    REGISTER = "REGISTER",
    LOGOUT = "LOGOUT",
    AUTH_ERROR = "AUTH_ERROR",
    REG_ERROR = "REG_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR"
}

export enum AuthSagasTypes {
    SEND_AUTH_FORM = "SEND_AUTH_FORM",
    SEND_REG_FORM = "SEND_REG_FORM"
}