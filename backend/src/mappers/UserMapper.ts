import { IUserPersistence } from "../dataschema/IUserPersistence";
import IUserDTO from "../dto/IUserDTO";
import { User } from "../domain/User";

export class UserMapper {
  public static toDTO(user: User): IUserDTO {
    return {
      name: user.name,
      email: user.email,
      password: user.password
    } as IUserDTO;
  }

  public static toPersistence(user: User): IUserPersistence {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    } as IUserPersistence;
  }

  public static toDomain(user: IUserDTO | IUserPersistence): User {
    return User.create(user);
  }

}