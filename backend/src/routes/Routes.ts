import { UserRoute } from "./UserRoute";
import { FileRoute } from "./FileRoute";
import { TypeRoute } from "./TypeRoute";
import { CategoryRoute } from "./CategoryRoute";

class Routes {
  private _user: UserRoute;
  private _file: FileRoute;
  private _type: TypeRoute;
  private _category: CategoryRoute;

  constructor() {
    this._user = new UserRoute();
    this._file = new FileRoute();
    this._type = new TypeRoute();
    this._category = new CategoryRoute();
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

  get category(): CategoryRoute {
    return this._category;
  }
}
export default Routes;