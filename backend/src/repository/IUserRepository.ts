import { User } from "../domain/User";

export default interface IUserRepository {
  create: (user: User) => Promise<User>;
  signin: (email: string) => Promise<User>;
}