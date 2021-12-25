import { chatActionTypes } from "./actions";

export interface IChatState {
    activeChat: number | null | undefined
    chatList: IChatPreview[]
}

export interface IChatAction {
    type: chatActionTypes
    payload?: IChatPayload
}

export interface IChatPayload {
    activeChat: number
}

export interface IChatPreview {
    id: number
    avatar: string | null
    username: string
    lastMsg: string | null
    lastMsgDeltaTime: string
    unread?: number
}