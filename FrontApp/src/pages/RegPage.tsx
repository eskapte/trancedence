import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootReducerType } from "../redux/reducers";
import { AuthActionTypes, AuthSagasTypes } from '../redux/auth/types';
import { errors, validateForm } from "../helpers";
import { useNavigate } from 'react-router';

const RegPage: React.FC = () => {

	const usernameRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const passwordRepeatRef = useRef<HTMLInputElement | null>(null);

  const error = useSelector((state: RootReducerType) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendForm = async (e: any) => {
    e.preventDefault();
    dispatch({type: AuthActionTypes.CLEAR_ERROR})

    const usernameInput = usernameRef.current?.value || ""
    const passwordInput = passwordRef.current?.value || ""
    const passwordRepeatInput = passwordRepeatRef.current?.value || ""

    const formError: errors | null = validateForm(usernameInput, passwordInput, passwordRepeatInput);

    if (formError)
    {
        dispatch({type: AuthActionTypes.REG_ERROR, payload: {error: formError}})
        return
    }
    
    dispatch({
        type: AuthSagasTypes.SEND_REG_FORM,
        payload: {username: usernameInput, password: passwordInput, redirect: () => navigate("/auth")}
    })

  };

  return (
    <section id="reg-page">
      <header>
        <h1>Pong 2021</h1>
      </header>
      <div className="reg-form">
        <h2>Регистрация</h2>
        <form method="POST">
          <label>
            Логин:
            <br />
            <input
							ref={usernameRef}
              type="text"
              name="login"
              placeholder="Придумайте себе уникальное имя"
            ></input>
          </label>
          <label>
            Пароль:
            <br />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Пароль мин. 8 символов"
            />
          </label>
          <label>
            Повтор пароля:
            <br />
            <input
              ref={passwordRepeatRef}
              type="password"
              name="password-repeat"
              placeholder="Повторите пароль"
            />
          </label>
					<span style={{color: "red", marginTop: "0.5em"}}>{error ? error : ""}</span>
          <button onClick={(e) => sendForm(e)}>Зарегестрироваться</button>
          <Link to="/auth">Авторизоваться</Link>
        </form>
      </div>
    </section>
  );
};

export default RegPage;
