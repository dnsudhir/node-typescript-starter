import { Request, Response } from "express";


export interface IBaseController {
    get(req: Request, res: Response);

    getAll(req: Request, res: Response);

    add(req: Request, res: Response);

    update(req: Request, res: Response);

    delete(req: Request, res: Response);
}