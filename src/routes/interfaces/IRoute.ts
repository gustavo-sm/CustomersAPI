import { Request, Response } from 'express';

export interface IRoute {
    path : string;
    task(req : Request, res : Response) : void;
}