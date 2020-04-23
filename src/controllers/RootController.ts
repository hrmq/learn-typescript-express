import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';

@Controller('/')
export class RootController {
  @Get('')
  getRoot(req: Request, res: Response) {
    res.send('Hello World');
  }
}
