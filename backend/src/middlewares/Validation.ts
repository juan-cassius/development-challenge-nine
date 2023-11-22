/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';

class Validations {
  static validatePatient(req: Request, res: Response, next: NextFunction): Response | void {
    const patient = req.body;

    const requiredKeys = ['fullName', 'birthDate', 'email'];
    const addressRequiredKeys = ['street', 'number', 'district', 'city', 'state', 'country'];

    const notFoundKeys = requiredKeys.find((key) => !(key in patient));
    if (notFoundKeys) {
      return res.status(400).json({ message: `Missing required field: ${notFoundKeys}` });
    }

    const notFoundAddressKeys = addressRequiredKeys.find((key) => !(key in patient.address));
    if (notFoundAddressKeys) {
      return res.status(400).json({ message: `Missing required field: ${notFoundAddressKeys}` });
    }

    const isAFieldEmpty = requiredKeys.find((key) => patient[key] === '');
    if (isAFieldEmpty) {
      return res.status(400).json({ message: `Field ${isAFieldEmpty} cannot be empty` });
    }

    const isAddressFieldEmpty = addressRequiredKeys.find((key) => patient.address[key] === '');
    if (isAddressFieldEmpty) {
      return res.status(400).json({ message: `Field ${isAddressFieldEmpty} cannot be empty` });
    }

    next();
  }
}

export default Validations;
