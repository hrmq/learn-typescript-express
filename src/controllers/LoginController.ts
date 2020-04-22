import { Request, Response } from 'express';

import { controller, get } from './decorators';

@controller('')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.render('login');
  }
}
