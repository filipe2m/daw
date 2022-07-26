import { UserRoute } from "./UserRoute";
import { FileRoute } from "./FileRoute";

class Routes {
  private _user: UserRoute;
  private _file: FileRoute;

  constructor() {
    this._user = new UserRoute();
    this._file = new FileRoute();
  }

  get user(): UserRoute {
    return this._user;
  }

  get file(): FileRoute {
    return this._file;
  }
}
export default Routes;