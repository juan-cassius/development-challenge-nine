import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';
import { ILogin, IUserResponse } from '../interfaces/user/IUser';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { IUserModel } from '../interfaces/user/IUserModel';
import UserModel from '../models/UserModel';

export default class UserService {
  constructor(
        private userModel: IUserModel = new UserModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
    const allUsers = await this.userModel.findAll();
    const usersReturn = allUsers.map(({ id, email, name }) => ({ id, email, name }));
    return {
      status: 'SUCCESSFUL',
      data: usersReturn,
    };
  }

  public async findById(id: number): Promise<ServiceResponse<IUserResponse>> {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { email, name } = user;

    return { status: 'SUCCESSFUL', data: { id, email, name } };
  }

  public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.userModel.findByEmail(data.email);
    if (!user) { return { status: 'NOT_FOUND', data: { message: 'Incorrect email or password' } }; }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) { return { status: 'NOT_FOUND', data: { message: 'Incorrect email or password' } }; }

    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, process.env.JWT_SECRET || 'secret123', { expiresIn: '2h' });

    return {
      status: 'SUCCESSFUL',
      data: {
        token,
        user: {
          name: user.name,
        },
      },
    };
  }
}
