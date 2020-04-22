import { Request, Response } from 'express';

export class RootController {
  getRoot(req: Request, res: Response) {
    res.send('Hello World');
  }
}
