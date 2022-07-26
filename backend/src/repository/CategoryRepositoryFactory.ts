import ICategoryRepository from "./ICategoryRepository";
import { MongoCategoryRepository } from "./mongodb/MongoCategoryRepository";
import { datasource } from "../app";

export class CategoryRepositoryFactory {
  public static adminRepository(): ICategoryRepository {
    switch (datasource.repository) {
      case "mongo":
        return new MongoCategoryRepository();
      default:
        return new MongoCategoryRepository();
    }
  }
}