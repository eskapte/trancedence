import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import MenuBtn from "./MenuBtn";
import { IChatPreview } from '../redux/chat/interfaces';
import { RootReducerType } from "../redux/reducers";

import defaultAvatar from "../assets/img/default-avatar.png"
import { openChat } from '../redux/chat/actions';

const OpenChat: React.FC = () => {

    const openChatId = useSelector((state:RootReducerType) => state.chats.activeChat)
    const navigate = useNavigate()

    if (!openChatId)
        navigate("/main/chats")
    
    const openChat: IChatPreview | undefined = useSelector((state:RootReducerType) => state.chats.chatList.find(chat => chat.id === openChatId))

    if (!openChat)
        navigate("/main/chats")

    return (
        <section id='open-chat' className="main-window open-chat">
            <header className="open-chat__header">
                <MenuBtn back/>
                <h3 className="open-chat__username">{openChat?.username}</h3>
                <img src={openChat?.avatar ? openChat.avatar : defaultAvatar} alt="avatar" className="open-chat__avatar"/>
            </header>
        </section>
    )
}

export default OpenChat