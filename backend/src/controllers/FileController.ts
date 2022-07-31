import { Request, Response, NextFunction } from "express";
import IFileDTO from "../dto/IFileDTO";
import { FileService } from "../services/FileService";


export class FileController {
  private service: FileService;

  constructor() { 
    this.service = new FileService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    console.log("FileController: create: " + JSON.stringify(req.body));
    console.log("FileController: upload: " + JSON.stringify(req.file));

    let fileDto: IFileDTO = req.body;
    fileDto.path = req.file?.path!;
    
    try {
      let result = await this.service.create(fileDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    console.log("FileController: getAll ");
    try {
      let result = await this.service.getAll();
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("FileController: get: " + id);
    try {
      let result = await this.service.get(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let fileDto: IFileDTO = req.body;
    console.log("FileController: put: " + JSON.stringify(fileDto));
    try {
      let result = await this.service.update(id, fileDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log("FileController: delete: " + id);
    try {
      let result = await this.service.delete(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}