import React from "react";
import MenuBtn from "../../components/MenuBtn"

const Friends: React.FC = () => {
    return (
        <section id='friends' className="main-window">
            <header className="profile__header">
                <MenuBtn/>
                <h2 className="header__text">Друзья</h2>
            </header>
        </section>
    )
}

export default Friends;