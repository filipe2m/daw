import { Router } from "express";
import { UserController } from "../controllers/UserController";

export class UserRoute {
  private controller: UserController;

  constructor() {
    this.controller = new UserController();
  }

  routes(app: Router) {
    app.post("/api/user", this.controller.create);
    app.post("/api/user/signin", this.controller.signin);
  }
}