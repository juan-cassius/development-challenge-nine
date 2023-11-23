import { IUser } from '../interfaces/user/IUser';
import SequelizeUser from '../database/models/SequelizeUser';
import { IUserModel } from '../interfaces/user/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll() {
    const dbData = await this.model.findAll();
    return dbData.map(({
      id, email, password, name,
    }) => ({
      id, email, password, name,
    }));
  }

  async findById(id: number): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    return user.toJSON() as IUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    const { id, password, name } = user;
    return {
      id, email, password, name,
    };
  }
}
