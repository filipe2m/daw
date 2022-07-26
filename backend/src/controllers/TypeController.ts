import { Request, Response, NextFunction } from "express";
import ITypeDTO from "../dto/ITypeDTO";
import { TypeService } from "../services/TypeService";

export class TypeController {
  private service: TypeService;

  constructor() { 
    this.service = new TypeService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    let typeDto: ITypeDTO = req.body;
    console.log("TypeController: create: " + JSON.stringify(typeDto));
    try {
      let result = await this.service.create(typeDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    console.log("TypeController: getAll ");
    try {
      let result = await this.service.getAll();
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("TypeController: get: " + id);
    try {
      let result = await this.service.get(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let typeDto: ITypeDTO = req.body;
    console.log("TypeController: put: " + JSON.stringify(typeDto));
    try {
      let result = await this.service.update(id, typeDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("TypeController: delete: " + id);
    try {
      let result = await this.service.delete(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}