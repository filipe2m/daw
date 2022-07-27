import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import verifyToken from "../middleware/verifyJWT";

export class CategoryRoute {
  private controller: CategoryController;

  constructor() {
    this.controller = new CategoryController();
  }

  routes(app: Router) {
    app.post("/api/categories", verifyToken, this.controller.create);
    app.get("/api/categories", verifyToken, this.controller.getAll);
    app.get("/api/categories/:id", verifyToken, this.controller.get);
    app.put("/api/categories/:id", verifyToken, this.controller.update);
    app.delete("/api/categories/:id", verifyToken, this.controller.delete);
  }
}