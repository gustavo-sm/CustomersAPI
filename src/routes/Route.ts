import { IRoute } from "../interfaces/IRoute";
import { Request, Response } from "express";

abstract class Route implements IRoute {
    protected path : string;
    protected method: string;
    
    public get Path() {
        return this.path;
    }    
    
    public get Method() {
        return this.method;
    }
    task(req : Request, res : Response) : void {}
}

class RootRoute extends Route {

    constructor(path : string, method : string) {
        super();
        this.path = path;
        this.method = method;
    }

    task(req : Request, res : Response) : void {
        res.status(200).send('FEZ GET OK');
    }
}

export {RootRoute, Route};