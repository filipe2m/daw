import { User } from "../../domain/User";
import userSchema from "../../persistence/schemas/userSchema";
import { UserMapper } from "../../mappers/UserMapper";
import IUserRepository from "../IUserRepository";
import { IUserPersistence } from "../../dataschema/IUserPersistence";

export class MongoUserRepository implements IUserRepository {
  constructor() {}

  async create(user: User): Promise<User> {
    console.log("MongoUserRepository: create: " + JSON.stringify(user));

    try {
      const userDataModel = UserMapper.toPersistence(user);
      const createdUser = await userSchema.create(userDataModel);

      return UserMapper.toDomain(createdUser);
    } catch (err) {
      throw err;
    }
  }

  async signin(user: User): Promise<any> {
    console.log("MongoUserRepository: signin: " + JSON.stringify(user));

    try {
      let result = await userSchema.findOne({ email: user.email, password: user.password });
      if (result === null) throw new Error("Invalid email or password");
      return UserMapper.toDomain(result);
    } catch (err) {
      throw err;
    }
  }
}