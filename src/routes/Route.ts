import { IRoute } from "./interfaces/IRoute";
import { Request, Response } from "express";

class RootRoute implements IRoute {
    private _path : string;

    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public task(req : Request, res : Response) : void {
        res.status(200).send('GET /');
    }
}

class CustomersRoute implements IRoute {
    private _path;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public task(req : Request, res : Response) : void {
        res.status(200).send('GET Customers');
    }
}

export { RootRoute, CustomersRoute };