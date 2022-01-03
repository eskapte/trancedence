export interface IFriendsState {
    friendsList: IFriend[]
}

export interface IFriend {
    id: string
    username: string
    avatar?: string
    isOnline: boolean
}

export interface IFriendsAction {
    type: friendsTypes
    payload?: IFriendsPayload
}

export enum friendsTypes {

}

export interface IFriendsPayload {
    
}
