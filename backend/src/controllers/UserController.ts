import { Request, Response, NextFunction } from "express";
import IUserDTO from "../dto/IUserDTO";
import { UserService } from "../services/UserService";

export class UserController {
  private service: UserService;

  constructor() { 
    this.service = new UserService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    let userDto: IUserDTO = req.body;
    console.log("UserController: create: " + JSON.stringify(userDto));
    try {
      let result = await this.service.createUser(userDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  signin = async (req: Request, res: Response, next: NextFunction) => {
    let userDto: IUserDTO = req.body;
    console.log("UserController: signin: " + JSON.stringify(req.params.body));
    try {
      let result = await this.service.signIn(userDto.email, userDto.password);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}