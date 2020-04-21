import { Request, Response } from 'express';

import { controller } from './decorators';

@controller('')
export class RootController {
  getRoot(req: Request, res: Response) {
    res.send('Hello World');
  }
}
