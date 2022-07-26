import { Router } from "express";
import { TypeController } from "../controllers/TypeController";

export class TypeRoute {
  private controller: TypeController;

  constructor() {
    this.controller = new TypeController();
  }

  routes(app: Router) {
    app.post("/api/types", this.controller.create);
    app.get("/api/types", this.controller.getAll);
    app.get("/api/types/:id", this.controller.get);
    app.put("/api/types/:id", this.controller.update);
    app.delete("/api/types/:id", this.controller.delete);
  }
}