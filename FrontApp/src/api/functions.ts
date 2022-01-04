import API from "./defaultApi";
import { IAuthInput } from '../redux/auth/types';
import { AxiosResponse } from "axios";


export async function auth(data:IAuthInput): Promise<AxiosResponse> {
    const response = await API.post("/auth/login", JSON.stringify(data))
    return response.data;
}

export async function reg(data:IAuthInput): Promise<AxiosResponse> {
    const response = await API.post("/auth/new_user", JSON.stringify(data))
    return response.data
}

export async function userLogout() {
    await API.post("/auth/logout");
}

export async function getFriendsByQuery(searchString: string): Promise<AxiosResponse> {
    const pathWithQuery: string = "/friends/search?searchQuery=" + searchString 
    const response = await API.get(pathWithQuery, {

    });
    return response.data;
}