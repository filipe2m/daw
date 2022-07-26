import { Request, Response, NextFunction } from "express";
import ICategoryDTO from "../dto/ICategoryDTO";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {
  private service: CategoryService;

  constructor() { 
    this.service = new CategoryService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    let categoryDto: ICategoryDTO = req.body;
    console.log("CategoryController: create: " + JSON.stringify(categoryDto));
    try {
      let result = await this.service.create(categoryDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    console.log("CategoryController: getAll ");
    try {
      let result = await this.service.getAll();
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("CategoryController: get: " + id);
    try {
      let result = await this.service.get(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let categoryDto: ICategoryDTO = req.body;
    console.log("CategoryController: put: " + JSON.stringify(categoryDto));
    try {
      let result = await this.service.update(id, categoryDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("CategoryController: delete: " + id);
    try {
      let result = await this.service.delete(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}