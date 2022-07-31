import { Router } from "express";
import { FileController } from "../controllers/FileController";
import verifyToken from "../middleware/verifyJWT";
import multer from "multer";

export class FileRoute {
  private controller: FileController;

  private storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    }
  });
  private upload = multer({storage: this.storage, limits: {
    fileSize: 1024 * 1024 * 50 //50Mb
  }});

  constructor() {
    this.controller = new FileController();
  }

  routes(app: Router) {
    app.post("/api/files", verifyToken, this.upload.single('file'), this.controller.create);
    app.get("/api/files", verifyToken, this.controller.getAll);
    app.get("/api/files/:id", verifyToken, this.controller.get);
    app.put("/api/files/:id", verifyToken, this.controller.update);
    app.delete("/api/files/:id", verifyToken, this.controller.delete);
  }
}