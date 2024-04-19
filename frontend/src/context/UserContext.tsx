import { Dispatch, SetStateAction, createContext } from "react";
import { ILoginRequest } from "../interfaces/ILoginRequest";
import { IFailLoginResponse, ISuccessLoginResponse } from "../interfaces/ILoginResponse";

export interface IUserContext {
    userData: ISuccessLoginResponse | IFailLoginResponse | null;
    setUserData: Dispatch<SetStateAction<ISuccessLoginResponse | IFailLoginResponse | null>>;
    login: (loginRequest: ILoginRequest) => Promise<ISuccessLoginResponse | IFailLoginResponse>;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);