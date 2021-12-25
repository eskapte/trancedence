import { chatActionTypes } from './actions';
import { IChatAction, IChatState } from './interfaces';


const initialState: IChatState = {
    activeChat: null,
    chatList: [
        {
            id: 1,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
            unread: 10
        },
        {
            id: 2,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
        },
        {
            id: 3,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
        },
        {
            id: 4,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
        },
        {
            id: 5,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
        },
        {
            id: 6,
            avatar: null,
            username: "Lhawick",
            lastMsg: "Привет! Пойдешь играть?Lorem ipsum dolor sit amet",
            lastMsgDeltaTime: "1н",
        },
    ]
}

export const chatReducer = (state: IChatState = initialState, action: IChatAction): IChatState =>
{
    switch (action.type)
    {
        case chatActionTypes.CHAT_OPEN:
            return {...state, activeChat: action.payload?.activeChat}
        case chatActionTypes.CHAT_CLOSE:
            return {...state, activeChat: null}
        default:
            return state
    }
}