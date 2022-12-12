import { IRoute } from "./interfaces/IRoute";
import { Request, Response } from "express";

/*abstract class Route implements IRoute {
    protected path : string;
    
    public get Path() {
        return this.path;
    }    
    
    task(req : Request, res : Response) : void {}
}*/

class RootRoute implements IRoute {
    private _path;

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