import { IFriendsState, IFriendsAction, friendsTypes } from './interfaces';


const initialState: IFriendsState = {
    friendsList: [
        {
            username: "Lhawick1",
            isOnline: false
        },
        {
            username: "Lhawick2",
            isOnline: true
        },
        {
            username: "Lhawick3",
            isOnline: false
        }
    ]
}

export const FriendsReducer = (state: IFriendsState = initialState, action: IFriendsAction) : IFriendsState => {
    switch (action.type) {
        case (friendsTypes.SEARCH_GLOBAL_USERS):
            return {...state, findedUsers: action.payload}
        case (friendsTypes.CLEAR_GLOBAL_USERS):
            return {friendsList: state.friendsList}
        default:
            return state;
    }
}