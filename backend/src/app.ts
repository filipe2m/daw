require('dotenv').config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./routes/Routes";

export class App {
  public app: express.Application = express();
  public routes: Routes = new Routes();
  public mongoUrl: string =
    `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.1gqcc.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

  constructor() {
    this.config();
    this.mongoSetup();
    this.routes.user.routes(this.app);
    this.routes.file.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export const datasource = {
  repository: "mongo",
};

export default new App().app;