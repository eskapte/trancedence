import { friendsTypes, IFriend, IFriendsAction } from './interfaces';

export const searchGlobalUsers = (findedUsers: IFriend[]): IFriendsAction => ({
    type: friendsTypes.SEARCH_GLOBAL_USERS,
    payload: findedUsers
})

export const clearGlobalUsers = () => ({
    type: friendsTypes.CLEAR_GLOBAL_USERS
})
    