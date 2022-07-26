import { Request, Response, NextFunction } from "express";
import IUserDTO from "../dto/IUserDTO";

export class UserController {

  constructor() { }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send('User creation route');
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send('User sign-in route');
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}