import IUserDTO from "../dto/IUserDTO";
import {IUserPersistence} from "../dataschema/IUserPersistence";

export class User {
    name: string;
    email: string;
    password: string;

    private constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static create(userDTO: IUserDTO | IUserPersistence ): User {
        if (
            userDTO.name &&
            userDTO.email &&
            userDTO.password
        ) {
          return new User(
            userDTO.name,
            userDTO.email,
            userDTO.password
          );
        } else {
          throw new Error("User fields can't be null");
        }
    }
}
