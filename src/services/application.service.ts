import { ioc } from '../ioc/container';

import { UserService } from './user.service';

export class ApplicationService {
  private readonly _userService = ioc.get(UserService);

  public get usuario() {
    return this._userService.usuario;
  }

  public logado() {
    return this._userService.logado();
  }

  public login() {
    return this._userService.login();
  }
}
