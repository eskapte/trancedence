import React from "react";
import SearchBar from "../../components/SearchBar";
import "../../assets/scss/messages.scss"
import ChatList from "../../components/ChatList";
import MenuBtn from "../../components/MenuBtn"

const Messages: React.FC = () => {
    return (
        <section id='messages' className="main-window">
            <header className="message__header">
                <MenuBtn/>
                <h2 className="header__text">Сообщения</h2>
            </header>
			<SearchBar/>
			<ChatList/>
        </section>
    )
}

export default Messages;