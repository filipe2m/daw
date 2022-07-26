import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

export class CategoryRoute {
  private controller: CategoryController;

  constructor() {
    this.controller = new CategoryController();
  }

  routes(app: Router) {
    app.post("/api/categories", this.controller.create);
    app.get("/api/categories", this.controller.getAll);
    app.get("/api/categories/:id", this.controller.get);
    app.put("/api/categories/:id", this.controller.update);
    app.delete("/api/categories/:id", this.controller.delete);
  }
}