import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AuthActionTypes, AuthSagasTypes } from '../redux/auth/types';
import { RootReducerType } from '../redux/reducers';

const AuthPage: React.FC = () => {

    document.body.style.backgroundColor = "#F2C94C";

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    
    const error = useSelector((state: RootReducerType) => state.auth.error);

    const sendForm = async (e: any) => {
        e.preventDefault();
        dispatch({type: AuthActionTypes.CLEAR_ERROR})

        const userInput = {
            username: usernameRef.current?.value || "",
            password: passwordRef.current?.value || ""
        }

        dispatch({type: AuthSagasTypes.SEND_AUTH_FORM, payload : userInput})
    }
    
    return (
        <section id="auth-page">
            <header>
                <h1>Pong 2021</h1>
            </header>
            <div className="auth-form">
                <h2>Авторизация</h2>
                <form method="POST">
                    <label>
                        Логин:<br/>
                        <input type='text' name='username' placeholder="Ваш логин" ref={usernameRef}></input>
                    </label>
                    <label>
                        Пароль:<br/>
                        <input type="password" name='password' placeholder="Ваш пароль" ref={passwordRef}/>
                    </label>
                    <span style={{color: "red", marginTop: "0.5em"}}>{error ? error : ""}</span>
                    <button onClick={(e) => sendForm(e)}>Авторизоваться</button>
                    <Link to="/reg">Зарегестрироваться</Link>
                </form>
            </div>
        </section>
    )
}

export default AuthPage;