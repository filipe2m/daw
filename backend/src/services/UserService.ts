import { UserRepositoryFactory } from "../repository/UserRepositoryFactory";
import IUserRepository from "../repository/IUserRepository";
import IUserDTO from "../dto/IUserDTO";
import { UserMapper } from "../mappers/UserMapper";

export class UserService {
  private repository: IUserRepository;

  constructor() {
    this.repository = UserRepositoryFactory.adminRepository();
  }

  async createUser(userDto: IUserDTO) {
    console.log("UserService: createUser: " + JSON.stringify(userDto));
    let userDomain = UserMapper.toDomain(userDto);
    let result = await this.repository.create(userDomain);
    return UserMapper.toDTO(result);
  }

  async signIn(userDto: IUserDTO) {
    console.log("userService: signIn: " + JSON.stringify(userDto));
    let userDomain = UserMapper.toDomain(userDto);
    let result = await this.repository.signin(userDomain);
    return UserMapper.toDTO(result);
  }
}