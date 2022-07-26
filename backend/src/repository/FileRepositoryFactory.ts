import IFileRepository from "./IFileRepository";
import { MongoFileRepository } from "./mongodb/MongoFileRepository";
import { datasource } from "../app";

export class FileRepositoryFactory {
  public static adminRepository(): IFileRepository {
    switch (datasource.repository) {
      case "mongo":
        return new MongoFileRepository();
      default:
        return new MongoFileRepository();
    }
  }
}