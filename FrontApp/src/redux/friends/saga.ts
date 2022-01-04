import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getFriendsByQuery } from '../../api/functions';
import { FriendsSagaTypes, IFriend, IFriendsSagaAction } from './interfaces';
import { searchGlobalUsers } from './actions';

function* searchFriends(action: IFriendsSagaAction) {
    const response: IFriend[] = yield call(async () => await getFriendsByQuery(action.payload))
    yield put(searchGlobalUsers(response))
}

function* watchSearchFriends() {
    yield takeLatest(FriendsSagaTypes.SEARCH_FRIENDS, searchFriends);
}

export default function* friendsSaga() {
    yield all([
        fork(watchSearchFriends),
    ])
}