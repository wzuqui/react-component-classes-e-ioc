import { MsalLoginResponse } from './msal.service.type';

export class MsalService {
  public login(): Promise<MsalLoginResponse> {
    return new Promise((resolve) => {
      console.group(MsalService.name);
      console.info('iniciado login');
      console.info('aguardando 2 segundos...');
      setTimeout(() => {
        resolve({
          avatar: 'https://github.com/wzuqui.png',
          display_name: 'Willian Luis Zuqui',
          mail: 'willianluiszuqui@gmail',
        });
        console.info('finalizado login');
        console.groupEnd();
      }, 2_000);
    });
  }
}
