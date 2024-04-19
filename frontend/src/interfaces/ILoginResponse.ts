export interface ISuccessLoginResponse {
    token: string;
    user: {
        name: string;
    }
}

export interface IFailLoginResponse {
    message: string;
}