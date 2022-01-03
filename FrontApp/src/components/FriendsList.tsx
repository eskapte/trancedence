import React from "react";
import FriendItem from "./FriendItem";
import { IFriend } from '../redux/friends/interfaces';

const FriendsList: React.FC<FriendsListProps> = (props) => {
    return (
        <div className="friends__list">
            <div className="friends__item">
                {
                    props.friendsList.map(friend => <FriendItem key={friend.id} {...friend}/>)
                }
            </div>
        </div>
    )
}

interface FriendsListProps {
    friendsList: IFriend[]
}

export default FriendsList;