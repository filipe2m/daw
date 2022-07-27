import { Router } from "express";
import { TypeController } from "../controllers/TypeController";
import verifyToken from "../middleware/verifyJWT";

export class TypeRoute {
  private controller: TypeController;

  constructor() {
    this.controller = new TypeController();
  }

  routes(app: Router) {
    app.post("/api/types", verifyToken, this.controller.create);
    app.get("/api/types", verifyToken, this.controller.getAll);
    app.get("/api/types/:id", verifyToken, this.controller.get);
    app.put("/api/types/:id", verifyToken, this.controller.update);
    app.delete("/api/types/:id", verifyToken, this.controller.delete);
  }
}