import { UserRoute } from "./UserRoute";
import { FileRoute } from "./FileRoute";
import { TypeRoute } from "./TypeRoute";

class Routes {
  private _user: UserRoute;
  private _file: FileRoute;
  private _type: TypeRoute;

  constructor() {
    this._user = new UserRoute();
    this._file = new FileRoute();
    this._type = new TypeRoute();
  }

  get user(): UserRoute {
    return this._user;
  }

  get file(): FileRoute {
    return this._file;
  }

  get type(): TypeRoute {
    return this._type;
  }
}
export default Routes;