import { API } from "../constant/api-key";
import { ILogin, IUser } from "../type_config/login_type";

export const loginService = async (data:ILogin):Promise<IUser> => {
    return fetch(`${API}auth/user-login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    }).then(response => response.json()).catch(error => null);
}