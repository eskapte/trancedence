import { AuthActionTypes, IAuthPayload } from './types';

export const userAuth = (payload: IAuthPayload) => ({
    type: AuthActionTypes.AUTH,
    payload
})