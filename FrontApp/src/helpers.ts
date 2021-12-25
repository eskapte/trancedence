import validator from 'validator';
import { IAuthPayload } from './redux/auth/types';

export function showMenu() : void
{
    const menuEl : HTMLElement | null = document.querySelector("#main-nav")

    if (menuEl)
    {
        menuEl.classList.add("show")
    }
}

export function hideMenu() : void
{
    const menuEl : HTMLElement | null = document.querySelector("#main-nav")

    if (menuEl)
    {
        menuEl.classList.remove("show")
    }
}

export function getUserFromLocalStore(): IAuthPayload | undefined {
    const jsonData = localStorage.getItem("userData")
    if (!jsonData)
        return ;
    const userData = JSON.parse(jsonData);
    return userData;
}

export function setUserToLocalStore(userData: IAuthPayload): void {
    localStorage.setItem("userData", JSON.stringify(userData))
}

export enum errors {
    voidUsername = "Пожалуйста, придумайте логин",
    shortUsername = "Слишком короткий логин",
    invalidPassword = "Пожалуйста, придумайте пароль мин. 8 символов",
    passwordDoesntMatch = "Пароли не совпадают"
}

export function validateForm(usernameInput: string, passwordInput: string, passwordRepeatInput: string): errors | null
{    
    if (!usernameInput)
        return errors.voidUsername
    if (!validator.isLength(usernameInput, {min: 3}))
        return errors.shortUsername
    if (!passwordInput || !validator.isLength(passwordInput, {min: 8}))
        return errors.invalidPassword
    if (!validator.equals(passwordInput, passwordRepeatInput))
        return errors.passwordDoesntMatch
    
    return null
}