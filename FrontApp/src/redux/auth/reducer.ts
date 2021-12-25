import { getUserFromLocalStore } from '../../helpers';
import { AuthActionTypes, IAuthAction, IAuthState } from './types';

const initialState: IAuthState = {
    username: null,
    token: null,
    ...getUserFromLocalStore()
}

export const authReducer = (state: IAuthState = initialState, action: IAuthAction): IAuthState =>
{
    switch (action.type)
    {
        case (AuthActionTypes.AUTH):
            return {...state, ...action.payload};
        case (AuthActionTypes.REGISTER):
            return state;
        case (AuthActionTypes.LOGOUT):
            return {username: null, token: null}
        case (AuthActionTypes.AUTH_ERROR):
            return {...state, error: action.payload.error}
        case (AuthActionTypes.REG_ERROR):
            return {...state, error: action.payload.error}
        case (AuthActionTypes.CLEAR_ERROR):
            return {...state, error: undefined}
        default:
            return state;
    }
}