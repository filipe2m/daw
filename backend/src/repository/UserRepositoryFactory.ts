import IUserRepository from "./IUserRepository";
import { MongoUserRepository } from "./mongodb/MongoUserRepository";
import { datasource } from "../app";

export class UserRepositoryFactory {
  public static adminRepository(): IUserRepository {
    switch (datasource.repository) {
      case "mongo":
        return new MongoUserRepository();
      default:
        return new MongoUserRepository();
    }
  }
}