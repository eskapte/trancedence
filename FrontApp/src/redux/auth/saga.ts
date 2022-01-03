import { all, call, fork, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { auth, reg } from '../../api/functions';
import { AuthActionTypes, AuthSagasTypes, IAuthSagaAction, IAuthPayload } from './types';
import { userAuth } from './actions';
import { setUserToLocalStore } from '../../helpers';

type AuthResponse = SagaReturnType<typeof auth>

function* login(action: IAuthSagaAction)
{
    try {
        const response: AuthResponse = yield call(auth, action.payload);
        const data: IAuthPayload = yield call(async() => await response)
        
        setUserToLocalStore(data);
        yield put(userAuth({...data}))
    }
    catch (e : any) {
        yield put({type: AuthActionTypes.AUTH_ERROR, payload: {error: e?.response?.data}})
    }
}

function* newUser(action: IAuthSagaAction)
{
    try {
        yield call(reg, action.payload)
        yield put({type: AuthActionTypes.REGISTER})
        yield call(action.payload.redirect)
    }
    catch(e: any) {
        yield put({type: AuthActionTypes.REG_ERROR, payload: {error: e?.response?.data}})
    }
}


function* watchLoginUser() {
    yield takeEvery(AuthSagasTypes.SEND_AUTH_FORM, login);
}

function* watchNewUser() {
    yield takeEvery(AuthSagasTypes.SEND_REG_FORM, newUser);
}

export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchNewUser)
    ])
}