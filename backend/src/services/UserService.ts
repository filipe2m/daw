import IUserDTO from "../dto/IUserDTO";

export class UserService {

  constructor() {
  }

  async createUser(userDto: IUserDTO) {
    console.log("UserService: createUser: " + JSON.stringify(userDto));
    return userDto;
  }

  async signIn(userDto: IUserDTO) {
    console.log("userService: signIn: " + JSON.stringify(userDto));
    return userDto;
  }
}