import { IFriendsState, IFriendsAction } from './interfaces';


const initialState: IFriendsState = {
    friendsList: [
        {
            id: "1",
            username: "Lhawick",
            isOnline: false
        },
        {
            id: "2",
            username: "Lhawick",
            isOnline: true
        },
        {
            id: "3",
            username: "Lhawick",
            isOnline: false
        }
    ]
}

export const FriendsReducer = (state: IFriendsState = initialState, action: IFriendsAction) : IFriendsState => {
    switch (action.type) {
        default:
            return state;
    }
}