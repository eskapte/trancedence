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

export async function userLogout(username: string) {
    await API.post("/auth/logout", JSON.stringify(username));
}

// export async function register(params: IAuthParams) : Promise<void> {
//     const response = await apiPost("http://localhost:5000/api/auth/new_user", params);

//     console.log(await response.json());
// }

// export async function auth(params: IAuthParams) : Promise<void> {
   
//     const response = await apiPost("http://localhost:5000/api/auth/login", params);

//     if (response.status === 200)
//     {
//         const token = await response.json().then(res => res.token);
//         localStorage.setItem("token", token);
//     }
//     else
//         console.error("Invalid data");
// }

// async function apiPost(url: string, params: IAuthParams) : Promise<Response> {
//     const data = {
//         method: fetchMethods.POST,
//         headers: {
//             'Accept': 'application/json, text/plain',
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//         body: JSON.stringify(params)
//     }

//     const response = await fetch(url, data);

//     return response;
// }