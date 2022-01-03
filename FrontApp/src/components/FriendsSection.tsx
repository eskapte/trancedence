import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../redux/reducers";
import FriendsList from "./FriendsList";
import MenuBtn from "./MenuBtn";
import SearchBar from './SearchBar';
import _ from "lodash";
import _debounce from "lodash/debounce"

const FriendsSection: React.FC = () => {

    const [isSearch, setSearchStatus] = useState<boolean>(false);
    const [searchBarValue, setSeatchBarValue] = useState<string>("");

    const friendsList = useSelector((state:RootReducerType) => state.friends.friendsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sendDelay = useCallback(_debounce(() => console.log("send"), 1000), [])

    const searchFriends = (e: ChangeEvent<HTMLInputElement>) => {
        setSeatchBarValue(e.target.value)
    }

    useEffect(() => {
        if (searchBarValue.trim() !== "")
        {
            setSearchStatus(true)
            sendDelay()
        }
        else
            setSearchStatus(false)
    }, [searchBarValue, sendDelay])

    return (
        <section className="friends">
            <header className="friends__header">
                <MenuBtn/>
                <h2 className="header__text">Друзья</h2>
            </header>
            <SearchBar name='friends-search' onChange={searchFriends}/>
            <span className="friends__filter">{isSearch ? "Поиск людей" : "Все друзья"}</span>
            <FriendsList friendsList={friendsList}/>
        </section>
    )
}

export default FriendsSection