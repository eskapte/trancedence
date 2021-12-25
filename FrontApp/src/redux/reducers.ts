import {combineReducers} from 'redux'

import { authReducer } from './auth/reducer';
import { chatReducer } from "./chat/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    chats: chatReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>