import { UserRepositoryFactory } from "../repository/UserRepositoryFactory";
import IUserRepository from "../repository/IUserRepository";
import IUserDTO from "../dto/IUserDTO";
import { UserMapper } from "../mappers/UserMapper";
import jwt from 'jsonwebtoken';

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

  // async signIn(userDto: IUserDTO) {
  //   console.log("userService: signIn: " + JSON.stringify(userDto));
  //   let userDomain = UserMapper.toDomain(userDto);
  //   let result = await this.repository.signin(userDomain);
  //   return UserMapper.toDTO(result);
  // }

  async signIn (email: string, password: string) { 
    try {
        const user = await this.repository.signin(email);
        if (Object.keys(user).length === 0) {throw new Error('Email and/or Password Invalid.')
        }else{ 
            if(password !== user.password){
                throw new Error('Email and/or Password Invalid.')
            } else {
                const tokenData= {user:user.email};                 
                const accessToken = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET!, {expiresIn:"15m"});
                return ({email, accessToken});
            }
        }
    } catch (error) {
        console.log(error)
    }
  };
}