import { Router } from "express";
import { FileController } from "../controllers/FileController";
import verifyToken from "../middleware/verifyJWT";

export class FileRoute {
  private controller: FileController;

  constructor() {
    this.controller = new FileController();
  }

  routes(app: Router) {
    app.post("/api/files", verifyToken, this.controller.create);
    app.get("/api/files", verifyToken, this.controller.getAll);
    app.get("/api/files/:id", verifyToken, this.controller.get);
    app.put("/api/files/:id", verifyToken, this.controller.update);
    app.delete("/api/files/:id", verifyToken, this.controller.delete);
  }
}