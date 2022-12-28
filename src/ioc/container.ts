import { IocContext } from 'power-di';

import { ApplicationService } from '../services/application.service';
import { MsalService } from '../services/msal.service';
import { UserService } from '../services/user.service';

export const ioc = IocContext.DefaultInstance;
ioc.register(ApplicationService);
ioc.register(UserService);
ioc.register(MsalService);
