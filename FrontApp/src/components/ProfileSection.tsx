import React from "react";

import defaultAvatar from "../assets/img/default-avatar.png"
import MenuBtn from "./MenuBtn";
import { useSelector } from 'react-redux';
import { RootReducerType } from '../redux/reducers';

const ProfileSection: React.FC = () => {

    const avatar = useSelector((state:RootReducerType) => state.auth.avatar)

    return (
        <section className='profile'>
            <header className="profile__header">
            <MenuBtn/>
            <h2 className="header__text">Профиль</h2>
            </header>
            <div className="profile__info">
                <div className="profile__image-wrapper">
                    <img src={avatar ?? defaultAvatar} alt="profile" className="profile__img"/>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="15" height="15" rx="7.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM8.14645 4.14645C8.34171 3.95118 8.65829 3.95118 8.85355 4.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L6.70711 11H4.5C4.22386 11 4 10.7761 4 10.5V8.29289L8.14645 4.14645Z" fill="white"/>
                    </svg>
                </div>
                <h2 className="profile__username">
                    Lhawick
                </h2>
            </div>
        </section>
    )
}

export default ProfileSection