import React from "react";
import MenuBtn from "../../components/MenuBtn";

const Settings: React.FC = () => {
    return (
        <section id='profile' className="main-window">
            <header className="profile__header">
                <MenuBtn/>
                <h2 className="header__text">Настройки</h2>
            </header>
        </section>
    )
}

export default Settings;