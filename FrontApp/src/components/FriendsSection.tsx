import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../redux/reducers';
import FriendsList from './FriendsList';
import MenuBtn from "./MenuBtn";
import SearchBar from './SearchBar';
import _debounce from "lodash/debounce"
import { FriendsSagaTypes } from '../redux/friends/interfaces';
import { clearGlobalUsers } from '../redux/friends/actions';

const FriendsSection: React.FC = () => {

    const [isSearch, setSearchStatus] = useState<boolean>(false);
    const [searchBarValue, setSeatchBarValue] = useState<string>("");

    const dispatch = useDispatch();

    const friendsList = useSelector((state:RootReducerType) => state.friends.friendsList)
    const findedUsers = useSelector((state:RootReducerType) => state.friends.findedUsers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sendDelay = useCallback(
        _debounce((searchString) => dispatch({
            type: FriendsSagaTypes.SEARCH_FRIENDS, 
            payload: searchString
        }), 1000), [])

    const searchFriends = (e: ChangeEvent<HTMLInputElement>) => {
        setSeatchBarValue(e.target.value)
    }

    useEffect(() => {
        if (searchBarValue.trim() !== "")
        {
            setSearchStatus(true)
            sendDelay(searchBarValue)
        }
        else
        {
            setSearchStatus(false)
            dispatch(clearGlobalUsers())
        }
    }, [searchBarValue, sendDelay, dispatch])

    return (
        <section className="friends">
            <header className="friends__header">
                <MenuBtn/>
                <h2 className="header__text">Друзья</h2>
            </header>
            <SearchBar name='friends-search' onChange={searchFriends}/>
            <span className="friends__filter">{isSearch ? "Поиск друзей" : "Все друзья"}</span>
            <FriendsList friendsList={friendsList.filter(friend => friend.username.startsWith(searchBarValue.trim()))}/>
            {isSearch && 
            <>
                <span className="friends__filter">Глобальный поиск</span>
                <FriendsList friendsList={findedUsers ?? []}/>
            </>
            
            }
        </section>
    )
}

export default FriendsSection