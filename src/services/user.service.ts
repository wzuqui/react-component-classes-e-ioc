import { ioc } from '../ioc/container';
import { MsalService } from './msal.service';
import { IUser } from './user.service.type';

export class UserService {
  private readonly _msalService = ioc.get(MsalService);

  public usuario?: IUser;

  public logado(): boolean {
    const retorno = this.usuario !== undefined;
    return retorno;
  }

  public async login(): Promise<void> {
    const response = await this._msalService.login();
    this.usuario = {
      email: response.mail,
      foto: response.avatar,
      nome: response.display_name,
    };
  }
}
