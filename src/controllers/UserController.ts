import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';

@Controller('user')
export class UserController {
  @Get('login')
  getLogin(req: Request, res: Response): void {
    res.render('login');
  }

  @Get('logout')
  getLogout(req: Request, res: Response): void {
    res.redirect('/');
  }
}
