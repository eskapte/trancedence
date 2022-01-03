import React, {useEffect} from "react";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { RootReducerType } from "../redux/reducers";
import { IChatPreview } from '../redux/chat/interfaces';

const ChatList: React.FC = () => {

    useEffect(() => getListHeight(), [])
    setEventResize();

    const chatList: IChatPreview[] = useSelector((state: RootReducerType) => state.chats.chatList)

    return (
        <section className="message__list">
            <span className="message__filter">Последние:</span>
            <div className="chats">
            {
                chatList.map(chat => <ChatItem key={chat.id} {...chat}/>)
            }
            </div>
        </section>
    )
}

export default ChatList

function getListHeight() : void
{
    const H2El: HTMLElement | null = document.querySelector(".message__list header h2")
    const chatListEl: HTMLElement | null = document.querySelector(".chats")

    if (H2El && chatListEl)
    {
        const neededHeight: number = document.documentElement.clientHeight 
                                        - H2El.getBoundingClientRect().bottom - 20
        chatListEl.style.height = `${neededHeight}px`
    }
}

function setEventResize(): void
{
    window.addEventListener("resize", getListHeight, false)
}