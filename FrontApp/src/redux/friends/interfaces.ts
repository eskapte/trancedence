export interface IFriendsState {
    friendsList: IFriend[]
    findedUsers?: IFriend[]
}

export interface IFriend {
    username: string
    avatar?: string
    isOnline: boolean
}

export interface IFriendsAction {
    type: friendsTypes
    payload?: any
}

export enum friendsTypes {
    SEARCH_GLOBAL_USERS = "SEARCH_GLOBAL_USERS",
    CLEAR_GLOBAL_USERS = "CLEAR_GLOBAL_USERS"
}

export enum FriendsSagaTypes {
    SEARCH_FRIENDS = "SEARCH_FRIENDS"
}

export interface FriendsSearchSagaAction {
    searchString: string
}

export interface IFriendsSagaAction {
    type: FriendsSagaTypes
    payload: string
}