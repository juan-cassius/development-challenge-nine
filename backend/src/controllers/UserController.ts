import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/UserService';

export default class UserController {
  constructor(
        private userService = new UserService(),
  ) {}

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.findAll();
    return res.status(200).json(serviceResponse.data);
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.findById(Number(req.params.id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const serviceResponse = await this.userService.login({ email, password });

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }
}
