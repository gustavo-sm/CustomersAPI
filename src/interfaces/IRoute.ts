import { Request, Response } from 'express';

export interface IRoute {
    task(req : Request, res : Response) : void;
}