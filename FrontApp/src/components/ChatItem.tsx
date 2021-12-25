import React from "react";
import { useDispatch } from "react-redux";
import defaultAvatar from "../assets/img/default-avatar.png"
import { IChatAction, IChatPreview } from '../redux/chat/interfaces';
import { openChat } from '../redux/chat/actions';
import { useNavigate } from "react-router";

const ChatItem: React.FC<IChatPreview> = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function open(id: number) {
        dispatch<IChatAction>(openChat({activeChat: id}))
        navigate(`${id}`)
    }

    return (
        <div className={"chat " + (props.unread ? "unread" : "")} onClick={() => open(props.id)}>
            <img
                src={props.avatar ? props.avatar : defaultAvatar} 
                alt="logo" 
                className="chat__img"
            />
            <h4 className="chat__login">{props.username}</h4>
            <p className="chat__last-msg">{props.lastMsg}</p>
            {
                props.unread && 
                    <span className="chat__unread-cnt">10</span>
            }
            <span className="chat__delta-time">{props.lastMsgDeltaTime}</span>
        </div>
    )
}

export default ChatItem