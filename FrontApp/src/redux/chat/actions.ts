import { IChatAction, IChatPayload } from "./interfaces"

export enum chatActionTypes {
    CHAT_OPEN,
    CHAT_CLOSE
}

export const openChat = (payload: IChatPayload): IChatAction => {
    return {
        type: chatActionTypes.CHAT_OPEN,
        payload
    }
}

export const closeChat = (payload: IChatPayload): IChatAction => {
    return {
        type: chatActionTypes.CHAT_CLOSE,
    }
}