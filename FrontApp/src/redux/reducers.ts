import {combineReducers} from 'redux'

import { authReducer } from './auth/reducer';
import { chatReducer } from "./chat/reducer";
import { FriendsReducer } from './friends/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    chats: chatReducer,
    friends: FriendsReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>