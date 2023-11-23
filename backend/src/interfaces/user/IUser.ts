export interface ILogin {
    email: string;
    password: string;
}

export interface IUser extends ILogin {
    name: string;
    id: number;
}

export type IUserResponse = Omit<IUser, 'password'>;
