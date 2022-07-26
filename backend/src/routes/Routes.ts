import { UserRoute } from "./UserRoute";

class Routes {
  private _user: UserRoute;

  constructor() {
    this._user = new UserRoute();
  }

  get user(): UserRoute {
    return this._user;
  }

}
export default Routes;