import { Router } from "express";
import { FileController } from "../controllers/FileController";

export class FileRoute {
  private controller: FileController;

  constructor() {
    this.controller = new FileController();
  }

  routes(app: Router) {
    app.post("/api/files", this.controller.create);
    app.get("/api/files", this.controller.getAll);
    app.get("/api/files/:id", this.controller.get);
    app.put("/api/files/:id", this.controller.update);
    app.delete("/api/files/:id", this.controller.delete);
  }
}