import { useState } from "react";
import { IUserContext } from "../context/UserContext";
import { userService } from "../services/UserService";
import { IFailLoginResponse, ISuccessLoginResponse } from "../interfaces/ILoginResponse";
import { ILoginRequest } from "../interfaces/ILoginRequest";

export const useUser = (): IUserContext => {
    const [userData, setUserData] = useState<ISuccessLoginResponse | IFailLoginResponse | null>(null);

    const login = async (loginRequest: ILoginRequest): Promise<ISuccessLoginResponse | IFailLoginResponse> => {
        const { status, data } = await userService.login(loginRequest);
        if (status !== 200) throw new Error('Error logging in');
        if ('token' in data && 'user' in data) {
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('user', JSON.stringify(data.user.name));
        }
        return data;
    }

    return {
        userData,
        setUserData,
        login,
    }
}