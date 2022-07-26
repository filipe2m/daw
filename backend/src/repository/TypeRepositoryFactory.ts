import ITypeRepository from "./ITypeRepository";
import { MongoTypeRepository } from "./mongodb/MongoTypeRepository";
import { datasource } from "../app";

export class TypeRepositoryFactory {
  public static adminRepository(): ITypeRepository {
    switch (datasource.repository) {
      case "mongo":
        return new MongoTypeRepository();
      default:
        return new MongoTypeRepository();
    }
  }
}