import {all, fork} from "redux-saga/effects"
import authSaga from './auth/saga';
import friendsSaga from './friends/saga';

export default function* rootSaga()
{
    yield all([
        fork(authSaga),
        fork(friendsSaga)
    ])
}
