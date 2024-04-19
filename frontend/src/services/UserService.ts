import { ILoginRequest } from "../interfaces/ILoginRequest";
import { IFailLoginResponse, ISuccessLoginResponse } from "../interfaces/ILoginResponse";
import { Api } from "../providers";

const userRoute = '/user/login';

const login = (user: ILoginRequest) => Api.post<ISuccessLoginResponse | IFailLoginResponse>(userRoute, user);

export const userService = {
    login
}